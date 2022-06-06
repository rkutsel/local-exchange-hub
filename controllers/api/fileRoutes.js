const router = require("express").Router();
const firebase = require("../../config/firebase");
const url = require("../../utils/datastore");
const upload = require("../../utils/files");

router.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    res.status(400).send("Error: File Not Selected.");
  } else {
    const blob = firebase.bucket.file(req.file.originalname);

    const blobWriter = blob.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    blobWriter.on("finish", async () => {
      const publicUrl = await url.getOneUrl(blob.name);
      console.log(publicUrl);
      res.status(200).send("Uploaded Successfully.");
    });

    blobWriter.on("error", (err) => {
      console.log(err);
    });

    blobWriter.end(req.file.buffer);
  }
});

module.exports = router;
