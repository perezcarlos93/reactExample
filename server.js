const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./Routes");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/example", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.listen(PORT, () =>
	console.log(`App is listening on http://localhost:${PORT}`)
);
