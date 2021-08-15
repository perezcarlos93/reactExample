const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./Routes");

const PORT = process.env.PORT || 3001;
require("dotenv").config();

mongoose.connect(
	process.env.MONGO_DB_URL || "mongodb://localhost:27017/example",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

app.use(routes);

app.listen(PORT, () =>
	console.log(`App is listening on http://localhost:${PORT}`)
);
