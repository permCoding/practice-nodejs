# ver 1 => просто циклом

start, end = '<small>', '</small>'
ln = len('<small>24.03.2026</small>')

with open('./data/pgatu.html', 'r', encoding="utf8") as f:
    s = f.read()
    
    pos = 0
    while s.find(start, pos) > -1:
        pos = s.find(start, pos)
        print(pos, s[pos:pos+ln])
        # дописать код для извлечения даты
        pos += ln
