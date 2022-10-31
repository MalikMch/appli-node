const express = require("express");
const app = express();
const port = 3000;

require("dotenv").config();
console.log(`Le serveur tourne sur ${process.env.SERVER_PORT}`);
console.log(`I am"${process.env.sample.MY_NAME}",wilder in"${process.env.sample.MY_CITY}", and I love"${process.env.sample.MY_LANGUAGE}"`);

serveur.listen(process.env.PORT | 3000);