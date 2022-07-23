import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import {  startLoading } from '../../actions/actions';
import { useForm } from '../../hooks/useForm';

const validateForm = values => {
    const errors = {};

    if (values.dni.toString().length < 8 || values.dni.toString().length > 8) {
        errors.dni = 'Dni es requerido, debe tener 8 caracteres!'
    }
    if (values.celular.toString().length < 9 || values.celular.toString().length > 9) {
        errors.celular = 'Celular es requerido, debe tener 9 digitos!'
    }
    if (values.placa.length < 7 || values.placa.length > 7) {
        errors.placa = 'Placa es requerido!'
    }
    if (values.terminos_condiciones === false) {
        errors.terminos_condiciones = 'Terminos y condiciones es requerido!'
    }

    return errors;
}

export const UserScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});
    const [formValues, handleInputChange] = useForm({
        dni:'',
        celular:'',
        placa:'',
        terminos_condiciones: false
    });
    const { celular, placa, terminos_condiciones, dni } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = validateForm({ ...formValues });
        setErrors(result);

        if (!Object.keys(result).length) {
            dispatch(startLoading(dni, celular, placa, terminos_condiciones, history));
        } 
    }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <h2>Dejanos tus datos</h2>

                <div className="form-group mt-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <select className="custom-select">
                                <option value="1">Dni</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Nro dni 12345678"
                            name="dni"
                            value={dni}
                            onChange={handleInputChange}
                        />
                    </div>
                    {
                        errors.dni
                            && (<small className="form-text text-danger">{errors.dni}</small>)
                    }
                </div>

                <div className="form-group">
                    <input
                        className="form-control"
                        type="number"
                        placeholder="987654321"
                        name="celular"
                        value={celular}
                        onChange={handleInputChange}
                    />
                    {
                        errors.celular
                            && (<small className="form-text text-danger">{errors.celular}</small>)
                    }
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="A3F-123"
                        name="placa"
                        value={placa}
                        onChange={handleInputChange}
                    />
                    {
                        errors.placa
                            && (<small className="form-text text-danger">{errors.placa}</small>)
                    }
                </div>
                
                <div className="form-group">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="terminos_condiciones"
                            value={terminos_condiciones}
                            onChange={handleInputChange}
                        />
                        <label className="form-check-label">Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.</label>
                    </div>
                    {
                        errors.terminos_condiciones
                            && (<small className="form-text text-danger">{errors.terminos_condiciones}</small>)
                    }
                </div>
                
                <button
                    className="btn btn-primary btn-sm"
                    type="submit"
                >
                    Cotizalo
                </button>
            </form>
        </div>
    )
}
