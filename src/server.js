import Koa from 'koa';
import winston from 'winston';
import config from './config';
import api from './controllers';

const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    winston.error('ERROR (koa, last resort):', err);

    ctx.status = 500;
    ctx.body = 'Internal Server Error';
  }
});

app.use(api());

app.use(ctx => {
  ctx.response.status = 404;
  ctx.response.body = {
    status: false,
    code: 404,
    msg: 'Not found'
  };
});

const server = app.listen(config.port, () => winston.info(`server started on ${config.port} port`));

export default server;
