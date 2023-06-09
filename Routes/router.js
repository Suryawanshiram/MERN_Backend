const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/usersControllers");
const upload = require("../multerconfig/storageConfig")

// routes
router.post("/user/register", upload.single("user_profile"), controllers.userpost)
//router.post("/user/register",(req,res))

module.exports = router;