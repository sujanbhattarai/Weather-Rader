import search from './models/Search';
import * as searchview from './Views/searchview';

import weather from './models/weather';
import { clearLoader, elements } from './Views/base';
import * as weatherview from './Views/viewweather';
import * as mapview from './Views/mapview';


const state={};


const controlsearch = async () => 
        {
            /**search.rendermap (query);*/
             const query = searchview.getInput();
             if(query){
            controlweather(query);
            mapview.clearMap();

             mapview.renderCity(query);
             }
        }

elements.searchForm.addEventListener('submit',e => {
e.preventDefault();
controlsearch();
});

            /**controlsearch('lubbock');*/
const controlweather = async (query) =>
{
    if(query)
        {
            try 

                {
                   weatherview.clearResults(); 
                    state.weather = new weather(query);
                    await state.weather.getResults();
                    weatherview.renderweather(state.weather.result)
                }
        catch (err)
            {
                alert ('invalid');
            }
        }
    }
    





// import Search from './models/Search';
// import Restaurants from './models/Restaurants';
// import Weather from './models/Weather';
// //import Favorites from './models/Favorites';
// import * as searchView from './views/searchView';
// import * as weatherView from './views/weatherView';
// import * as restaurantsView from './views/restaurantsView';
// import * as mapsView from './Views/mapView';
// //import * as favoritesView from './views/favoritesView';
// import { elements, renderLoader, clearLoader } from './views/base';


// const state = {};
// /** 
//  * SEARCH CONTROLLER
//  */
// //restaurantsView.renderLanding();
// const controlSearch = async () => {
//     // 1) Get query from view
//     const query = searchView.getInput();
    
//     if (query) {
//         // 2) New search object and add to state
//         state.search = new Search(query);

//         // 3) Prepare UI for results
//         mapsView.clearMap();
//         searchView.clearInput();
//         searchView.clearResults();
//         weatherView.clearResults();
//         restaurantsView.clearRestaurant();
//         renderLoader(elements.searchRes);
//         renderLoader(elements.weather);
//         try {
//             // 4) Search for restaurants
//             await state.search.getResults();
    
//             // 5) Render results on UI
//             clearLoader();
//             searchView.renderResults(state.search.result);
//             controlWeather(query);
//             mapsView.renderCity(query);
//         } catch (err) {
//             alert('Something wrong with the search...');
//             clearLoader();
//         }
//     }
// }

// elements.searchForm.addEventListener('submit', e => {
//     e.preventDefault();
//     controlSearch();
// });

// /** 
//  * RESTAURANT CONTROLLER
//  */
// const controlRestaurant = async () => {
//     // Get ID from url
//     const id = window.location.hash.replace('#', '');

//     if (id) {
//         // Prepare UI for changes
//         restaurantsView.clearRestaurant();
//         renderLoader(elements.restaurant);

//         // Highlight selected search item
//         if (state.search) searchView.highlightSelected(id);

//         // Create new restaurant object
//         state.restaurant = new Restaurants(id);

//         try {
//             // Get restaurant data and parse ingredients
//             await state.restaurant.getRestaurants();
    
//             // Render restaurant
//             clearLoader();
//             restaurantsView.renderRestaurant(
//                 state.restaurant
//             );

//         } catch (err) {
//             console.log(err);
//             alert('Error processing restaurant!');
//         }
//     }
// };
 
// ['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRestaurant));

// /** 
//  * WEATHER CONTROLLER
//  */
// const controlWeather = async (query) => {
    
//     if (query) {
        
//         try {
//             state.weather = new Weather(query);
//             // 4) Search for weather
//             await state.weather.getResults();
    
//             clearLoader();
//             // 5) Render results on UI
//             weatherView.renderWeather(state.weather.result);
//         } catch (err) {
//             alert('Something wrong with the search...');
//             clearLoader();
//         }
//     }
// }
// Chat conversation end
// Type a message...