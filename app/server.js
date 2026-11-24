const http = require('http');
const items = [{ id: 1, title: 'Hackathon Kickoff', venue: 'Main Auditorium' }, { id: 2, title: 'Intro to Docker Workshop', venue: 'Room 210' }, { id: 3, title: 'Open Source Friday', venue: 'Library Hall' }];
const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url} from ${req.headers['x-forwarded-for'] || req.socket.remoteAddress}`);
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/health') return res.end(JSON.stringify({ status: 'ok' }));
  if (req.url === '/api/events') return res.end(JSON.stringify(items));
  if (req.url === '/') return res.end(JSON.stringify({ app: 'Campus Events', try: '/api/events' }));
  res.statusCode = 404;
  res.end(JSON.stringify({ error: 'Not found' }));
});
const port = Number(process.env.PORT || 3000);
server.listen(port, () => console.log(`Campus Events app listening on port ${port}`));
