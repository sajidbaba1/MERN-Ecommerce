// Import express
import express from 'express';

const app = express();
const PORT = 4000;

// A basic route
app.get('/', (req, res) => {
  res.send('🚀 Hello from port 5456!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
const url = 'https://www.google.com/search?q=javascript';
const urlObj = new URL(url);
console.log(urlObj.searchParams);
console.log(urlObj.searchParams.get('q'));
console.log(urlObj.searchParams.get('p'));
console.log(urlObj.searchParams.get('q'));
console.log(urlObj.searchParams.get('q'));