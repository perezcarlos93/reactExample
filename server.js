const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./Routes");

const PORT = process.env.PORT || 3001;

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
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.use(routes);

app.listen(PORT, () =>
	console.log(`App is listening on http://localhost:${PORT}`)
);
