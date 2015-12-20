import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import config from './webpack.config.dev';

const port = 3000;
const hostname = 'localhost';

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

const indexPath = path.join(__dirname, 'index.html');
app.get('*', ({res}) => res.sendFile(indexPath));

app.listen(port, hostname, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening on http://${hostname}:${port}`);
});
