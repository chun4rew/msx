import requests
from bs4 import BeautifulSoup as bs

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}

# Parse link with filter "Watching"
def watching_parse():
    url = 'https://hdrezka.me/?filter=watching'

    response = requests.get(url, headers=headers)

    soup = bs(response.text, 'lxml')
    all_items = soup.find('div', {'class': 'b-content__inline_items'})
    each_item = all_items.find_all('div', {'class': 'b-content__inline_item'})

    info = []

    for item in each_item:
        image = item.find('div', {'class': 'b-content__inline_item-cover'}).find('img').get('src')
        item_name = item.find('div', {'class': 'b-content__inline_item-link'}).find('a').text
        item_footer = item.find('div', {'class': 'b-content__inline_item-link'}).find('div').text
        info.append([item_name, item_footer, image])

    return info
