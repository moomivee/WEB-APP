from flask import render_template, Blueprint
client = Blueprint('client',__name__)


@client.route('/client')
def index():
 return render_template("index.html")