let url = "https://wttr.in/Wheeling,WV?format=j1";

function conditions(weather) {
    let current = weather.current_condition[0];
    console.log("Temperature: " + current.temp_F);
    console.log("\t" + current.weatherDesc[0].value);
}

fetch(url) // fetch the url
    .then(res => res.text())
    .then(json => JSON.parse(json))
    .then(conditions);