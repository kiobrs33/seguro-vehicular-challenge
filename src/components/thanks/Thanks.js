import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const Thanks = () => {
    const { correo, nombres } = useSelector(state => state.user)
    const history = useHistory();

    const handleInicio = () => {
        history.replace('/');
    }
    return (
        <div className="container pt-3 pb-3">
            <h2 className="text-danger">Te damos la Bienvenida! {nombres}</h2>
            <h4>Cuenta con Nosotros para proteger tu vehículo</h4>
            
            <p className="text-muted text-sm mt-4">Enviaremos la confirmacion de tu compra de tu Plan Vehicular Tracking a tu correo</p>
            <h5>{correo}</h5>
            <button 
                className="btn btn-danger"
                onClick={handleInicio}
            >
                COMO USAR MI SEGURO
            </button>
        </div>
    )
}
