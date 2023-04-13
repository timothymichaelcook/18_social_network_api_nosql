const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

const app = express;
const PORT = process.env.PORT || 3001;