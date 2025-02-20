from flask import Flask, request, jsonify
from flask_cors import CORS
from models import detect_anomaly

app = Flask(__name__)
CORS(app)
logs = []

@app.route('/logs', methods=['GET'])
def get_logs():
    return jsonify(logs)

@app.route('/logs', methods=['POST'])
def add_log():
    data = request.json
    logs.append(data)
    anomaly = detect_anomaly(data['value'])
    return jsonify({"message": "Log added.", "anomaly": anomaly})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)