import mongoose from "mongoose";
import config from "./config";
import app from "./app";

const startServer = async () => {
    try {
        // database connection
        await mongoose.connect(config.mongo_url as string);
        console.log("Database is running!");

        // server listening
        app.listen(config.port, () => {
            console.log(`Server is running on ${config.port}`);
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
};

startServer();