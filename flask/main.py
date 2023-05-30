from flask import Flask
import urllib.request, json
from dotenv import load_dotenv
import os


load_dotenv()
app = Flask(__name__)
API_URL = os.getenv("API_URL")


@app.route("/api/get_movies")
def get_movies():
    response = urllib.request.urlopen(API_URL)
    data = response.read()
    movie_list = json.loads(data)
    return movie_list["results"][0]


if __name__ == "__main__":
    app.secret_key = os.getenv("SECRET_KEY")
    app.run(debug=True)
