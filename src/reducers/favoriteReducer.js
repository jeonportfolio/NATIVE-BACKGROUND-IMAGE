import { ACTION_CLICKED_FAVOIRITE } from "../actions/favorite"

export const intialState = {
    favoriteList:[]
}

export const favoriteListReducer = (state = intialState, action) => {
    if( action.type === ACTION_CLICKED_FAVOIRITE){
        const hasItem = state.favoriteList.filter((item) => item === action.clicked).length > 0

        if(hasItem) {
           return {
               ...state,
               favoriteList : state.favoriteList.filter( (item)  => item != action.clicked)
           }
        }

        return {
           ...state,
           favorote: state.favoriteList.concat([action.clicked])
        }
   } 
    
    
    return {
        ...state
    }
}