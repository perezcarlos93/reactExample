const db = require("../../models");
const router = require("express").Router();

router.post("/data", (req, res) => {
	console.log("server side", req.body);

	// req.body.save();
	// res.status(201).json(req.body);
	db.Test.create(req.body)
		.then((data) => {
			console.log("data", data);
			res.json(data);
		})
		.catch((err) => console.log(err));
});

router.get("/data", (req, res) => {
	db.Test.find({}).then((response) => {
		res.status(200).json(response);
	});
});

router.delete("/data", async (req, res) => {
	console.log("Backend delete route hit");
	console.log("Delete Route Req", req);
	const note = await db.Test.findById(req.body._id);

	console.log("Not Found", note);

	db.Test.findByIdAndDelete(note).then((data) => res.json(data));
});

module.exports = router;
