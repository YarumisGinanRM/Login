from flask_sqlalchemy import SQLAlchemy
from datetime import date


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'User'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    creation_date = db.Column(db.DateTime, nullable=False)
    # is_active = db.Column(db.Boolean, unique=False, nullable=True)

    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password
        self.creation_date = date.today()
        # self.is_active = True

    def __repr__(self):
        return f'<User {self.username}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "username": self.username,
            "creation_date": self.creation_date
            # do not serialize the password, its a security breach
        }
