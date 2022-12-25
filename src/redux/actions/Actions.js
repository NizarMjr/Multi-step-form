import { Types } from "../constant/Types";

export const componentID = (id) => {
    return {
        type: Types.COMPONENT_ID,
        payload: id,
    }
}
export const previousID = (id) => {
    return {
        type: Types.PREVIOUS_COMPONENT,
        payload: id,
    }
}
export const specificComponent = () => {
    return {
        type: Types.SPECIFIC_COMPONENT,
    }
}
export const setPlan = (planning, periode, price) => {
    return {
        type: Types.SET_PLAN,
        payload: {
            'planning': planning,
            'periode': periode,
            'price': price,
        }
    }
}
export const addList = (list) => {
    return {
        type: Types.LIST_ITEMS,
        payload: list,
    }
}

