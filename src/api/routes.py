"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import hashlib

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/registro', methods=['POST'])
def new_user():
    body = request.json  # lo que viene del request como un diccionario de Python

    try:
        username = body.get('username')
        email = body.get('email')
        password = body.get('password')

        if not username or not email or not password:
            return jsonify({"message": "Faltan campos obligatorios"}), 400

        password_hash = hashlib.md5(password.encode('utf-8')).hexdigest()

        new_user = User(username, email, password_hash)
        print(new_user)

        db.session.add(new_user)
        db.session.commit()

        return jsonify(new_user.serialize()), 200
    except Exception as err:
        return jsonify({"message": "Ha ocurrido un error inesperado ‼️" + str(err)}), 500


@api.route('/login', methods=['POST'])
def login():
    username = request.json.get("username", None)
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    if username is None or password is None or email is None:
        return jsonify({"msg": "Bad username, email, or password ⛔️"}), 401

    search_user = User.query.filter_by(username=username).one_or_none()
    if search_user is None:
        search_user = User.query.filter_by(email=email).one_or_none()
        if search_user is None:
            return jsonify({"message": "User not found "}), 404

    password_hash = hashlib.md5(password.encode('utf-8')).hexdigest()
    if search_user.password == password_hash:
        return jsonify({
            "token": create_access_token(identity=search_user.email),
            "user": search_user.username,
            "idUser": search_user.id
        }), 200

    return jsonify({"message": "Incorrect password, please try again 🔓️"}), 401
