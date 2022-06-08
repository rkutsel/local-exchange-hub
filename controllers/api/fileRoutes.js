const router = require("express").Router();
const file = require("../../utils/datastore");
const upload = require("../../utils/files");

router.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);
  if (!req.file) {
    res.status(400).send("Error: File Not Selected.");
  } else {
    const fileName = req.file.originalname;
    const fileBuffer = req.file.buffer;

    await file.uploadFile(fileName, fileBuffer).then((url) => {
      console.log(url);
      res.status(200).send(url);
    });
  }
});

module.exports = router;
