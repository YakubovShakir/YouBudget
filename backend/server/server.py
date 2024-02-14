from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt, check_password_hash
from uuid import uuid4

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='postgresql://user:pass@localhost/dbname'

bcrypt = Bcrypt(app)
db=SQLAlchemy(app)

def get_uuid():
        return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    login_or_email = db.Column(db.String(200))
    password = db.Column(db.String(200))

class Transaction(db.Model):
    __tablename__ = "transactions"
    trans_id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    category = db.Column(db.String(200))
    type = db.Column(db.String(200))
    value = db.Column(db.Integer)
    date = db.Column(db.TIMESTAMP, default=db.func.current_timestamp(),server_default=("(now() at time zone 'utc')::timestamp with time zone"))

@app.route('/api/signup', methods=['POST'])
def add_user():
    data = request.get_json()
    user_login_or_email = data['login_or_email']
    user_password = data['password']

    user_exists = User.query.filter_by(login_or_email=user_login_or_email).first()
    if user_exists:
        return jsonify({"error":"User already exists"}), 409
    
    hashed_password = bcrypt.generate_password_hash(user_password).decode('utf-8')
    print("genereated hash", hashed_password)
    new_user= User(
        login_or_email=user_login_or_email,
        password=hashed_password,
    )

    print(user_login_or_email)
    print(user_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "login_or_email": new_user.login_or_email
    }), 200

@app.route('/api/login', methods=['POST'])
def login_user():
    data = request.get_json()
    user_login_or_email = data['login_or_email']
    user_password = data['password']

    print(user_login_or_email)
    print(user_password)

    user_exists = User.query.filter_by(login_or_email=user_login_or_email).first()
    
    if not user_exists:
        return jsonify({"error":"User don't exists"}), 409
    
    if check_password_hash(user_exists.password, user_password):
        print("пароли сошлись")
        return jsonify({
            "id": user_exists.id,
        }), 200
    else:
        print("пароли не сошлись")
        return jsonify({"error": "Invalid password"}), 401
 
@app.route('/api/new_expense', methods=['POST'])
def new_expense():
    data = request.get_json()
    print("data is ", data)
    print("user_id", data['user_id'])
    print("category", data['category'])
    
    new_transaction = Transaction(
        user_id=data['user_id'],
        category=data['category'],
        type=data['type'],
        value=data['value'],
        date=data['date']
    )
    db.session.add(new_transaction)
    db.session.commit()
    print("new ID IS ", new_transaction.trans_id)
    return jsonify({
        "trans_id": new_transaction.trans_id,
    }),200

@app.route('/api/get_expenses/<int:user_id>', methods=['GET'])
def get_expenses(user_id):
    try:
        expenses = Transaction.query.filter_by(user_id=user_id).all()
      
        expenses_list = [
            {
                "trans_id": expense.trans_id,
                "category": expense.category,
                "type": expense.type,
                "value": expense.value,
                "date": expense.date
            }
            for expense in expenses
        ]
        return jsonify({"expenses": expenses_list})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

    
if __name__ == '__main__':
    app.run(port=8000, debug=True)
