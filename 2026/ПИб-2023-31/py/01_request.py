import requests  # pip install requests


url = "https://pgatu.ru/today/"
headers = { "User-Agent": "Chrome/146.0.0.0" }
response = requests.get(url, headers=headers)
response.encoding = "utf8"
# print(response.text)
with open("./data/pgatu.html", "w", encoding="utf8") as f:
    f.write(response.text)





# ver 1 => просто циклом
# ver 2 => регулярками
# <small>24.03.2026</small> re = r'<small>\s*\d{2}\.\d{2}\.\d{4}\s*</small>'
# ver 3 => с использованием bs4
# если html не отдаётся, тогда надо использовать selenium