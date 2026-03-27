import requests  # pip install requests

host = 'https://alpinabook.ru' 

direct = 'priceDown'
direct = 'priceUp'

catalog = 'books-linguistics'

params = f'/catalog/{catalog}/filter/type-is-e5e2bb9061d9dd4ab1f15e2025192ef8/apply/?sortVal={direct}'

params = f'/catalog/{catalog}/filter/clear/apply/?sortVal={direct}'

url = host + params


headers = { "User-Agent": "Chrome/146.0.0.0" }
response = requests.get(url, headers=headers)
response.encoding = "utf8"
# print(response.text)

with open("./data/alpina.html", "w", encoding="utf8") as f:
    f.write(response.text)
