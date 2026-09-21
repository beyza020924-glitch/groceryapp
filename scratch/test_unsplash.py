import urllib.request
import re

url = 'https://unsplash.com/s/photos/turkish-delight'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https://images\.unsplash\.com/photo-[0-9a-zA-Z\-_]+', html)
        print('Found count:', len(matches))
        for m in list(dict.fromkeys(matches))[:5]:
            print('URL:', m)
except Exception as e:
    print('Error:', e)
