const router = require("express").Router();

const Workout = require("../models/Workout")


router.get("/workouts", function(req, res) {
    Workout.find().then(function (res){
        res.json(res)
    })
})


module.exports = router