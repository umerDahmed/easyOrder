const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/ecommerce?directConnection=true";

mongoose.set("strictQuery", true);

const dbConnect = () => {
	mongoose.connect(mongoURI);
};
module.exports = dbConnect;
