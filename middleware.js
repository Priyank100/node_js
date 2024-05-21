module.exports = reqFilter = (req, res, next) => {
    if(!req.query.age) {
        res.send("Please enter age");
    } else if(req.query.age < 18) {
        res.send("Not access this page");
    } else {
        next();
    }
}