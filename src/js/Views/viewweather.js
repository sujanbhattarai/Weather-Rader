import { elements } from './base';
import {key} from '../config';
export const clearResults = () => {
    elements.weather.innerHTML = '';
};


export const renderweather = weather => {
    const icon =weather.weather[0].icon;
    // const url = 'https://pro.openweathermap.org/data/2.5/climate/month?q=London&appid={2b745a15f48d0ccad77c280cfb1b2b11}';

    const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    var SRD = new Date(weather.sys.sunrise*1000);
    var SSD = new Date(weather.sys.sunset*1000);
    var NOW = new Date(weather.dt*1000);
    
    const markup = `

        <h2>Get Current Weather for <b>${weather.name}, ${weather.sys.country}</b></h2> <br />
        As of Today ${NOW.getHours()} : ${NOW.getMinutes()} <br />
        <span>${weather.weather[0].main}</span><br />
        <br />

        <div class="plugin-banner" id="plugin-banner-weather-atlas"></div>
        </h3>
        <img src="${url}" alt="Weather" />
        <h1><big><b>${weather.main.temp}°</b></big></h1><br />
        <p style="text-align:left;">
        <center>
        Today
        <center>


        <span style="float;">
            ${weather.main.temp_max}°   ${weather.main.temp_min}°
            </span>
        </p>
        <center>SunRise: ${SRD.getHours()} : ${SRD.getMinutes()}<br />        <center>

        <center>
        SunSet: ${SSD.getHours()} : ${SSD.getMinutes()}<br />
        <center>
        <br /><br />

        Humidity: ${weather.main.humidity}<br />
        Pressure: ${weather.main.pressure}<br />
        Wind Speed: ${weather.wind.speed}<br />        <br /><br />
        `;

        
    elements.weather.insertAdjacentHTML('beforeend', markup);
};

export const clearMap = () => 
    {
        elements.map.innerHTML = '';
    }
