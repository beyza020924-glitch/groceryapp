import urllib.request
import urllib.parse
import json
import time
import io
import os
from PIL import Image

HEADERS = {
    'User-Agent': 'BeyzaGroceryAppProject/1.0 (https://github.com/beyza; beyza@example.com) python-urllib'
}

dest_dir = r'd:\donwnloads\groceryapp\images'

items = [
    ('simit.png', ['Turkish simit', 'Simit sesame', 'Simit Istanbul']),
    ('lokum.png', ['Turkish delight pistachio', 'Lokum confectionery', 'Turkish delight']),
    ('charcoal.png', ['Barbecue charcoal', 'Charcoal briquettes', 'Lump charcoal']),
    ('coffee_cups.png', ['Turkish coffee cup', 'Espresso cup saucer']),
    ('salgam.png', ['A bottle of salgam suyu', 'Salgam', 'Red beet juice glass']),
    ('hazelnuts.png', ['Shelled hazelnuts', 'Hazelnuts without shell', 'Hazelnuts']),
    ('doritos.png', ['Tortilla chips nachos', 'Nachos cheese', 'Corn tortilla chips']),
    ('lays.png', ['Potato chips bowl', 'Crisps bowl', 'Potato chips']),
    ('soda.png', ['Acqua Panna mineral water in a glass bottle', 'Mineral water glass bottle', 'Glass bottle mineral water']),
    ('spaghetti.png', ['Raw spaghetti', 'Spaghetti pasta dry', 'Spaghetti']),
    ('macaroni.png', ['Elbow macaroni die back', 'Macaroni raw dry', 'Elbow macaroni']),
    ('lentils.png', ['Red split lentils', 'Red lentils dry', 'Red lentils']),
    ('sunflower_oil.png', ['Bottle 1 liter Sunflower refined oil', 'Sunflower oil bottle', 'Cooking oil bottle']),
    ('tea_pack.png', ['Turkish tea glass', 'Dry black tea leaves', 'Black tea in glass']),
    ('paper_towel.png', ['Paper towel roll', 'Kitchen paper roll', 'Paper towel']),
    ('ariel.png', ['Detergent powder with laundry enzymes', 'Washing powder', 'Laundry detergent powder']),
    ('candles.png', ['Birthday cake candles', 'Birthday candles burning', 'Cake candles']),
    ('shower_gel.png', ['Shower gel bottle', 'Body wash bottle', 'Cosmetic bottle']),
    ('cleaning_supplies.png', ['Picnic plastic tableware', 'Paper plates picnic', 'Disposable picnic set']),
    ('salam.png', ['Sliced salami', 'Mortadella sliced', 'Bologna sausage sliced']),
    ('ready_meal.png', ['Kuru Fasulye pilav', 'Kuru fasulye', 'White beans stew']),
    ('cappy.png', ['Orange juice bottle carton', 'Fruit juice tetra pak', 'Orange juice glass'])
]

def search_wikimedia(queries):
    for q in queries:
        params = {
            'action': 'query',
            'generator': 'search',
            'gsrnamespace': '6',
            'gsrsearch': q,
            'gsrlimit': '5',
            'prop': 'imageinfo',
            'iiprop': 'url|mime',
            'format': 'json'
        }
        url = 'https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                pages = data.get('query', {}).get('pages', {})
                for pid, p in pages.items():
                    if 'imageinfo' in p and p['imageinfo']:
                        info = p['imageinfo'][0]
                        mime = info.get('mime', '')
                        if 'image/jpeg' in mime or 'image/png' in mime:
                            return p.get('title'), info['url']
        except Exception as e:
            print(f"Error querying '{q}': {e}")
        time.sleep(1.0)
    return None, None

def download_and_crop(url, out_path, size=(600, 600)):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
        img = Image.open(io.BytesIO(data))
        if img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        min_dim = min(w, h)
        left = (w - min_dim) // 2
        top = (h - min_dim) // 2
        cropped = img.crop((left, top, left + min_dim, top + min_dim))
        resized = cropped.resize(size, Image.Resampling.LANCZOS)
        resized.save(out_path, 'PNG')
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

print("Starting image fetch...")
for fname, qlist in items:
    out_path = os.path.join(dest_dir, fname)
    title, img_url = search_wikimedia(qlist)
    if img_url:
        print(f"[{fname}] Found '{title}' -> {img_url[:60]}...")
        success = download_and_crop(img_url, out_path)
        if success:
            print(f" -> Successfully saved {fname}")
    else:
        print(f"[{fname}] NOT FOUND")
    time.sleep(1.2)

print("Finished image processing!")
