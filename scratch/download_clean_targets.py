import urllib.request
import time
import io
import os
from PIL import Image

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

dest_dir = r'd:\donwnloads\groceryapp\images'

targets = {
    'simit.png': 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Simit%2C_salah_satu_roti_khas_Turki.jpg',
    'lokum.png': 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Lokumblokjes_op_bord.JPG',
    'charcoal.png': 'https://upload.wikimedia.org/wikipedia/commons/8/89/Charcoal-barbecue-lighters.jpg',
    'coffee_cups.png': 'https://upload.wikimedia.org/wikipedia/commons/f/ff/A_cup_of_Turkish_coffee.jpg',
    'hazelnuts.png': 'https://upload.wikimedia.org/wikipedia/commons/5/50/Hazelnuts_without_shell.jpg',
    'doritos.png': 'https://upload.wikimedia.org/wikipedia/commons/8/87/Nachos-cheese.jpg',
    'lays.png': 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Tayto_cheese_and_onion_crisps.jpg',
    'soda.png': 'https://upload.wikimedia.org/wikipedia/commons/9/94/Acqua_Panna_mineral_water_in_a_glass_bottle_-_20140408.jpg',
    'spaghetti.png': 'https://images.unsplash.com/photo-1622973536968-3ead9e780960?w=600&auto=format&fit=crop&q=80',
    'macaroni.png': 'https://upload.wikimedia.org/wikipedia/commons/2/29/Elbow_macaroni_die_back.jpg',
    'lentils.png': 'https://upload.wikimedia.org/wikipedia/commons/e/e2/A_mix_of_split_lentils%2C_masoor_dal_India.jpg',
    'sunflower_oil.png': 'https://upload.wikimedia.org/wikipedia/commons/3/33/Bottle_1_liter_Sunflower_refined_oil.jpg',
    'tea_pack.png': 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Glass_of_tea_05119.jpg',
    'paper_towel.png': 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Paper_towel.png',
    'ariel.png': 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Blue_particles_in_Washing_Powder.jpg',
    'candles.png': 'https://upload.wikimedia.org/wikipedia/commons/9/91/Italy_-_birthday_cake_with_candles_1.jpg',
    'shower_gel.png': 'https://upload.wikimedia.org/wikipedia/commons/9/97/Care_lime_shower_gel_%282019%29_01.jpg',
    'ready_meal.png': 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Kuru-pilav_ve_cac%C4%B1k.jpg'
}

def download_and_crop(url, out_path, size=(600, 600)):
    clean_url = url.split('?')[0] if 'wikimedia.org' in url else url
    req = urllib.request.Request(clean_url, headers=HEADERS)
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
        resized = cropped.resize(size, Image.Resampling.LANCZOS)
        resized.save(out_path, 'PNG')
        print(f"SUCCESS: {os.path.basename(out_path)}")
        return True
    except Exception as e:
        print(f"FAILED {os.path.basename(out_path)} from {clean_url}: {e}")
        return False

for filename, url in targets.items():
    out_path = os.path.join(dest_dir, filename)
    download_and_crop(url, out_path)
    time.sleep(1.0)

print("All done!")
