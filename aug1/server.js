// Import express
import express from 'express';

const app = express();
const PORT = 3000;

// A basic route
app.get('/', (req, res) => {
  res.send('🚀 Hello from port 5456!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
