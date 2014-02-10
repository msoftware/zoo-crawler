var request = require('request');
var cheerio = require('cheerio');
var URI     = require('URIjs');

module.exports = {

  patterns: [],

  fetch : function(input, callback) {

    request(input.url, function(error, response, html) {
      
      if(error || response.statusCode != 200) return callback(null);

      var $ = cheerio.load(html);
      
      var title       = $('title').text();
      var tags        = $('meta[name=keywords]').last().attr('content');
      var description = $('meta[name=description]').last().attr('content');

      var result = {
        url         : input.url,
        title       : title,
        description : description,
        tags        : tags ? tags.split(',') : []
      };
      
      // open graph parser
      $('meta').each(function(i, item) {

        var property = $(this).attr('property');
        var content  = $(this).attr('content');

        // skip invalid tags
        if(property == undefined || property.indexOf('og:') == -1) return;

        // remove the open graph prefix
        var key = property.replace('og:', '');

        switch(key) {
          case 'image':
            result.image = new URI(content).absoluteTo(input.url).toString();
            break;
          case 'title':
            result.title = content;
            break;
          case 'description':
            result.description = content;
            break;
          case 'url':
            result.url = content;
            break;
          case 'video':
            result.video = {url : content};
            break;
          case 'video:type':
            if(!result.video) result.video = {};
            result.video.format = content;
            break;
          case 'video:width':
            if(!result.video) result.video = {};
            result.video.width = content;
            break;
          case 'video:height':
            if(!result.video) result.video = {};
            result.video.height = content;
            break;
        }

      });

      // try to get the first image from the page
      if(!result.image) {

        var img = $('img').first();

        if(img.length) {
          result.image = new URI(img.attr('src')).absoluteTo(input.url).toString();
        }

      }

      // fetch the canonical url if it exists
      var canonical = $('link[rel=canonical]').attr('href');

      // overwrite the url if the canonical exists
      if(canonical) result.url = canonical;

      callback(result);

    });

  }

}