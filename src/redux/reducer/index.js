import { combineReducers } from "redux";
import { reducerComponent, reducerList, reducerSetPlan } from "./reducerComponent";

const reducers = combineReducers({
    increaseID: reducerComponent,
    setPlanning: reducerSetPlan,
    setList: reducerList,
})
export default reducers;
