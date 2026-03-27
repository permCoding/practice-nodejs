# ver 3 => с использованием bs4
# <small>24.03.2026</small> 
import bs4  # pip install bs4


start, end = '<small>', '</small>'
prefix = 'https://pgatu.ru'

with open('./data/pgatu.html', 'r', encoding="utf8") as f:
    s = f.read()
    soup = bs4.BeautifulSoup(s, 'html.parser')    

    tags = soup \
        .find('div', {'id': 'col1_content'}) \
        .find('ul') \
        .find_all('a')
    i = 0
    for tag in tags:
        i += 1
        obj = [
            str(i),
            tag.text.strip(),
            prefix + tag.get('href')
        ]
        print(';'.join(obj))





"""
<div id="col1_content" class="clearfix">
css

https://pgatu.ru/
https://pgatu.ru/today/contactinfo/
"""