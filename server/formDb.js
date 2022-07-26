const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.MONGO_URI, connectionParams);
		console.log("Connected");
	} catch (error) {
		console.log(error);
		console.log("Fatal error!");
	}
};
