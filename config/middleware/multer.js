//download multer google storage https://www.npmjs.com/package/multer-google-storage
// bucket db for files or pictures?
//IF USING npm install multer-google-storage, no need for middleware file

var multer = require("multer");
var multerGoogleStorage = require("multer-google-storage");
var uploadHandler = multer({
  storage: multerGoogleStorage.storageEngine(),
});

module.exports = uploadHandler;
