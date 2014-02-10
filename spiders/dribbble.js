var request = require('request');

module.exports = {

  patterns : [
    'dribbble\.com\/shots\/(?<id>[0-9]+)',
    'dribbble.com\/system\/users\/[0-9]+\/screenshots\/(?<id>[0-9]+)'
  ],

  fetch : function(input, callback) {

    var api = 'http://api.dribbble.com/shots/' + input.result.id;

    request(api, function (error, response, html) {

      if(error || response.statusCode != 200) return callback(null);

      var json   = JSON.parse(html);
      var result = {
        title : json.title,
        url   : json.url,
        tags  : ['dribbble', 'inspiration', 'design'],
        image : json.image_url
      };

      callback(result);

    });

  }

}