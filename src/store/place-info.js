import { createSymbiote } from 'redux-symbiote';

const initialState = {
    lat: 0,
    lng: 0,
    byGoogle: []
};

const placeInfo = {
    lat: (state, lat) => ({ ...state, lat }),
    lng: (state, action) => ({ ...state, lng: action }),
    updateResponseByGoogle: (state, byGoogle) => ({ ...state, byGoogle }),
};

export const { actions:  placeInfoAction, reducer: placeInfoReducer } = createSymbiote(initialState, placeInfo)
