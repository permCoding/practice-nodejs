# ver 3 => с использованием bs4
# <small>24.03.2026</small> 
import bs4  # pip install bs4


start, end = '<small>', '</small>'

with open('./data/pgatu.html', 'r', encoding="utf8") as f:
    s = f.read()
    soup = bs4.BeautifulSoup(s, 'html.parser')    

    # tags = soup.find_all('div', class_="clearfix")
    tags = soup.find_all('div', {"class": "clearfix"})
    print(len(tags))
    
    
    # tag = soup.find('div', {"id": "col1_content"})
    # print(tag.text.strip())
    # for tag in tags:
    #     print(tag.text.strip())
        
"""
<div id="col1_content" class="clearfix">
css
"""