# ver 3 => с использованием bs4
# <small>24.03.2026</small> 
import bs4  # pip install bs4


start, end = '<small>', '</small>'

with open('./data/pgatu.html', 'r', encoding="utf8") as f:
    s = f.read()
    soup = bs4.BeautifulSoup(s, 'html.parser')    

    small_tags = soup.find_all('small')
    for tag in small_tags:
        print(tag.text.strip())