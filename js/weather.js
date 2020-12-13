
console.log("hello world")
function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById("forecast").style.display = "block";

    //Set default location if one isn't provided
    let location;

    // Your code here.
    document.getElementById("location").defaultValue = "Ann Arbor";
    location = document.getElementById("location").value
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;

    // Your code here.
    format = document.getElementById("fahrenheit").value;
    const radios = document.querySelectorAll('input[name="temp"]');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            format = radios[i].value;
        }
    }
    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.
    apiKey = "3d70b9e44d9dac015a285e7ed15a4160"
    query = "https://api.openweathermap.org/data/2.5/weather?q="+location+"&units="+format+"&appid="+apiKey;
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.
    loc = document.getElementById("loc");
    temp = document.getElementById("temp");
    tempImg = document.getElementById("tempImg");

    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        loc.innerHTML = json["name"];
        temp.innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];
        tempImg.src = "http://openweathermap.org/img/w/" + json["weather"][0]["icon"] + ".png";
        tempImg.alt = json["weather"][0]["description"];

    });
}