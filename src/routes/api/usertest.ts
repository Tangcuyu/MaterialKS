const async = require('async'),
    keystone = require('keystone');
const exec = require('child_process').exec;
const FileData = keystone.list('FileUpload');

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

