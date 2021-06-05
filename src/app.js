import express from 'express';

import server from '@config/apollo';
import httpLogger from '@middlewares/http-logger';
import router from '@routes';
import Response from '@helpers/response';

const app = express();

app.use(httpLogger);

server.applyMiddleware({ app });

app.use(router);

app.use(Response.sendError);

export default app;
