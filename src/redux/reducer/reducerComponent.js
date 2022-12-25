import { Types } from "../constant/Types";

const globalID = 1;
const plan = {
};
const list = [];

export const reducerComponent = (state = globalID, { type, payload }) => {
    switch (type) {
        case Types.COMPONENT_ID: {
            state = payload + 1;
            return state;
        }
        case Types.PREVIOUS_COMPONENT: {
            state = payload - 1;
            if (state < 1)
                state = 1;
            return state;
        }
        case Types.SPECIFIC_COMPONENT: {
            state = 2;
            return state;
        }
        default: return state
    }
}
export const reducerSetPlan = (state = plan, { type, payload }) => {
    switch (type) {
        case Types.SET_PLAN: {
            state = payload;
            return state;
        }
        default:
            return state;
    }
}
export const reducerList = (state = list, { type, payload }) => {
    switch (type) {
        case Types.LIST_ITEMS: {
            state = payload;
            return state;
        }
        default: return state;
    }
}