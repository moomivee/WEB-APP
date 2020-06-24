from templates import app
from flask import render_template, Blueprint

hello_blueprint = Blueprint('perview',__name__)

@app.route('/')
@app.route('/perview')
def index():
 return render_template("index.html")