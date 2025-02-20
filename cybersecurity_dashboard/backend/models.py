from sklearn.ensemble import IsolationForest
import numpy as np

data = np.random.normal(0, 1, (100, 1))
model = IsolationForest(contamination=0.1).fit(data)

def detect_anomaly(value):
    prediction = model.predict([[value]])
    return prediction[0] == -1