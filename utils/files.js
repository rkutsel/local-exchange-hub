const path = require("path");
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, callback) {
    const ext = path.extname(file.originalname);
    if (![".jpg", ".jpeg", ".png"].includes(ext)) {
      return callback(new Error("The File Format Not Supported"));
    }
    callback(null, true);
  },
});

module.exports = upload;
