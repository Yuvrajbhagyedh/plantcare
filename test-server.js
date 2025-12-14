// Simple test script to verify server is running
const http = require('http');

const options = {
  hostname: '127.0.0.1',
  port: 8000,
  path: '/health',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`✅ Server is running! Status: ${res.statusCode}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response:', data);
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.error(`❌ Server is NOT running: ${e.message}`);
  console.log('\nTo start the server:');
  console.log('1. Run: npm install');
  console.log('2. Run: npm start');
  process.exit(1);
});

req.end();

