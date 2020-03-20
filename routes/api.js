const express = require("express");

const router = express.Router();

const BlogPost = require("../models/blogPost");

router.get("/", (req, res) => {
  BlogPost.find({})
    .then(data => {
      console.log("data:", data);
      res.json(data);
    })
    .catch(err => {
      console.log("error:", error);
    });
});

router.post("/save", (req, res) => {
  console.log("Body: ", req.body);
  const data = req.body;

  const newBlogPost = new BlogPost(data);

  // .save
  newBlogPost.save(error => {
    if (error) {
      res.status(500).json({ msg: "Sorry Internal Server Error" });
      return;
    }
    res.json({
      msg: "Your data has Been Saved"
    });
  });
});

router.get("/name", (req, res) => {
  const data = {
    username: "ZakiMulla",
    age: 22
  };
  res.json(data);
});

module.exports = router;
