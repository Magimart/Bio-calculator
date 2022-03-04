import { combineReducers } from 'redux';
import { addPokemonToWishList, getAllPokemonReducer } from '../redux/reducers/allPokemonReducer';
import userReducer from '../redux/reducers/userReducer';


export default combineReducers({
    usersList: userReducer,
    pokemons: getAllPokemonReducer,
    addToWishlist: addPokemonToWishList,
})



