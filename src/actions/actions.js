import { types } from "../types/types";

export const startLoading = ( dni, celular, placa, terminos_condiciones, history ) => {
    return async (dispatch) => {
        try {
            const res = await fetch('https://randomuser.me/api/');
            const { results } = await res.json();
            const { name, email } = results[0];

            const user_information = {
                dni,
                celular,
                placa,
                terminos_condiciones,
                nombres: `${name.first} ${name.last}`,
                correo: email,
            }

            dispatch(finishLoading(user_information));
            dispatch(stepUser());
            history.push("/car");

        } catch (error) {
            console.log(error);
        }
    }
}

export const finishLoading = (user_information) => {
    return {
        type: types.userFinishLoading,
        payload: { ...user_information }
    }
}

export const carInformation = (year, marca, gas, suma_asegurada) => {
    return {
        type: types.userCarInformation,
        payload: {
            year,
            marca,
            gas,
            suma_asegurada,
        }
    }
}

export const stepUser = () => {
    return {
        type: types.stepUser,
        payload : true,
    }
}

export const stepCar = () => {
    return {
        type: types.stepCar,
        payload : true,
    }
}

export const stepSecure = () => {
    return {
        type: types.stepSecure,
        payload : true,
    }
}

export const coverageAdd = (uid, title, description, monto)=> {
    return {
        type: types.coverageAdd,
        payload: {
            uid,
            title,
            description,
            monto
        }
    }
}

export const coverageRemove = (uid) => {
    return {
        type: types.coverageRemove,
        payload: uid,
    }
}

export const coveragesDelete = () => {
    return {
        type: types.coveragesDelete
    }
}