import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./movieSlice";

const store = configureStore({
    reducer:{
        movieReducer
    }
});

export {store};