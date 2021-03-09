const weatherData = {
    tempUnit: 'C',
    windSpeedUnit: 'm/ s',
    days: [
        { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10, type: 'Sunny' },
        { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'Rainy' },
        { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'Cloudy' },
        { day: 'Thur', temp: 34, windDirection: 'south-east', windSpeed: 15, type: 'Sunny' },
        { day: 'Fri', temp: 25, windDirection: 'north-east', windSpeed: 19, type: 'Sunny' },
        { day: 'Sat', temp: 12, windDirection: 'south-east', windSpeed: 22, type: 'Rainy' },
        { day: 'Sun', temp: 15, windDirection: 'north-east', windSpeed: 33, type: 'Rainy' }
    ],
}

document.getElementById('mon').innerHTML = weatherData.days[0].day;
document.getElementById('tue').innerHTML = weatherData.days[1].day;
document.getElementById('wed').innerHTML = weatherData.days[2].day;
document.getElementById('thur').innerHTML = weatherData.days[3].day;
document.getElementById('fri').innerHTML = weatherData.days[4].day;
document.getElementById('sat').innerHTML = weatherData.days[5].day;
document.getElementById('sun').innerHTML = weatherData.days[6].day;

document.getElementById('temp1').innerHTML = weatherData.days[0].temp + "°";
document.getElementById('temp2').innerHTML = weatherData.days[1].temp + "°";
document.getElementById('temp3').innerHTML = weatherData.days[2].temp + "°";
document.getElementById('temp4').innerHTML = weatherData.days[3].temp + "°";
document.getElementById('temp5').innerHTML = weatherData.days[4].temp + "°";
document.getElementById('temp6').innerHTML = weatherData.days[5].temp + "°";
document.getElementById('temp7').innerHTML = weatherData.days[6].temp + "°";

document.getElementById('windDirection1').innerHTML = "Wind D," + ":" + weatherData.days[0].windDirection;
document.getElementById('windDirection2').innerHTML = "Wind D," + ":" + weatherData.days[1].windDirection;
document.getElementById('windDirection3').innerHTML = "Wind D," + ":" + weatherData.days[2].windDirection;
document.getElementById('windDirection4').innerHTML = "Wind D," + ":" + weatherData.days[3].windDirection;
document.getElementById('windDirection5').innerHTML = "Wind D," + ":" + weatherData.days[4].windDirection;
document.getElementById('windDirection6').innerHTML = "Wind D," + ":" + weatherData.days[5].windDirection;
document.getElementById('windDirection7').innerHTML = "Wind D," + ":" + weatherData.days[6].windDirection;

document.getElementById('windSpeed1').innerHTML = "Wind S," + ":" + weatherData.days[0].windSpeed + " m/s";
document.getElementById('windSpeed2').innerHTML = "Wind S," + ":" + weatherData.days[1].windSpeed + " m/s";
document.getElementById('windSpeed3').innerHTML = "Wind S," + ":" + weatherData.days[2].windSpeed + " m/s";
document.getElementById('windSpeed4').innerHTML = "Wind S," + ":" + weatherData.days[3].windSpeed + " m/s";
document.getElementById('windSpeed5').innerHTML = "Wind S," + ":" + weatherData.days[4].windSpeed + " m/s";
document.getElementById('windSpeed6').innerHTML = "Wind S," + ":" + weatherData.days[5].windSpeed + " m/s";
document.getElementById('windSpeed7').innerHTML = "Wind S," + ":" + weatherData.days[6].windSpeed + " m/s";

document.getElementById('type1').innerHTML = weatherData.days[0].type;
document.getElementById('type2').innerHTML = weatherData.days[1].type;
document.getElementById('type3').innerHTML = weatherData.days[2].type;
document.getElementById('type4').innerHTML = weatherData.days[3].type;
document.getElementById('type5').innerHTML = weatherData.days[4].type;
document.getElementById('type6').innerHTML = weatherData.days[5].type;
document.getElementById('type7').innerHTML = weatherData.days[6].type;



$(document).ready(function () {
    $("#mon").click(function () {
        $("#panel1").toggle();
    });
});
$(document).ready(function () {
    $("#tue").click(function () {
        $("#panel2").toggle();
    });
});
$(document).ready(function () {
    $("#wed").click(function () {
        $("#panel3").toggle();
    });
});
$(document).ready(function () {
    $("#thur").click(function () {
        $("#panel4").toggle();
    });
});
$(document).ready(function () {
    $("#fri").click(function () {
        $("#panel5").toggle();
    });
});
$(document).ready(function () {
    $("#sat").click(function () {
        $("#panel6").toggle();
    });
});
$(document).ready(function () {
    $("#sun").click(function () {
        $("#panel7").toggle();
    });
});

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputKelvin").innerHTML = valNum + 273.15;
}

function speedConverter(valNum) {
    document.getElementById("outputKPH").innerHTML = valNum * (60 * 60) / 1000;
}



