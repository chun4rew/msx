from bs4 import BeautifulSoup as bs
import requests
import re

cookie = {
    "cookie": "platform=pc; accessAgeDisclaimerPH=1; cookieConsent=3;"
}

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}


def get_mp4_link(args):
    sess = requests.Session()

    url_prefix = 'https://pornhub.com'

    for link in args:
        response = sess.get(url_prefix, cookies=cookie, headers=headers)
        pattern = re.compile('"format":"mp4",\"videoUrl\":\"([^\"]+)\"')
        match = pattern.search(response.text)

        quality_url = match.group(1).replace(r'\/', '/')
        items = sess.get(quality_url)

        mp4_links = items.json()
        last_item = mp4_links[-1]
        video_mp4 = last_item["videoUrl"]




def parse_videos():
    url = 'https://pornhub.com/video?o=ht&page=1'

    response = requests.get(url, cookies=cookie, headers=headers)

    soup = bs(response.text, 'html.parser')
    parent_li = soup.find_all('li', {'data-action': 'browse'})

    info = []

    for item in parent_li:
        child = item.find('div', {'class': 'phimage'}).find('a', href=True)
        title = child.find('img')['alt']
        preview_image = child.find('img')['src']
        href_video = child['href']
        duration = child.find('var').text
        info.append([title, preview_image, duration, href_video])

    return info


if __name__ == '__main__':
    items = parse_videos()
    array_to_json = get_mp4_link(items)
