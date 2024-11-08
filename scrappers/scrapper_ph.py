import re
from functools import lru_cache

import requests
from bs4 import BeautifulSoup as bs

cookie = {
    "cookie": "platform=pc; accessAgeDisclaimerPH=1; cookieConsent=3;"
}

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}

@lru_cache(maxsize=256)
def get_hls(key):
    url_prefix = 'https://pornhub.com/view_video.php?viewkey='

    response = requests.get(url_prefix + key, cookies=cookie, headers=headers)

    pattern_1080 = r'"defaultQuality":false,"format":"hls","videoUrl":"(.*?)","quality":"1080"'
    pattern_720 = r'"defaultQuality":true,"format":"hls","videoUrl":"(.*?)","quality":"720"'
    match_1080 = re.search(pattern_1080, response.text)

    if match_1080:
        hls = match_1080.group(1).replace('\\', '')
        return hls
    else:
        match_720 = re.search(pattern_720, response.text)
        if match_720:
            hls = match_720.group(1).replace('\\', '')
            return hls


def parse_videos(page):
    url = f'https://rt.pornhub.com/video?o=ht&hd=1&page={page}'

    response = requests.get(url, cookies=cookie, headers=headers)

    soup = bs(response.text, 'lxml')
    parent_li = soup.find_all('li', {'data-action': 'browse'})

    info = []

    for item in parent_li:
        child = item.find('div', {'class': 'phimage'}).find('a', href=True)

        if not child.find('div', {'class': 'private-vid-title'}):
            title = child.find('img')['alt']
            preview_image = child.find('img')['src']
            href_video = child['href'].removeprefix('/view_video.php?')
            duration = child.find('var').text
            info.append([title, preview_image, duration, href_video])
        else:
            pass

    return info
