import { types } from "../types/types";

const initialState = {
    dni: '',
    celular: '',
    terminos_condiciones: false,
    nombres: '',
    correo: '',
    placa: '',
    year: '',
    marca: '',
    gas: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.userFinishLoading:
            return {
                ...state,
                dni: action.payload.dni,
                celular: action.payload.celular,
                terminos_condiciones: action.payload.terminos_condiciones,
                nombres: action.payload.nombres,
                correo: action.payload.correo,
                placa: action.payload.placa,
            };
        case types.userCarInformation:
            return {
                ...state,
                year: action.payload.year,
                marca: action.payload.marca,
                gas: action.payload.gas,
            }
            
        default:
            return state;
    }
}