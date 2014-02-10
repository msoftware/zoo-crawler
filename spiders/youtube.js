var request     = require('request');
var parseString = require('xml2js').parseString;

module.exports = {

  patterns : [
    'youtube.com\/embed\/(?<id>[a-z0-9_-]+)',
    'youtube.com\/watch(.*)v=(?<id>[a-z0-9_-]+)', 
  ],

  fetch : function(input, callback) {

    var url = 'http://youtube.com/watch?v=' + input.result.id;
    var api = 'http://gdata.youtube.com/feeds/api/videos/' + input.result.id + '?v=2';

    request(api, function (error, response, html) {

      if(error || response.statusCode != 200) return callback(null);

      parseString(html, function(err, xml) {

        var group = xml['entry']['media:group'][0];

        var result = {
          title : group['media:title'][0]['_'],
          url   : url,
          description: group['media:description'][0]['_'],
          tags  : [],
          image : 'http://img.youtube.com/vi/' + input.result.id + '/0.jpg',
          video : {
            url    : 'http://www.youtube.com/embed/' + input.result.id,
            format : 'iframe'
          }
        };

        callback(result);

      });

    });

  }

}