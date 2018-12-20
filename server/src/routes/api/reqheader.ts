/**
 * Get request headers
 */
exports.getHeaders = function (req, res) {
        res.set('Content-Type', 'text/plain');
        let s = '';
        for (const name in req.headers)
            s += name + ': ' + req.headers[name] + '\n';
        res.send(s);
};


