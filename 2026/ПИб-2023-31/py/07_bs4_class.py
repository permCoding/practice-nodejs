# ver 3 => с использованием bs4
# <small>24.03.2026</small> 
import bs4  # pip install bs4


start, end = '<small>', '</small>'

with open('./data/pgatu.html', 'r', encoding="utf8") as f:
    s = f.read()
    soup = bs4.BeautifulSoup(s, 'html.parser')    

    tags = soup \
        .find('div', {'id': 'col1_content'}) \
        .find_all('li')
    
    for tag in tags:
        print(tag)





"""
<div id="col1_content" class="clearfix">
css
"""