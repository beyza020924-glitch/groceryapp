import urllib.request, urllib.parse, json, io, os
from PIL import Image

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
dest_dir = r'd:\donwnloads\groceryapp\images'

targets = {
    'salam.png': 'File:Salame milano a fette.JPG',
    'cappy.png': 'File:Orange juice (3602127393).jpg',
    'cleaning_supplies.png': 'File:Cleaning supplies.jpg',
    'tutku.png': 'File:Chocolate cream filled cookies.jpg'
}

def search_wikimedia(q):
    params = {
        'action': 'query',
        'generator': 'search',
        'gsrnamespace': '6',
        'gsrsearch': q,
        'gsrlimit': '3',
        'prop': 'imageinfo',
        'iiprop': 'url',
        'iiurlwidth': '640',
        'format': 'json'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'BeyzaGroceryApp/1.0 (beyza@example.com)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get('query', {}).get('pages', {})
            for pid, p in pages.items():
                if 'imageinfo' in p and p['imageinfo']:
                    thumb = p['imageinfo'][0].get('thumburl')
                    if thumb:
                        return thumb.split('?')[0]
    except Exception as e:
        print(f"Error {q}: {e}")
    return None

queries = {
    'salam.png': 'sliced salami sausage cold cuts',
    'cappy.png': 'orange juice carton bottle',
    'cleaning_supplies.png': 'cleaning spray bottles sponge bucket',
    'picnic_set.png': 'disposable paper plates plastic cups picnic',
    'protein_milk.png': 'chocolate milk bottle glass shake'
}

for fname, q in queries.items():
    thumb_url = search_wikimedia(q)
    if not thumb_url:
        print(f"Not found: {fname}")
        continue
    try:
        req = urllib.request.Request(thumb_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp:
            raw = resp.read()
        img = Image.open(io.BytesIO(raw))
        if img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        min_dim = min(w, h)
        left = (w - min_dim) // 2
        top = (h - min_dim) // 2
        cropped = img.crop((left, top, left + min_dim, top + min_dim))
        resized = cropped.resize((600, 600), Image.Resampling.LANCZOS)
        out_path = os.path.join(dest_dir, fname)
        resized.save(out_path, 'PNG')
        print(f"SUCCESS: {fname} saved from {thumb_url[:60]}...")
    except Exception as e:
        print(f"Error saving {fname}: {e}")
