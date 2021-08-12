/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const getTests = (data) => axios.get("/api/test/data", data);
const postTest = (data) => axios.post("/api/test/data", data);
const deleteTest = (data) =>
	axios.delete("/api/test/data", { data: { _id: data } });

export default {
	getTests,
	postTest,
	deleteTest,
};
