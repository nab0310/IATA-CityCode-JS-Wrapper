#SITA-JS-Wrapper

## Installation

```
npm install SITA-JS-Wrapper
```

## Usage

```javascript
var sita = require('SITA-JS-Wrapper')(API_KEY_HERE);

sita.api("41.8781136", "-87.62979819999998", "1", function(data){
  //data looks like: [ { "name:" : Chicago Midway Intl , "code:" : MDW } ]
});
```

## Api Parameters:

```
lat: The Latitude of location you want to search.
lng: The Longitiude of the location you want to search.
numberOfAirports: The number of airports you want to return.
fn: A function to access the API response.
```
