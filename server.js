const express = require("express");
const app = express();
require("dotenv").config();
const routes = require("./Routes");

const mongoose = require("mongoose");

mongoose.connect(
	process.env.MONGO_DB_URL || "mongodb://localhost:27017/example",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
}

app.use(routes);

app.listen(PORT, () =>
	console.log(`App is listening on http://localhost:${PORT}`)
);
