import {   createStore, 
           applyMiddleware 
       } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux';


const reducer = combineReducers({
                 //add combined reducers
    
   })


let  initialState = {
        //set init state for reducer
        // addToWishlist: {                  
        //                     wishListItems: typeof window !== "undefined" && localStorage.getItem("wishListItems")? 
        //                         JSON.parse(localStorage.getItem("wishListItems")) : [],
        // },
        // addToCart: {                  
        //                 cartItem: typeof window !== "undefined" && localStorage.getItem("cartItem")? 
        //                     JSON.parse(localStorage.getItem("cartItem")) : {},                                      
        // }              
   }

               

const middlware = [thunk];
const store = createStore(reducer, initialState,  composeWithDevTools(applyMiddleware(...middlware)))

//_______________reconfigured
export default store;
