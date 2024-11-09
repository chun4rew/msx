from flask import request

from scrappers.scrapper_hdrezka import *
from scrappers.scrapper_ph import *


@lru_cache(maxsize=256)
def ph_json(page_number):
    videos = parse_videos(page_number)
    array = []

    for param in videos:
        array.append({
            "title": f"{param[0]}",
            "image": f"{param[1]}",
            "titleFooter": f"{param[2]}",
            "action": f"video:http://{request.host}/msx/watch?{param[3]}",
            "imageFiller": "cover"
        })

    button = {
      "icon": "#3a005c:navigate-next",
      "iconSize": "middle",
      "label": "{col:#ced6e0}Next page",
      "action": f"content:http://{request.host}/msx/update?page={int(page_number)+1}"
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
    return data


@lru_cache(maxsize=256)
def hdrezka_watching_json():
    items = watching_parse('?filter=watching')
    array = []

    film_tags = "{col:msx-white}{ico:movie}"
    series_tags = "{col:msx-white}{ico:local-movies}"

    film_badge_color = "#bf9b37"
    series_badge_color = "#37adbf"

    for item in items:
        array.append({
            "title": item[0],
            "titleFooter": item[1],
            "imageFiller": "cover",
            "image": item[2],
            "action": f"content:http://{request.host}/msx/rezka-info?href={item[3]}",
            "badge": (film_tags if item[4] == 'Фильм' else series_tags) + f" {item[4]}",
            "badgeColor": (film_badge_color if item[4] == 'Фильм' else series_badge_color),
            "iconSize": "small"
        })

    data = {
        "type": "list",
        "headline": "Videos",
        "template": {
            "type": "separate",
            "layout": "0,0,2,4",
            "color": "msx-glass",
            "iconSize": "medium"
        },
        "items": array
    }
    return data


@lru_cache(maxsize=512)
def hdrezka_films_json():
    items = watching_parse('?filter=watching&genre=1')
    array = []

    for item in items:
        array.append({
            "title": item[0],
            "titleFooter": item[1],
            "imageFiller": "cover",
            "image": item[2],
            "action": f"content:http://{request.host}/msx/rezka-info?href={item[3]}",
            "iconSize": "small"
        })

    data = {
        "type": "list",
        "headline": "Videos",
        "template": {
            "type": "separate",
            "layout": "0,0,2,4",
            "color": "msx-glass",
            "iconSize": "medium"
        },
        "items": array
    }
    return data


@lru_cache(maxsize=512)
def hdrezka_series_json():
    items = watching_parse('?filter=watching&genre=2')
    array = []

    for item in items:
        array.append({
            "title": item[0],
            "titleFooter": item[1],
            "imageFiller": "cover",
            "image": item[2],
            "action": f"content:http://{request.host}/msx/rezka-info?href={item[3]}",
            "iconSize": "small"
        })

    data = {
        "type": "list",
        "headline": "Videos",
        "template": {
            "type": "separate",
            "layout": "0,0,2,4",
            "color": "msx-glass",
            "iconSize": "medium"
        },
        "items": array
    }
    return data


@lru_cache(maxsize=512)
def hdrezka_cartoon_json():
    items = watching_parse('?filter=watching&genre=3')
    array = []

    for item in items:
        array.append({
            "title": item[0],
            "titleFooter": item[1],
            "imageFiller": "cover",
            "image": item[2],
            "action": f"content:http://{request.host}/msx/rezka-info?href={item[3]}",
            "iconSize": "small"
        })

    data = {
        "type": "list",
        "headline": "Videos",
        "template": {
            "type": "separate",
            "layout": "0,0,2,4",
            "color": "msx-glass",
            "iconSize": "medium"
        },
        "items": array
    }
    return data


@lru_cache(maxsize=512)
def hdrezka_anime_json():
    items = watching_parse('?filter=watching&genre=82')
    array = []

    for item in items:
        array.append({
            "title": item[0],
            "titleFooter": item[1],
            "imageFiller": "cover",
            "image": item[2],
            "action": f"content:http://{request.host}/msx/rezka-info?href={item[3]}",
            "iconSize": "small"
        })

    data = {
        "type": "list",
        "headline": "Videos",
        "template": {
            "type": "separate",
            "layout": "0,0,2,4",
            "color": "msx-glass",
            "iconSize": "medium"
        },
        "items": array
    }
    return data


def start_json():
    data = {
        "name": "My Example Content",
        "version": "1.0.0",
        "parameter": f"menu:http://{request.host}/msx/menu.json"
    }
    return data


def menu_json():
    data = {
    "headline": "{col:msx-red}{ico:article} Меню",
    "menu": [
        {
            "type": "separator",
            "label": "{col:msx-red}HDREZKA"
        },
        {
            "icon": "people",
            "label": "Сейчас смотрят",
            "data": f"http://{request.host}/msx/rezka"
        },
        {
            "icon": "local-movies",
            "label": "Фильмы",
            "data": f"http://{request.host}/msx/rezka_films"
        },
        {
            "icon": "collections",
            "label": "Сериалы",
            "data": f"http://{request.host}/msx/rezka_series"
        },
        {
            "icon": "flutter-dash",
            "label": "Мультфильмы",
            "data": f"http://{request.host}/msx/rezka_cartoons"
        },
        {
            "icon": "face",
            "label": "Аниме",
            "data": f"http://{request.host}/msx/rezka_anime"
        },
        {
            "type": "separator",
            "label": "{col:msx-red}Pornhub"
        },
        {
            "icon": "trending-up",
            "label": "Популярное",
            "data": f"http://{request.host}/msx/videos.json"
        },
        {
            "icon": "local-movies",
            "label": "example",
            "data": f"http://{request.host}/msx/example.json"
        }
    ]
    }
    return data


@lru_cache(maxsize=512)
def hdrezka_video_parameters_json(href):
    translators_array = get_translate(href)
    video_type = get_type(href)
    data_array = []

    for i, (label, value) in enumerate(translators_array.items()):
        row = i // 3
        j = (i % 3) * 4
        if video_type == 'movie':
            data_array.append({
                "type": "button",
                "label": label if label is not None else "Стандартная",
                "layout": f"{j}, {row}, 4, 1",
                "action": f"video:http://{request.host}/msx/view?href={href}&translateId={str(value)}"
            })
        elif video_type == 'tv_series':
            data_array.append({
                "type": "button",
                "label": label if label is not None else "Стандартная",
                "layout": f"{j}, {row}, 4, 1",
                "action": f"panel:http://{request.host}/msx/rezka-series?href={href}&translator={str(value)}"
            })
    data = {
        "type": "list",
        "headline": "Параметры",
        "pages": [{
            "headline": "Озвучка",
            "items": data_array
        }]
    }
    return data


@lru_cache(maxsize=512)
def hdrezka_get_series_json(href, translator):
    series = get_series(href, translator)
    pages_array = []

    for item in series:
        data_array = []
        for i, j in enumerate(series.get(item)):
            row = i // 8
            col = i % 8
            data_array.append({
                "type": "button",
                "layout": f"{col},{row},1,1",
                "label": f"{j}",
                "action": f"video:http://{request.host}/msx/rezka-series-watch?href={href}&translator={translator}"
                          f"&s={item}&e={j}"
            })
        pages_array.append({
            "headline": f"{item} сезон",
            "items": data_array
        })
    data = {
        "headline": "Серии",
        "pages": pages_array
    }
    return data