const async = require('async'),
    keystone = require('keystone');
const exec = require('child_process').exec;
const FileData = keystone.list('FileUpload');
const jwt = require('jsonwebtoken');
const secret = 'ILOVENINGHAO';

/**
 * List Files
 */
exports.getUserList = function (req, res) {
        keystone.list('User').model.find().sort('name').exec( function (err, results) {
            if (err || !results.length) {
                if (err) return res.apiError('database error', err);
            }
            res.json(results);
        });
};


/**
 * User Login
 */
exports.userLogin = function (req, res) {
    const userData = req.body;

    keystone.list('User').model.findOne({email: userData.email}).exec(
        (error, user) => {
            if (error) {
                console.log(error);
            } else {
                if (!user) {
                    res.status(401).send('Invalid email');
                } else
                    if (user.password !== userData.password) {
                        res.status(401).send('Invalid password');
                    } else {
                        const payload = { subject: user._id };
                        const token = jwt.sign(payload, secret);
                        res.status(200).send({ token });
                    }
            }
        });
};


