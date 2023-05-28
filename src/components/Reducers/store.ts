import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter_reducer";
import {minReducer} from "./min_reducer";
import {maxReducer} from "./max_reducer";
import {displayReducer} from "./display_reducer";

export const rootReducer = combineReducers({
        counter: counterReducer,
        min: minReducer,
        max: maxReducer,
        display: displayReducer
    }
)

export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

// type AppRootState = {
//     counter: number
//     min: number
//     max: number
//     display: number | string
// }


// @ts-ignore
window.store = store