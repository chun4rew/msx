from flask import Flask, send_file, redirect, jsonify
from flask_cors import CORS, cross_origin

from json_filler import *

app = Flask(__name__)
cors = CORS(app)


@cross_origin()
@app.route('/msx/menu.json')
def menu_page():
    return jsonify(menu_json())


@cross_origin()
@app.route('/msx/start.json')
def start_page():
    return jsonify(start_json())


@cross_origin()
@app.route('/msx/example.json')
def example_page():
    return send_file('msx/example.json')


@cross_origin()
@app.route('/msx/rezka')
def hdrezka_page():
    return jsonify(hdrezka_watching_json())


@cross_origin()
@app.route('/msx/rezka_films')
def hdrezka_films_page():
    return jsonify(hdrezka_films_json())


@cross_origin()
@app.route('/msx/rezka_series')
def hdrezka_series_page():
    return jsonify(hdrezka_series_json())


@cross_origin()
@app.route('/msx/rezka_cartoons')
def hdrezka_cartoon_page():
    return jsonify(hdrezka_cartoon_json())


@cross_origin()
@app.route('/msx/rezka_anime')
def hdrezka_anime_page():
    return jsonify(hdrezka_anime_json())


@cross_origin()
@app.route('/msx/watch')
def watch_link():
    key = request.args.get('viewkey')
    hls_url = get_hls(key)
    return redirect(hls_url)


@cross_origin()
@app.route('/msx/videos.json')
def videos_page():
    return jsonify(ph_json(1))


@cross_origin()
@app.route('/msx/update')
def more_videos():
    page_number = request.args.get('page')
    return jsonify(ph_json(page_number))


@cross_origin()
@app.route('/msx/view')
def hdrezka_video():
    href = request.args.get('href')
    translation_id = request.args.get('translateId')
    return redirect(get_stream_movie(href, translation_id))


@cross_origin()
@app.route('/msx/rezka-info')
def hdrezka_item_info():
    href = request.args.get('href')
    return jsonify(hdrezka_video_parameters_json(href))


@cross_origin()
@app.route('/msx/rezka-series')
def hdrezka_series_list():
    href = request.args.get('href')
    translator = request.args.get('translator')
    return jsonify(hdrezka_get_series_json(href, translator))


@cross_origin()
@app.route('/msx/rezka-series-watch')
def hdrezka_watch_sereis():
    href = request.args.get('href')
    translator = request.args.get('translator')
    s = request.args.get('s')
    e = request.args.get('e')
    return redirect(get_stream_series(href, translator, s, e))

if __name__ == '__main__':
    host, port = '0.0.0.0', 3777
    app.run(host=host, port=port, debug=True)
