# Crawler -- Easy URL crawling

## Usage

```javascript
var crawl = require('zoo-crawler');
crawl('http://dribbble.com/shots/919098-Fossypad', function(result) {
	console.log(result);
})
```

## Example output: 

```json
{
    title: 'Fossypad',
    url: 'http://dribbble.com/shots/919098-Fossypad',
    tags: [ 'dribbble', 'inspiration', 'design' ],
    image: 'http://d13yacurqjgara.cloudfront.net/users/987/screenshots/919098/fossypad_2x.jpg' 
}