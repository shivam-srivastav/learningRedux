
  //---------------------------------------------------//

  import { ADD_ARTICLE,ADD_CLICK } from "../constants/action-types";

  const initialState = {
    articles: [],
    click: null
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
      return Object.assign({}, state, {
        articles: state.articles.concat(action.payload)
      })
    }
    if(action.type === ADD_CLICK){
      return Object.assign({},state,{
        click: state.click+1
      })
    }
    return state;
  }
  
  export default rootReducer;