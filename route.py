from flask import Flask, send_file
from json_filler import *

app = Flask(__name__)


@app.route('/msx/start.json')
def start_page():
    return send_file('msx/start.json')


@app.route('/msx/menu.json')
def menu_page():
    return send_file('msx/menu.json')


@app.route('/msx/example.json')
def example_page():
    return send_file('msx/example.json')


@app.route('/msx/videos.json')
def videos_page():
    filling()
    return send_file('msx/videos.json')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3333, debug=True)
