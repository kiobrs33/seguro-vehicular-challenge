import { types } from "../types/types";

const initialState = {
    suma_asegurada: 0,
    coberturas: [],
    mensualidad: 20,
    compra: false,
    user_step: false,
    car_step: false,
    seguro_step: false,
};

export const secureReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.stepUser:
            return {
                ...state,
                user_step: true,
            };
        case types.stepCar:
            return {
                ...state,
                car_step: true,
            };
        case types.stepSecure:
            return {
                ...state,
                seguro_step: true,
            };
        case types.coverageAdd:
            return {
                ...state,
                coberturas: [
                    { ...action.payload },
                    ...state.coberturas,
                ],
                mensualidad: state.mensualidad + action.payload.monto,
            }
        case types.coverageRemove:
            return {
                ...state,
                coberturas: state.coberturas.filter(
                    cobertura => cobertura.uid !== action.payload,
                ),
                mensualidad: state.mensualidad - state.coberturas.find(
                    cobertura => cobertura.uid === action.payload
                ).monto
            }
        case types.coveragesDelete:
            return {
                ...state,
                coberturas: [],
            }
        case types.userCarInformation:
            return {
                ...state,
                suma_asegurada: action.payload.suma_asegurada,
            }

        default:
            return state;
    }
}