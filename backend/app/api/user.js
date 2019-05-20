const { Router } = require("express");

const router = new Router();

const UserTable = require("../user/table");

router.post("/register", (req, res) => {
  UserTable.userRegister(req.body)
    .then(userID => {
      res.status(200).send(userID);
    })
    .catch(err => {
      if (err === "Email Already Registered") {
        res.status(202).send("Error: Email already exists.");
      } else {
        res.status(500).send("Error registering new user.");
      }
    });
});
module.exports = router;
