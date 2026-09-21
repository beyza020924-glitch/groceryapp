import urllib.request, urllib.parse, json, io, os, time
from PIL import Image

HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
dest_dir = r'd:\donwnloads\groceryapp\images'

targets = {
    'charcoal.png': 'File:Charcoal-barbecue-lighters.jpg',
    'coffee_cups.png': 'File:A cup of Turkish coffee.jpg',
    'hazelnuts.png': 'File:Hazelnuts without shell.jpg',
    'soda.png': 'File:Acqua Panna mineral water in a glass bottle - 20140408.jpg',
    'lentils.png': 'File:A mix of split lentils, masoor dal India.jpg',
    'sunflower_oil.png': 'File:Bottle 1 liter Sunflower refined oil.jpg',
    'tea_pack.png': 'File:Glass of tea 05119.jpg',
    'paper_towel.png': 'File:Paper towel.png',
    'ariel.png': 'File:Blue particles in Washing Powder.jpg',
    'candles.png': 'File:Italy - birthday cake with candles 1.jpg',
    'shower_gel.png': 'File:Care lime shower gel (2019) 01.jpg',
    'ready_meal.png': 'File:Kuru-pilav ve cacık.jpg'
}

def get_thumb_urls(titles):
    params = {
        'action': 'query',
        'titles': '|'.join(titles),
        'prop': 'imageinfo',
        'iiprop': 'url',
        'iiurlwidth': '640',
        'format': 'json'
    }
    url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={'User-Agent': 'BeyzaGroceryApp/1.0 (beyza@example.com)'})
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode('utf-8'))
    
    result = {}
    pages = data.get('query', {}).get('pages', {})
    for pid, p in pages.items():
        title = p.get('title')
        if 'imageinfo' in p and p['imageinfo']:
            thumb = p['imageinfo'][0].get('thumburl')
            if thumb:
                result[title] = thumb.split('?')[0]
    return result

titles = list(targets.values())
thumb_map = get_thumb_urls(titles)

for fname, title in targets.items():
    thumb_url = thumb_map.get(title)
    if not thumb_url:
        print(f"No thumb found for {title}")
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
        print(f"ERROR on {fname}: {e}")
    time.sleep(0.5)

print("Batch thumb download finished!")
