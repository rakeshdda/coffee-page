import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

//Link my web components
import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';

window.app ={}
    app.store = Store; 
    app.router = Router;


//its better to wait for the event for manupulation
window.addEventListener("DOMContentLoaded", async()=>{
     loadData();
     app.router.init();
})