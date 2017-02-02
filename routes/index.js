var express = require('express');
var router = express.Router();

var students = [
    "Sean",
    "Drew",
    "Daniel",
    "Kyle",
    "Rishi",
    "Liz",
    "Anna",
    "Ryan",
    "Connie",
    "Sarah",
    "Andy",
    "Michael",
    "Paul",
    "Mason"
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { students: students });
});


router.post('/search-records', (req, res, next) => {
    var nameSubmitted = req.body.studentSearch;
    var msg = `You are not in the class ${nameSubmitted}`;
    for (let student of students) {
        if (nameSubmitted.toLowerCase() === student.toLowerCase()) {
            msg = `You are in the class ${student}`;
            break;
        }
    }
    res.render('students', {message: msg});
});

module.exports = router;
