import express from 'express';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.json({ limit: '50MB' }));

  server.get('/performance/:id/:idVersion', (req, res) => {
    const { id, idVersion } = req.params;
    return app.render(req, res, '/performance/:id/:idVersion', {
      id,
      idVersion,
    });
  });

  server.get('/workflow/:id/:idVersion', (req, res) => {
    const { id, idVersion } = req.params;
    return app.render(req, res, '/workflow/:id/:idVersion', { id, idVersion });
  });

  server.get('/setup/:id', (req, res) => {
    const { id } = req.params;
    app.render(req, res, '/setup/:id', { id });
  });

  server.all('*', (req, res) => handle(req, res));

  server.listen(port);
});
