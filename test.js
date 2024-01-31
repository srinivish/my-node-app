// test.js
const assert = require('chai').assert;
const http = require('http');

describe('Simple Node.js Application', function() {
    it('should return "Hello, World!"', function(done) {
        http.get('http://localhost:3000', function(res) {
            let data = '';

            res.on('data', function(chunk) {
                data += chunk;
            });

            res.on('end', function() {
                assert.strictEqual(data, 'Hello, World!\n');
                done();
            });
        });
    });
});
