from flask import Flask
app = Flask(__name__,
 static_folder = './public',
 template_folder="./static")
from templates.perview.views import hello_blueprint
from templates.client.views import client
# register the blueprints
app.register_blueprint(hello_blueprint)
app.register_blueprint(client)