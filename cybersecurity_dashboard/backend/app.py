from flask import Flask, request, jsonify
from flask_cors import CORS
from models import detect_anomaly

app = Flask(__name__)
CORS(app)
logs = []

@app.route('/logs', methods=['POST'])
def add_log():
    """Endpoint to add a log entry and check for anomalies."""
    try:
        data = request.get_json()
        if not data or 'value' not in data:
            return jsonify({"error": "Missing 'value' in request."}), 400

        log_entry = {"value": data['value']}
        logs.append(log_entry)
        anomaly_detected = detect_anomaly(data['value'])

        return jsonify({"message": "Log added.", "anomaly": anomaly_detected}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/logs', methods=['GET'])
def get_logs():
    """Retrieve all stored logs."""
    return jsonify(logs), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)