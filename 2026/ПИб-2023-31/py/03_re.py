# ver 2 => регулярками
# <small>24.03.2026</small> 
import re


start, end = '<small>', '</small>'
ln = len('<small>24.03.2026</small>')
ptn = r'<small>\s*(\d{2}\.\d{2}\.\d{4})\s*</small>'

with open('./data/pgatu.html', 'r', encoding="utf8") as f:
    s = f.read()
    for i, match in enumerate(re.findall(ptn, s), start=1):
        print(i, match)
