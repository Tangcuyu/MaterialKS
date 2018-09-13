const async = require('async'),
    keystone = require('keystone');
const exec = require('child_process').exec;

const FileData = keystone.list('FileUpload');

/**
 * List Files
 */
exports.list = function (req, res) {
    FileData.model.find(function (err, items) {

        if (err) return res.apiError('database error', err);

        res.apiResponse({
            collections: items
        });

    });
};

/**
 * Get File by ID
 */
exports.get = function (req, res) {

    FileData.model.findById(req.params.id).exec(function (err, item) {

        if (err) return res.apiError('database error', err);
        if (!item) return res.apiError('not found');

        res.apiResponse({
            collection: item
        });

    });
};


/**
 * Update File by ID
 */
exports.update = function (req, res) {
    FileData.model.findById(req.params.id).exec(function (err, item) {
        if (err) return res.apiError('database error', err);
        if (!item) return res.apiError('not found');

        const data = (req.method == 'POST') ? req.body : req.query;

        item.getUpdateHandler(req).process(data, function (err) {

            if (err) return res.apiError('create error', err);

            res.apiResponse({
                collection: item
            });

        });
    });
};

/**
 * Upload a New File
 */
exports.create = function (req, res) {

    const item = new FileData.model(),
        data = (req.method == 'POST') ? req.body : req.query;
    /* *
     * 在Keystone的模型里，存储file类型的数据时，需要验证传过来的数据，是否含有filename字段。
     * 验证方法在file的类型文件FileType.js中的：validateInput方法中
     */
    // 把上传文件的原始名称，复制给filename字段
    req.files.file.filename = req.files.file.originalname;
    // console.log(req.files);
    item.getUpdateHandler(req).process(req.files, function (err) {

        if (err) return res.apiError('error', err);

        res.apiResponse({
            file_upload: item
        });

    });
};

/**
 * Delete File by ID
 */
exports.remove = function (req, res) {
    const fileId = req.params.id;
    FileData.model.findById(req.params.id).exec(function (err, item) {

        if (err) return res.apiError('database error', err);

        if (!item) return res.apiError('not found');

        item.remove(function (err) {

            if (err) return res.apiError('database error', err);

            // Delete the file
            exec('rm public/uploads/files/' + fileId + '.*', function (err, stdout, stderr) {
                if (err) {
                    console.log('child process exited with error code ' + err.code);
                    return;
                }
                console.log(stdout);
            });

            return res.apiResponse({
                success: true
            });
        });

    });
};