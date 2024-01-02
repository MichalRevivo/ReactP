import { createStore,combineReducers } from "redux";
import { DataReducer } from "./DataReducer";
export const MyStore=createStore(DataReducer);