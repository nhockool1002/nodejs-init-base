const express = require('express');
import todoRouter from "./another.routes";

const apiRoute = express();

apiRoute.use("", todoRouter);

export default apiRoute;