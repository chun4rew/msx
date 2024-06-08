import json
from url_scrapper import *


def filling():
    videos = parse_videos()
    items = get_mp4_link(videos)
    array = []

    for param in items:
        array.append({
            "title": f"{param[0]}",
            "image": f"{param[1]}",
            "titleFooter": f"{param[2]}",
            "action": f"video:{param[3]}",
            "imageFiller": "cover"
        })

    data = {
        "type": "list",
        "headline": "PornHUB",
        "template": {
            "type": "separate",
            "layout": "0,0,3,3",
            "color": "#ffb347"
        },
        "items": array
    }

    with open('msx/videos.json', 'w') as f:
        json.dump(data, f, indent=4)