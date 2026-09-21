import urllib.request, urllib.parse, json, time, io, os
from PIL import Image

HEADERS = {
    'User-Agent': 'BeyzaGroceryAppProject/1.0 (https://github.com/beyza; beyza@example.com) python-urllib'
}

def get_wikimedia_image(query):
    params = {
        'action': 'query',
        'generator': 'search',
        'gsrnamespace': '6',
        'gsrsearch': query,
        'gsrlimit': '3',
        'prop': 'imageinfo',
        'iiprop': 'url|mime',
        'format': 'json'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, p in pages.items():
                if 'imageinfo' in p and p['imageinfo']:
                    info = p['imageinfo'][0]
                    mime = info.get('mime', '')
                    if 'image/jpeg' in mime or 'image/png' in mime:
                        return info['url']
    except Exception as e:
        print(f"Search error for {query}: {e}")
    return None

def download_and_save(img_url, dest_path):
    req = urllib.request.Request(img_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
        img = Image.open(io.BytesIO(data))
        if img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        min_dim = min(w, h)
        left = (w - min_dim) // 2
        top = (h - min_dim) // 2
        cropped = img.crop((left, top, left + min_dim, top + min_dim))
        resized = cropped.resize((600, 600), Image.Resampling.LANCZOS)
        resized.save(dest_path, 'PNG')
        print(f"SAVED: {dest_path}")
        return True
    except Exception as e:
        print(f"Download error {img_url}: {e}")
        return False

# Test for one
test_url = get_wikimedia_image('Turkish delight pistachios')
print("Found URL:", test_url)
