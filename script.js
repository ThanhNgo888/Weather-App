$(document).ready(function(){
    $('#searchBtn').click(function(){
        return getWeather();
    });
});
function getWeather(){
    var city = $('#search-value').val();
    var key ="2803b3ab134397ce801ec2b0ed39942a";
    var urlQuery = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key + "&units=imperial";
        if(city !=""){
            $.ajax({
                url: urlQuery,
                type: "GET",
                dataType: "jsonp",//JSONP stands for JSON with Padding.
                success: function(data){
                    var widget = showResults(data);
                    //console.log(data);
                    $("#showWeather").html(widget);
                    //to clear the input field
                    $("#search-value").val('');
                }
            });
        }else{
            $("#error").html("<div class='alert alert-danger' id='errorCity'>City field cannot be empty</div>")
        }
}
function showResults(data){
    var todayweather = $("#today");
    return todayweather.append("<h3>"+data.name+" <img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+".png'></h3>"+

        "<p>Temperature: "+data.main.temp+" &deg;F</p>"+
        "<p>Humidity: "+data.main.humidity+" %</p>"+
        "<p>Wind Speed: "+data.wind.speed+" MPH</p>"+
        "<p>UV index: </p>");

}
function getForecast(){

}
// search uv index
function getUV(latitute, longitute) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/uv?q=lat" + lat + "&lon=" + lon + "appid=2803b3ab134397ce801ec2b0ed39942a&units=imperial",
      type: "GET"
    }).then(function (response) {
      console.log(response);
      

    })
  }






