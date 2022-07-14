import {
    ADD_PRODUCT,
    SET_INPUT_BRAND,
    SET_INPUT_IMAGE,
    SET_INPUT_NAME,
    SET_INPUT_PRICE
} from "./constants";

export const setInputName = payload => ({
    type: SET_INPUT_NAME,
    payload
})

export const setInputPrice = payload => ({
    type: SET_INPUT_PRICE,
    payload
})

export const setInputBrand = payload => ({
    type: SET_INPUT_BRAND,
    payload
})

export const setInputImage = payload => ({
    type: SET_INPUT_IMAGE,
    payload
})

export const addProduct = payload => ({
    type: ADD_PRODUCT,
    payload
})
