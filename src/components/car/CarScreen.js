import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { carInformation, stepCar } from '../../actions/actions';
import { marcas, years } from '../../data/data';
import { useForm } from '../../hooks/useForm';

const validateForm = values => {
    const errors = {};

    if (!values.year) {
        errors.year = 'Año es requerido!'
    }
    if (!values.marca) {
        errors.marca = 'Marca es requerido!'
    }
    if (!values.gas) {
        errors.gas = 'Gas es requerido!'
    }

    return errors;
}

export const CarScreen = () => {

    const history = useHistory();

    const { nombres } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({});
    const [sumaAsegurada, setSumaAsegura] = useState(12500);

    const [formValues, handleInputChange] = useForm({
        year: '',
        marca: '',
        gas: '',
    });
    const { year, marca, gas } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = validateForm({ ...formValues });
        setErrors(result);

        if (!Object.keys(result).length) {
            dispatch(carInformation(year, marca, gas, sumaAsegurada));
            dispatch(stepCar());
            history.push('/plan');
        }
    }

    const handleAdd = () => {
        (sumaAsegurada < 16500) && setSumaAsegura(sumaAsegurada + 100);
    }
    const handleLess = () => {
        (sumaAsegurada > 12500) && setSumaAsegura(sumaAsegurada - 100)
    }

    const handleVolver = () => {
        history.push('/user');
    }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit}>
                <h2>¡Hola, {nombres}!</h2>
                <span>Completa los datos de tu auto</span>

                <div className="form-group mt-3">
                    <label >Año</label>
                    <select
                        className="form-control"
                        name="year"
                        value={year}
                        onChange={handleInputChange}
                    >
                        {
                            years.map((year, index) => {
                                return <option key={index} value={year} >{year}</option>
                            })
                        }
                    </select>
                    {
                        errors.year
                        && (<small className="form-text text-danger">{errors.year}</small>)
                    }
                </div>

                <div className="form-group">
                    <label>Marca</label>
                    <select
                        className="form-control"
                        name="marca"
                        value={marca}
                        onChange={handleInputChange}
                    >
                        {
                            marcas.map((year, index) => {
                                return <option key={index} value={year} >{year}</option>
                            })
                        }
                    </select>
                    {
                        errors.marca
                        && (<small className="form-text text-danger">{errors.marca}</small>)
                    }
                </div>

                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label" >¿Tu auto es a gas?</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gas"
                            value="si"
                            onChange={handleInputChange}
                        />
                        <label className="form-check-label">Si</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gas"
                            value="no"
                            onChange={handleInputChange}
                        />
                        <label className="form-check-label">No</label>
                    </div>
                    {
                        errors.gas
                        && (<small className="form-text text-danger">{errors.gas}</small>)
                    }
                </div>

                <div className="row mt-5 mb-5">
                    <div className="col">
                        <h5>Indica la suma asegurada</h5>
                        <span>MIN $12,500 | MAX $16,500</span>
                    </div>
                    <div className="col">
                        <div className="d-flex justify-content-between">
                                <button
                                    type="button"
                                    className="btn btn-info btn-sm"
                                    onClick={handleLess}
                                >-</button>
                                <h5>${sumaAsegurada}.00</h5>         
                                <button
                                    type="button"
                                    className="btn btn-info btn-sm"
                                    onClick={handleAdd}
                                >+</button>  
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-between">    
                        <button
                            className="btn btn-danger btn-sm"
                            type="button"
                            onClick={handleVolver}
                        >
                            Volver
                        </button>  
                        <button
                            className="btn btn-primary btn-sm"
                            type="submit"
                        >
                            Continuar
                        </button>
                </div>
            </form>
        </div>
    )
}
