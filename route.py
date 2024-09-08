from flask import Flask, send_file, request, redirect
from flask_cors import CORS, cross_origin
from json_filler import *

app = Flask(__name__)
cors = CORS(app)

@app.route('/msx/start.json')
@cross_origin()
def start_page():
    return send_file('msx/start.json')


@app.route('/msx/menu.json')
@cross_origin()
def menu_page():
    return send_file('msx/menu.json')


@app.route('/msx/example.json')
@cross_origin()
def example_page():
    return send_file('msx/example.json')


@app.route('/msx/rezka.json')
@cross_origin()
def hdrezka_page():
    filling_hdrezka()
    return send_file('msx/rezka.json')


@app.route('/msx/watch')
@cross_origin()
def watch_link():
    key = request.args.get('viewkey')
    return redirect(get_mp4_link(key))


@app.route('/msx/videos.json')
@cross_origin()
def videos_page():
    filling_ph(1)
    return send_file('msx/videos.json')


@app.route('/msx/update')
@cross_origin()
def more_videos():
    page_number = request.args.get('page')
    filling_ph(page_number)
    return send_file('msx/videos.json')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3333, debug=True)
