import bs4  # pip install bs4


prefix = 'https://alpinabook.ru' 
direct = 'priceDown'
params = f'/catalog/books-linguistics/filter/type-is-e5e2bb9061d9dd4ab1f15e2025192ef8/apply/?sortVal={direct}'

with open('./data/alpina.html', 'r', encoding="utf8") as f:
    s = f.read()
    soup = bs4.BeautifulSoup(s, 'html.parser')    

    tags = soup.find_all('div', {'class': 'b-catalog-items__item'})
    print(len(tags))
    for tag in tags:
        book = tag.find('div', {'class': 'book-item-info'})
        
        pr = book \
            .find('span', {'class': 'book-item-price book-item-price_regular js-book-item__price'}) \
            .text.strip()
        nm = book \
            .find('div', {'class': 'book-item-title book-item-title_regular'}) \
            .text.strip()
        print(pr, nm)


"""
<div class="b-catalog-items__item">
<div class="book-item-info">
<span class="book-item-price book-item-price_regular js-book-item__price">
    2&nbsp;085&nbsp;руб.
</span>

<div class="book-item-title book-item-title_regular">
    
    <a href="/catalog/book-polka-toma-iii-iv/" class="book-item-title__link gtm-book-card__link js-book-item-detail-link" itemprop="url" data-detail-link="90166">
    
        <span itemprop="name">            
            Полка: О главных книгах русской литературы (тома III, IV)
        </span>
    </a>
</div>
"""