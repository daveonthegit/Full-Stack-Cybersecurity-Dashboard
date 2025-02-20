# Cybersecurity Dashboard – README & Documentation

**Author:** David Xiao  
**Repository:** [github.com/daveonthegit](https://github.com/daveonthegit)  
**Email:** [dxiao3043@gmail.com](mailto:dxiao3043@gmail.com)  
**LinkedIn:** [linkedin.com/in/david-on-linked](https://linkedin.com/in/david-on-linked)  
**Date:** 2/19/2025  

---

## Project Overview

The **Cybersecurity Dashboard** is a full-stack application designed to monitor and analyze system logs for potential anomalies in real-time. It integrates a machine learning model to detect outliers in data, offering a practical demonstration of cybersecurity analytics. The project showcases full-stack web development with **Flask** (backend), **React** (frontend), and **Docker** for containerized deployment.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios  
- **Backend:** Flask, Flask-CORS, scikit-learn  
- **Machine Learning:** Isolation Forest (Anomaly Detection)  
- **Deployment:** Docker, Docker Compose  
- **Version Control:** Git, GitHub  

---

## File Structure

```plaintext
cybersecurity_dashboard/
├── backend/
│   ├── app.py               # Flask API server
│   ├── models.py            # Machine learning anomaly detection model
│   ├── requirements.txt     # Backend dependencies
│   └── Dockerfile           # Backend Docker configuration
├── frontend/
│   ├── public/
│   │   └── index.html       # Frontend entry point
│   ├── src/
│   │   └── App.jsx          # Main React component
│   ├── package.json         # Frontend dependencies
│   └── Dockerfile           # Frontend Docker configuration
├── docker-compose.yml      # Docker orchestration
└── README.md               # Project documentation (this file)
```

---

## Installation & Setup

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running  
- [Git](https://git-scm.com/) installed for cloning the repository  
- Optional: [Node.js](https://nodejs.org/) and [Python 3.9+](https://www.python.org/) for local development  

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/daveonthegit/cybersecurity_dashboard.git
cd cybersecurity_dashboard
```

---

### Step 2: Run with Docker Compose

Build and start both the backend and frontend services:

```bash
docker-compose up --build
```

Access the application in your browser:

- Frontend: [http://localhost:3000](http://localhost:3000)  
- Backend API: [http://localhost:5000/logs](http://localhost:5000/logs)  

Logs submitted via the frontend are processed by the backend for anomaly detection and displayed in real-time.

---

### Step 3: Run Locally Without Docker (Optional)

#### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

#### Frontend

```bash
cd frontend
npm install
npm start
```

Access the application at [http://localhost:3000](http://localhost:3000).

---

## Features & Functionality

- **Log Ingestion:** Users can submit numerical log values via the dashboard.  
- **Anomaly Detection:** The backend uses an Isolation Forest model to detect outlier values.  
- **Real-Time Updates:** Logs and anomaly statuses display instantly on the frontend.  
- **Containerized Deployment:** Docker ensures consistent environments across systems.  

---

## Code Overview

### Backend Highlights (`backend/app.py`)

```python
@app.route('/logs', methods=['POST'])
def add_log():
    data = request.json
    logs.append(data)
    anomaly = detect_anomaly(data['value'])
    return jsonify({"message": "Log added.", "anomaly": anomaly})
```

Processes new logs and returns anomaly detection results.

---

### Machine Learning Model (`backend/models.py`)

```python
model = IsolationForest(contamination=0.1).fit(data)

def detect_anomaly(value):
    return model.predict([[value]])[0] == -1
```

Detects anomalies in incoming data using an Isolation Forest algorithm.

---

### Frontend Overview (`frontend/src/App.jsx`)

```jsx
axios.get('http://localhost:5000/logs')
     .then(res => setLogs(res.data));
```

Fetches and displays logs in real-time.

---

## Deployment Guide

### Deploy Backend to Render

1. Create an account at [Render](https://render.com/).  
2. Link your GitHub repository and select the `backend` directory.  
3. Set the build command to:

   ```bash
   pip install -r requirements.txt
   ```

4. Set the start command to:

   ```bash
   python app.py
   ```

---

### Deploy Frontend to Vercel

1. Sign up at [Vercel](https://vercel.com/).  
2. Import your GitHub repository and select the `frontend` folder.  
3. Set the build command:

   ```bash
   npm install && npm run build
   ```

4. Deploy to receive a live URL.

---

## Potential Improvements

- Add JWT-based user authentication  
- Enhance data visualization with Chart.js  
- Integrate MongoDB for persistent log storage  
- Use WebSockets for real-time data streaming  

---

## What I Learned

- Building a full-stack application from scratch  
- Integrating machine learning models into production environments  
- Deploying containerized applications using Docker and cloud platforms  
- Improving UI/UX with responsive design and real-time interactivity  

---

## Contact

- **GitHub:** [github.com/daveonthegit](https://github.com/daveonthegit)  
- **Email:** [dxiao3043@gmail.com](mailto:dxiao3043@gmail.com)  
- **LinkedIn:** [linkedin.com/in/david-on-linked](https://linkedin.com/in/david-on-linked)  

---

This project was created to demonstrate practical cybersecurity and software engineering skills. Feel free to reach out for questions or collaborations.

