import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [logs, setLogs] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/logs')
      .then(res => setLogs(res.data))
      .catch(() => setError('Failed to fetch logs.'));
  }, []);

  const submitLog = async () => {
    if (!inputValue) {
      alert('Please enter a valid number.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/logs', { value: parseFloat(inputValue) });
      setLogs([...logs, { value: inputValue }]);
      alert(response.data.anomaly ? 'Anomaly detected!' : 'Log added.');
      setInputValue('');
    } catch {
      setError('Failed to submit log.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Cybersecurity Dashboard</h1>
      <input 
        type="number" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter log value"
        className="border p-2 mr-2"
      />
      <button onClick={submitLog} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <ul className="mt-6">
        {logs.map((log, index) => (
          <li key={index} className="border p-2 mb-2">Log Value: {log.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;