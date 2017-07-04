import Router from 'koa-router';
import getRoot from './getRoot';

export default () => {
  const api = Router({
    prefix: '/api'
  });

  api.get('/sqrt-root', getRoot);

  return api.routes();
};
