const async = require('async'),
    keystone = require('keystone');
const exec = require('child_process').exec;
const FileData = keystone.list('FileUpload');

/**
 * List Files
 */
exports.test = function (req, res) {
    const item = new FileData.model(),
        data = (req.method == 'POST') ? req.body : req.query;
    /* *
     * 在Keystone的模型里，存储file类型的数据时，需要验证传过来的数据，是否含有filename字段。
     * 验证方法在file的类型文件FileType.js中的：validateInput方法中
     */
    // 把上传文件的原始名称，复制给filename字段
    // req.files.file.filename = req.files.file.originalname;
    // console.log(data);
    console.log(req.headers);
    res.apiResponse(data);
    /* item.getUpdateHandler(req).process(data, function (err) {

        if (err) return res.apiError('error', err);

        res.apiResponse({
            file_upload: item
        });

    }); */
};

