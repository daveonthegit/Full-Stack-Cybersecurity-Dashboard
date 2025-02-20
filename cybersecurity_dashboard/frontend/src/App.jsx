import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [logs, setLogs] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/logs')
         .then(res => setLogs(res.data));
  }, []);

  const submitLog = async () => {
    const response = await axios.post('http://localhost:5000/logs', { value: parseFloat(value) });
    setLogs([...logs, { value }]);
    alert(response.data.anomaly ? "Anomaly detected!" : "Log added.");
    setValue('');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Cybersecurity Dashboard</h1>
      <input type="number" className="border p-2 mr-2" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter log value" />
      <button onClick={submitLog} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      <ul className="mt-6 space-y-2">
        {logs.map((log, idx) => (
          <li key={idx} className="border p-2 rounded">Log Value: {log.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;