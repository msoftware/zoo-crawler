# Crawler -- Easy URL crawling

## Usage

```javascript
var crawl = require('zoo-crawler');
crawl('http://dribbble.com/shots/919098-Fossypad', function(result) {
	console.log(result);
})
```

## Example output: 

### Dribbble Shot

```
{
  title: 'Fossypad',
  url: 'http://dribbble.com/shots/919098-Fossypad',
  tags: 
    [ 'dribbble', 
      'inspiration', 
      'design'],
  image: 'http://d13yacurqjgara.cloudfront.net/users/987/screenshots/919098/fossypad_2x.jpg' 
}
```

### Youtube Video

```
{ 
  title: 'The Beach Boys Shred I Get Around',
  url: 'http://youtube.com/watch?v=w-0CS-T1HUQ',
  description: 'The Beach Boys Shred I Get Around',
  tags: 
    [ 'shred', 
      'music', 
      'fun', 
      'beach boys'],
  image: 'http://img.youtube.com/vi/w-0CS-T1HUQ/0.jpg',
  video: { 
    url: 'http://www.youtube.com/embed/w-0CS-T1HUQ',
    format: 'iframe' 
  } 
}
```

### Vimeo

```
{ 
  url: 'http://vimeo.com/85555158',
  title: 'Sage Kotsenburg\'s \'Holy Crail\' - X Games with Halldor Helgason',
  description: 'After qualifying for the US Olympic Team at Mammoth…',
  tags: 
   [ 'sage kotsenburg',
     'olympics',
     'x games',
     'halldor helgason',
     'snowboarding' ],
  image: 'http://b.vimeocdn.com/ts/463/432/463432590_640.jpg',
  video: { 
    url: 'http://player.vimeo.com/video/85555158',
    format: 'iframe' 
  } 
}
```


### 500px image

```
{ 
  url: 'http://500px.com/photo/60400166',
  title: 'The Plitvice Lakes',
  description: 'The Plitvice Lakes was published using 500px, the world\'s best photo sharing community.',
  tags: 
   [ 'Croatia',
     'Hrvatska',
     'Korana',
     'Plitvice',
     'Winter',
     'river Korana',
     'the Plitvice Lakes',
     'Lika',
     'National Park',
     'jezera',
     'jezero',
     'lake',
     'lakes',
     'winter',
     'Ličko-senjska',
     'Ličko-senjska županija',
     'Croatian lake',
     'Croatian lakes',
     'National Park Plitvice',
     'National Park Plitvice Lakes' ],
  image: 'http://ppcdn.500px.org/60400166/28cf79dfda5c51294000ddc8c2a2d3cc5cf5b7c8/5.jpg' 
}
  
```
