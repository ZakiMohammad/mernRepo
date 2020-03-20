const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require("./routes/api");

// const MONGODB_URI = "mongodb+srv://zakimuhammad_2307:zeu$reu$@011';';@clusterz-ixxap.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern_youtube",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
// zeu$reu$@011';';

mongoose.connection.on("connected", () => {
  console.log("Mongoose is Connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// newBlogPost.save(err => {
//   if (err) {
//     console.log("Something went wrong");
//   } else {
//     console.log("Data has Been Saved");
//   }
// });
// app.use(cors());

//HTTP request Logger
app.use(morgan("tiny"));
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, console.log(`Server Starting at ${PORT}`));

// "start": "concurrently \"command1 arg\"command2 arg\""
