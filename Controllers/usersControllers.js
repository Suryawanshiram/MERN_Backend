const users = require("../models/usersSchema");
const moment = require("moment");
// const csv = require("fast-csv");
// const fs = require("fs");
// const BASE_URL = process.env.BASE_URL

// register user
exports.userpost = async (req, res) => {
      const file = req.file.filename;
      const { fname, lname, email, mobile, gender, location, status } = req.body;

      if (!fname || !lname || !email || !mobile || !gender || !location || !status || !file) {
            res.status(401).json("All Inputs is required")
      }

      try {
            const preuser = await users.findOne({ email: email });

            if (preuser) {
                  res.status(401).json("This user already exist in our database")
            } else {

                  const datecreated = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");

                  const userData = new users({
                        fname, lname, email, mobile, gender, location, status, profile: file, datecreated
                  });
                  await userData.save();
                  res.status(200).json(userData);
            }
      } catch (error) {
            res.status(401).json(error);
            console.log("catch block error")
      }
};
