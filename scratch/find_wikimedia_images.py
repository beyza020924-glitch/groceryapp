import urllib.request, urllib.parse, json, time

queries = {
    'simit.png': 'Simit sesame seeds bread',
    'lokum.png': 'Turkish delight pistachio confection',
    'coffee_cups.png': 'Turkish coffee and cup',
    'salgam.png': 'Turnip juice or red beverage glass',
    'charcoal.png': 'Barbecue charcoal briquettes',
    'hazelnuts.png': 'Hazelnuts shelled',
    'lays.png': 'Potato chips crisps bowl',
    'soda.png': 'Mineral water glass bottle',
    'spaghetti.png': 'Spaghetti pasta raw dry',
    'macaroni.png': 'Macaroni pasta raw dry',
    'lentils.png': 'Red lentils dry',
    'sunflower_oil.png': 'Sunflower oil bottle yellow',
    'tea_pack.png': 'Black tea dry leaves glass',
    'paper_towel.png': 'Paper towel roll white',
    'ariel.png': 'Washing powder laundry detergent',
    'candles.png': 'Birthday candles cake burning',
    'shower_gel.png': 'Shower gel bottle body wash',
    'cleaning_supplies.png': 'Disposable plates cups picnic',
    'salam.png': 'Sliced salami sausage',
    'ready_meal.png': 'Kuru fasulye rice stew'
}

def search_wikimedia(q):
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
    req = urllib.request.Request(url, headers={'User-Agent': 'MarketAppBot/2.0 (student project)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read())
            pages = data.get('query', {}).get('pages', {})
            imgs = []
            for pid, p in pages.items():
                if 'imageinfo' in p and p['imageinfo']:
                    info = p['imageinfo'][0]
                    mime = info.get('mime', '')
                    if 'image' in mime and ('jpeg' in mime or 'png' in mime):
                        imgs.append((p.get('title'), info['url']))
            return imgs
    except Exception as e:
        return [('error', str(e))]

for fname, q in queries.items():
    res = search_wikimedia(q)
    print(f"=== {fname} ({q}) ===")
    for title, u in res[:2]:
        print(f"  {title}: {u}")
    time.sleep(0.5)
