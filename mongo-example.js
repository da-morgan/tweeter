"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
    if(err){
        console.log("failed to connect to " + MONGODB_URI)
        throw err;
    }
    console.log("Successfully connected to " + MONGODB_URI);

    db.collection("tweets").find().toArray((err, results) => {
        // Lazy error handling:
        if (err) throw err;
    
        // ==> We can iterate on the cursor to get results, one at a time:
        console.log("results array: ", results);
    
        // ==> This is inside this callback now. Think about it:
        // This is now the "end of the program", right?.
        db.close();
      });
})