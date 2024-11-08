import requests
from HdRezkaApi import HdRezkaApi
from bs4 import BeautifulSoup as bs

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}
rezka_url = "https://hdrezka.me/"

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
        type = item.find('div', {'class': 'b-content__inline_item-cover'}).find('span').find('i', {'class': 'entity'})
        item_name = item.find('div', {'class': 'b-content__inline_item-link'}).find('a').text
        item_href = item.find('div', {'class': 'b-content__inline_item-link'}).find('a')['href']
        item_footer = item.find('div', {'class': 'b-content__inline_item-link'}).find('div').text
        item_href_separated = item_href.split('/')[-1]
        info.append([item_name, item_footer, image, item_href_separated, type.text])

    return info

def get_stream_movie(href, translation_id):
    rezka = HdRezkaApi(rezka_url + href)
    stream = rezka.getStream(translation=translation_id)('1080p Ultra')
    return stream[0]

def get_translate(href):
    rezka = HdRezkaApi(rezka_url + href)
    translators = rezka.translators
    return translators

def get_type(href):
    rezka = HdRezkaApi(rezka_url + href)
    type_ = rezka.type
    return type_

def get_series(href, translator):
    rezka = HdRezkaApi(rezka_url + href)
    series = rezka.seriesInfo
    for (key, value) in series.items():
        translator_id = value.get('translator_id')
        if translator_id == int(translator):
            return value.get('episodes')

def get_stream_series(href, translator, s, e):
    rezka = HdRezkaApi(rezka_url + href)
    stream = rezka.getStream(s, e, translator)('1080p Ultra')
    return stream[0]