const db = require("../../models");
const router = require("express").Router();

router.post("/data", (req, res) => {
	db.Test.create(req.body)
		.then((data) => {
			res.json(data).status(201);
		})
		.catch((err) => console.log(err));
});

router.get("/data", (req, res) => {
	db.Test.find({})
		.then((response) => {
			res.json(response).status(200);
		})
		.catch((err) => console.log(err));
});

router.delete("/data", async (req, res) => {
	console.log("Delete route hit", req.body);

	const note = await db.Test.findById(req.body._id);

	db.Test.findByIdAndDelete(note)
		.then((data) => res.json(data))
		.catch((err) => console.log(err));
});

module.exports = router;
