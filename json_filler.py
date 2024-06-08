from url_scrapper import *


def filling(page_number):
    videos = parse_videos(page_number)
    array = []

    for param in videos:
        array.append({
            "title": f"{param[0]}",
            "image": f"{param[1]}",
            "titleFooter": f"{param[2]}",
            "action": f"video:http://192.168.0.114:3333/msx/watch?{param[3]}",
            "imageFiller": "cover"
        })

    button = {
      "icon": "#3a005c:navigate-next",
      "iconSize": "middle",
      "label": "{col:#ced6e0}Next page",
      "action": f"content:http://192.168.0.114:3333/msx/update?page={int(page_number)+1}"
    }
    array.append(button)

    data = {
        "type": "list",
        "headline": "Enjoy!",
        "template": {
            "type": "separate",
            "layout": "0,0,3,3"
        },
        "items": array
    }

    with open('msx/videos.json', 'w') as f:
        json.dump(data, f, indent=4)