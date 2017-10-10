// Actions are imported in reducer
export const ADD_HOTSPOT = "ADD_HOTSPOT";
export const ADD_RANDOM_HOTSPOT = "ADD_RANDOM_HOTSPOT";
export const DROP_HOTSPOT = "DROP_HOTSPOT";
export const DELETE_HOTSPOT = "DELETE_HOTSPOT";
export const TOGGLE_HOTSPOTS = "TOGGLE_HOTSPOTS";

export const CHANGE_URL = "CHANGE_URL";
export const CHANGE_TITLE = "CHANGE_TITLE";

export const FETCH_URL = "FETCH_URL";
export const RESPONSE_READY = "RESPONSE_READY";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const DISABLE_INPUT = "DISABLE_INPUT";

export const USER_TYPING = "USER_TYPING";
export const TIME_LAST_EDIT = "TIME_LAST_EDIT";

// Action creators are imported and dispatched in containers
export function addHotspot(event, hotspots) {
  if (event.target.tagName !== "FIGURE") {
    return { type: "NO_OP" };
  } else if (hotspots.length >= 10) {
    return { type: "NO_OP" };
  }
  let hotspot = getEventLocation(event);
  return { type: ADD_HOTSPOT, hotspot };
}

export function dropHotspot(event) {
  if (event.target.tagName !== "FIGURE") {
    return { type: "NO_OP" };
  }
  const index = event.dataTransfer.getData("text");
  const { x, y } = getEventLocation(event);
  return { type: DROP_HOTSPOT, x, y, index };
}

export function addRandomHotspot() {
  return { type: ADD_RANDOM_HOTSPOT };
}

export function toggleHotspots() {
  return { type: TOGGLE_HOTSPOTS };
}

export function deleteHotspot(index) {
  return { type: DELETE_HOTSPOT, index };
}

export function changeURL(event, index) {
  return { type: CHANGE_URL, url: event.target.value, index };
}

export function changeTitle(event, index) {
  return { type: CHANGE_TITLE, title: event.target.value, index };
}

function getEventLocation(event) {
  const rect = event.target.getBoundingClientRect();
  const x = (event.clientX - (rect.left + 10)) / rect.width * 100;
  const y = (event.clientY - (rect.top + 10)) / rect.height * 100;
  return { x, y };
}

export const backgroundFetch = (event, index) => dispatch => {
  console.log("backgroundFetch");
  dispatch(disableInput(event, index, true))
  dispatch(fetchUrl(event, index))

  return  fetch("http://59d647df2204e30011011a66.mockapi.io/url")
    .then(response => response.json())
    .then(json => onResponseReady(dispatch, event, index, json))
}

function onResponseReady(dispatch, event, index, json) {
  dispatch(responseReady(json, index))
  dispatch(updateTitle(event, index, json.title))
  dispatch(disableInput(event, index, false))
}

function fetchUrl(event, index) {
  return { type: FETCH_URL, url: event.target.value, index }
}

function responseReady(event, index) {
  return { type: RESPONSE_READY, index }
}

function updateTitle(event, index, title) {
  return { type: UPDATE_TITLE, title: title, index }
}

function disableInput(event, index, bool) {
  return { type: DISABLE_INPUT, disabled: bool, index }
}

const userTyping = (bool, index) => {
  return { type: USER_TYPING, isEditing: bool, index }
}

export function shouldFetchUrl(event, index) {
  return (dispatch, getState) => {
    dispatch(userTyping(true, index))
    const interval = setInterval(checkUntilFinished.bind(getState, event, index, dispatch), 300)
    const state = getState()
    if (!state.userTyping) {
      clearInterval(interval)
    }
  }
}

function checkUntilFinished(getState, event, index, dispatch) {
  const finishedTyping = setTimeout(isFinishedTyping.bind(getState), 200)
  // if (finishedTyping) {
  //   clearInterval(isFinishedTyping)
  // }
  const state = getState()
  console.log("Interval Function", state.userTyping)
  if (Date.now() - state.lastUserEdit > 750 && state.userTyping) {
    console.log("finishedTyping");
    dispatch(backgroundFetch(event, index))
    dispatch(userTyping(false, index))
  }
}

// const isFinishedTyping = (getState) => {
//
//   console.log("isFinishedTyping lastUserEdit", state.lastUserEdit)
//   if (Date.now() - state.lastUserEdit > 750 && state.userTyping) {
//     return true
//   }
// }
