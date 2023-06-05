from flask import Flask
from flask_cors import CORS
import urllib.request, json
from dotenv import load_dotenv
import os


load_dotenv()
app = Flask(__name__)
cors = CORS(app)
API_KEY = os.getenv("API_KEY")

MOVIE_URL = f"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={API_KEY}"
TV_URL = f"https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key={API_KEY}"
MOVIE_GENRE_URL = (
    f"https://api.themoviedb.org/3/genre/movie/list?language=en&api_key={API_KEY}"
)
TV_GENRE_URL = (
    f"https://api.themoviedb.org/3/genre/tv/list?language=en&api_key={API_KEY}"
)
MOVIE_SEARCH_URL = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query="
TV_SEARCH_URL = f"https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query="
MOVIE_GENRE_SEARCH_URL = f"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key={API_KEY}&with_genres="
TV_GENRE_SEARCH_URL = f"https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key={API_KEY}&with_genres="
IMG_URL = "https://image.tmdb.org/t/p/w500"


@app.route("/api/get_movies/<int:pgno>")
def get_movies(pgno):
    response = urllib.request.urlopen(MOVIE_URL + "&page=" + str(pgno))
    data = response.read()
    movie_list = json.loads(data)
    return movie_list


@app.route("/api/get_tv_shows/<pgno>")
def get_tv_shows(pgno):
    response = urllib.request.urlopen(TV_URL + "&page=" + str(pgno))
    data = response.read()
    tv_show_list = json.loads(data)
    return tv_show_list


@app.route("/api/movie_search/<query>/<pgno>")
def get_movie_search(query, pgno):
    queries = query.split()
    query = "+".join(queries)
    response = urllib.request.urlopen(MOVIE_SEARCH_URL + query + "&page=" + str(pgno))
    data = response.read()
    movie_list = json.loads(data)
    return movie_list


@app.route("/api/tv_search/<query>/<pgno>")
def get_tv_search(query, pgno):
    queries = query.split()
    query = "+".join(queries)
    response = urllib.request.urlopen(TV_SEARCH_URL + query + "&page=" + str(pgno))
    data = response.read()
    tv_show_list = json.loads(data)
    return tv_show_list


@app.route("/api/movie_genre_search/<query>/<pgno>")
def get_movie_genre_search(query, pgno):
    response = urllib.request.urlopen(
        MOVIE_GENRE_SEARCH_URL + query + "&page=" + str(pgno)
    )
    data = response.read()
    movie_list = json.loads(data)
    return movie_list


@app.route("/api/tv_genre_search/<query>/<pgno>")
def get_tv_genre_search(query, pgno):
    response = urllib.request.urlopen(
        TV_GENRE_SEARCH_URL + query + "&page=" + str(pgno)
    )
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
    app.run(debug=False, host="0.0.0.0")
