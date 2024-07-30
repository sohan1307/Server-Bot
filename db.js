const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect(process.env.DB);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Could not connect to database:", error);
        process.exit(1); // Exit process with failure
    }
};
