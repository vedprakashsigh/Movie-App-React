from flask import Flask
from flask_cors import CORS
import urllib.request, json
from dotenv import load_dotenv
import os


load_dotenv()
app = Flask(__name__)
cors = CORS(app)
MOVIE_URL = os.getenv("MOVIE_URL")
TV_URL = os.getenv("TV_URL")
MOVIE_SEARCH_URL = os.getenv("MOVIE_SEARCH_URL")
TV_SEARCH_URL = os.getenv("TV_SEARCH_URL")
MOVIE_GENRE_URL = os.getenv("MOVIE_GENRE_URL")
TV_GENRE_URL = os.getenv("TV_GENRE_URL")


@app.route("/api/get_movies")
def get_movies():
    response = urllib.request.urlopen(MOVIE_URL)
    data = response.read()
    movie_list = json.loads(data)
    return movie_list


@app.route("/api/get_tv_shows")
def get_tv_shows():
    response = urllib.request.urlopen(TV_URL)
    data = response.read()
    tv_show_list = json.loads(data)
    return tv_show_list


@app.route("/api/movie_search/<query>")
def get_movie_search(query):
    queries = query.split()
    query = "+".join(queries)
    response = urllib.request.urlopen(MOVIE_SEARCH_URL + query)
    data = response.read()
    movie_list = json.loads(data)
    return movie_list


@app.route("/api/tv_search/<query>")
def get_tv_search(query):
    queries = query.split()
    query = "+".join(queries)
    response = urllib.request.urlopen(TV_SEARCH_URL + query)
    data = response.read()
    tv_show_list = json.loads(data)
    return tv_show_list


@app.route("/api/movie_genre_search/<query>")
def get_movie_genre_search(query):
    queries = query.split()
    query = ",".join(queries)
    response = urllib.request.urlopen(MOVIE_SEARCH_URL + query)
    data = response.read()
    movie_list = json.loads(data)
    return movie_list


@app.route("/api/tv_genre_search/<query>")
def get_tv_genre_search(query):
    queries = query.split()
    query = ",".join(queries)
    response = urllib.request.urlopen(TV_SEARCH_URL + query)
    data = response.read()
    tv_show_list = json.loads(data)
    return tv_show_list


@app.route("/api/get_movies_genres")
def get_movies_genres():
    response = urllib.request.urlopen(MOVIE_GENRE_URL)
    data = response.read()
    movie_genres = json.loads(data)
    return movie_genres


@app.route("/api/get_tv_genres")
def get_tv_genres():
    response = urllib.request.urlopen(TV_GENRE_URL)
    data = response.read()
    tv_show_genres = json.loads(data)
    return tv_show_genres


if __name__ == "__main__":
    app.secret_key = os.getenv("SECRET_KEY")
    app.run(debug=True)
