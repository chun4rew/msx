import re
import requests

cookie = {
    "cookie": "platform=pc; accessAgeDisclaimerPH=1; cookieConsent=3;"
}

headers = {
    "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
}

sess = requests.Session()

url = ''
response = sess.get(url, cookies=cookie, headers=headers)
pattern = re.compile('"format":"mp4",\"videoUrl\":\"([^\"]+)\"')
match = pattern.search(response.text)

quality_url = match.group(1).replace(r'\/', '/')
items = sess.get(quality_url)

mp4_links = items.json()
last_item = mp4_links[-1]
video_mp4 = last_item["videoUrl"]
