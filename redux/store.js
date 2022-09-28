import { configureStore } from "@reduxjs/toolkit";
import reducers from '../redux/reducers/index';

export default configureStore({
    reducer: reducers
})