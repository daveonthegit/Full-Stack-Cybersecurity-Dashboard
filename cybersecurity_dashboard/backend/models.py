from sklearn.ensemble import IsolationForest
import numpy as np

def initialize_model():
    """Initialize and train the Isolation Forest model."""
    sample_data = np.random.normal(0, 1, (100, 1))
    return IsolationForest(n_estimators=100, contamination=0.05, random_state=42).fit(sample_data)

model = initialize_model()

def detect_anomaly(value: float) -> bool:
    """Predict if a value is an anomaly.

    Args:
        value (float): Numeric value from log entry.

    Returns:
        bool: True if anomaly detected, False otherwise.
    """
    return model.predict([[value]])[0] == -1