import { combineReducers } from "redux";

import {
  ADD_HOTSPOT,
  DROP_HOTSPOT,
  ADD_RANDOM_HOTSPOT,
  TOGGLE_HOTSPOTS,
  DELETE_HOTSPOT,
  CHANGE_URL,
  CHANGE_TITLE,
  FETCH_URL,
  RESPONSE_READY,
  UPDATE_TITLE,
  DISABLE_INPUT,
  USER_TYPING
} from "../actions/index";

function getEmptyLocationFromState(products) {
  return {
    x: products.length * 5 + 30,
    y: products.length * 5 + 30
  };
}

function media(state = {}, action) {
  let products = [];
  switch (action.type) {
    case ADD_HOTSPOT:
      return Object.assign({}, state, {
        products: [...state.products, action.hotspot]
      });
    case ADD_RANDOM_HOTSPOT:
      return Object.assign({}, state, {
        products: [...state.products, getEmptyLocationFromState(state.products)]
      });
    case DROP_HOTSPOT:
      products = state.products.slice(0);
      products[action.index].x = action.x;
      products[action.index].y = action.y;
      return Object.assign({}, state, {
        products: products
      });
    case DELETE_HOTSPOT:
      products = state.products.filter((item, index) => {
        if (index !== action.index) {
          return item;
        }
      });
      return Object.assign({}, state, {
        products: products
      });
    case TOGGLE_HOTSPOTS:
      if (state.products.length > 1) {
        return Object.assign({}, state, {
          enable_hotspots: true
        });
      } else {
        return Object.assign({}, state, {
          enable_hotspots: !state.enable_hotspots
        });
      }
    case CHANGE_URL:
      products = state.products.slice(0);
      products[action.index].url = action.url;
      console.log("LAST USER EDIT", Date.now());
      products[action.index].lastUserEdit = Date.now()
      return Object.assign({}, state, {
        products: products
      });
    case CHANGE_TITLE:
      products = state.products.slice(0);
      products[action.index].title = action.title;
      return Object.assign({}, state, {
        products: products
      });
    case FETCH_URL:
      products = state.products.slice(0);
      products[action.index].urlLoader = true
      return Object.assign({}, state, {
        products: products
      });
    case RESPONSE_READY:
      products = state.products.slice(0);
      products[action.index].urlLoader = false
      return Object.assign({}, state, {
        products: products
      });
    case UPDATE_TITLE:
      products = state.products.slice(0);
      products[action.index].title = action.title;
      return Object.assign({}, state, {
        products: products
      });
    case DISABLE_INPUT:
      products = state.products.slice(0);
      products[action.index].disableInput = action.disabled;
      return Object.assign({}, state, {
        products: products
      });
    case USER_TYPING:
      console.log("USER Typing!", action.isEditing)
      products = state.products.slice(0);
      products[action.index].userTyping = action.isEditing
      return Object.assign({}, state, {
        products: products
      });
    default:
      return state;
  }
}

function mediaForm(state = {}, action) {
  return state;
}

function formErrors(state = [], action) {
  return state;
}

const mediaApp = combineReducers({
  media: media,
  form: mediaForm
});

export default mediaApp;
