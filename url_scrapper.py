from bs4 import BeautifulSoup as bs
import requests
import re
import concurrent.futures

cookie = {
    "cookie": "platform=pc; accessAgeDisclaimerPH=1; cookieConsent=3;"
}

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}


def get_mp4_link(args):
    url_prefix = 'https://pornhub.com'

    def process_link(link):
        sess = requests.Session()
        response = sess.get(url_prefix + link[-1], cookies=cookie, headers=headers)

        pattern = re.compile('"format":"mp4",\"videoUrl\":\"([^\"]+)\"')
        match = pattern.search(response.text)

        quality_url = match.group(1).replace(r'\/', '/')
        urls = sess.get(quality_url)

        mp4_links = urls.json()
        last_item = mp4_links[-1]
        video_mp4 = last_item["videoUrl"]
        link[-1] = video_mp4
        return link

    with concurrent.futures.ThreadPoolExecutor() as executor:
        futures = [executor.submit(process_link, link) for link in args]
        results = [future.result() for future in futures]

    return results


def parse_videos():
    url = 'https://rt.pornhub.com/video?o=ht&page=1'

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
