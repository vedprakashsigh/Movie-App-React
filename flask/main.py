from flask import Flask
from flask_cors import CORS
import urllib.request, json
from dotenv import load_dotenv
import os


load_dotenv()
app = Flask(__name__)
cors = CORS(app)
API_URL = os.getenv("API_URL")


@app.route("/api/get_movies")
def get_movies():
    response = urllib.request.urlopen(API_URL)
    data = response.read()
    # print(data)
    # return data
    movie_list = json.loads(data)
    return movie_list


if __name__ == "__main__":
    app.secret_key = os.getenv("SECRET_KEY")
    app.run(debug=True)
