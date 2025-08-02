import express from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send(`
    <h1>🚀 Welcome to Your Node.js Server!</h1>
    <p>This server is running on port ${PORT}</p>
    <p>Current time: ${new Date().toLocaleString()}</p>
  `);
});

// API route
app.get('/api/status', (req, res) => {
    res.json({
        status: 'running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running at: http://localhost:${PORT}`);
    console.log(`📡 API endpoint: http://localhost:${PORT}/api/status`);
}); 