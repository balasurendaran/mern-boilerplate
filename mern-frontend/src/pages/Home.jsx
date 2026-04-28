import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Home = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/health')
      .then((res) => setMessage(res.data.message || 'Connected to backend!'))
      .catch(() => setMessage('Backend not connected. Start your Express server.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page home-page">
      <h1>Welcome to MERN App</h1>
      <p>React · Express · MongoDB · Node.js</p>
      <div className="status-card">
        <h3>Backend Status</h3>
        {loading ? <p>Checking...</p> : <p>{message}</p>}
      </div>
    </div>
  );
};

export default Home;
