const request = require("request");

const forecast = (address, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=1775876e2d624cd0b3f163452243107&q=" +
    address +
    "&aqi=no";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.location.name +
          " It is currently " +
          body.current.temp_c +
          " degress out. There is a " +
          body.current.is_day +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
