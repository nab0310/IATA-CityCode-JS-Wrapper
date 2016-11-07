module.exports = function(apikey){
  return {
    api: function(lat, lng, maxAirports, fn){
      var request = require('request');
      var endPoint = "https://airport.api.aero/airport/nearest/"+lat+"/"+lng+"?maxAirports="+maxAirports+"&user_key="+apikey;

      request({method: "get",  url: endPoint, json: true}, function(err, resp, body){

        var info = [];
        var jsonObject = {};

        if(body.error) return console.error(body.error);

        for(var i=0;i<body.airports.length;i++){

        jsonObject = {"name:": body.airports[i].name, "code: ": body.airports[i].code};
        info.push(jsonObject);
      }
        fn(info);
      });
    }
  }
}
