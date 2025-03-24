from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

@app.route('/')
def home():
    return "Welcome to LegacyIQ!"


@app.route('/api/testimonials', methods=['GET'])
def get_testimonials():
    testimonials = [
        {"name": "Zane Doe", "role": "Estate Planner Corp", "review": "We streamlined our working relationships!"},
        {"name": "Jane Smith", "role": "Financial Manager, XYZ Corp", "review": "We sped up our client intake process."}
    ]
    return jsonify(testimonials)

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    email = request.json.get('email')
    print(f"New subscription from: {email}")
    return jsonify({"message": "Successfully subscribed!"}), 200

if __name__ == "__main__":
    app.run(debug=True)
