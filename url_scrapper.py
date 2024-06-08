from bs4 import BeautifulSoup as bs
import requests
import re
import json

cookie = {
    "cookie": "platform=pc; accessAgeDisclaimerPH=1; cookieConsent=3;"
}

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}


def get_mp4_link(key):
    url_prefix = 'https://pornhub.com/view_video.php?viewkey='

    sess = requests.Session()
    response = sess.get(url_prefix + key, cookies=cookie, headers=headers)

    # JavaScript search
    soup = bs(response.text, 'lxml')
    player_div = soup.find('div', {'id': 'player'}).find('script')
    js_var = player_div.text.strip().splitlines()[0]

    # Get link for mp4
    pattern = r'{"defaultQuality":false,"format":"mp4","videoUrl":".*?"'
    match = re.search(pattern, js_var)

    content = match.group(0)
    data = json.loads(content + "}")
    urls = sess.get(data["videoUrl"])

    mp4_links = urls.json()
    last_item = mp4_links[-1]
    video_mp4 = last_item["videoUrl"]
    return video_mp4


def parse_videos():
    url = 'https://rt.pornhub.com/video?o=ht&hd=1&page=15'

    response = requests.get(url, cookies=cookie, headers=headers)

    soup = bs(response.text, 'html.parser')
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
