const async = require('async'),
    keystone = require('keystone'),
    signin = require('keystone/admin/server/api/session/signin');
const exec = require('child_process').exec;
const FileData = keystone.list('FileUpload');
const jwt = require('jsonwebtoken');
const secret = 'ILOVENINGHAO';
const utils = require('keystone-utils');
const session = require('keystone/lib/session');

/**
 * List Users
 */
exports.getUserList = function (req, res) {
        keystone.list('User').model.find().sort('name').exec( function (err, results) {
            if (err || !results.length) {
                if (err) return res.apiError('database error', err);
            }
            res.json(results);
        });
};

exports.verifyToken = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    const token = req.headers.authorization.split(' ')[1];

    // console.log(token);
    if (token === 'null') {
        return res.status(401).send('Unauthorized request');
    }

    const payload = jwt.verify(token, secret);
    if (!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
};

/**
 * User Login
 */
exports.userLogin = function (req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(401).json({ error: 'email and password required' });
    }
    const User = keystone.list(keystone.get('user model'));
    const emailRegExp = new RegExp('^' + utils.escapeRegExp(req.body.email) + '$', 'i');
    User.model.findOne({ email: emailRegExp }).exec(function (err, user) {
        if (user) {
            keystone.callHook(user, 'pre:signin', function (err) {
                if (err) return res.status(500).json({ error: 'pre:signin error', detail: err });
                user._.password.compare(req.body.password, function (err, isMatch) {
                    if (isMatch) {
                        /* session.signinWithUser(user, req, res, function () {
                            keystone.callHook(user, 'post:signin', function (err) {
                                if (err) return res.status(500).json({ error: 'post:signin error', detail: err });
                                res.json({ success: true, user: user });
                            });
                        }); */
                        const payload = { subject: user._id };
                        const token = jwt.sign(payload, secret);
                        console.log(token);
                        res.status(200).send({token});
                    } else if (err) {
                        return res.status(500).json({ error: 'bcrypt error', detail: err });
                    } else {
                        return res.status(401).json({ error: 'invalid details' });
                    }
                });
            });
        } else if (err) {
            return res.status(500).json({ error: 'database error', detail: err });
        } else {
            return res.status(401).json({ error: 'invalid details' });
        }
    });
    /* const userData = req.body;
    console.log(signin);
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
        }); */
};


