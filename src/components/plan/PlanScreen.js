import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { coveragesDelete, stepSecure } from '../../actions/actions';
import { Coberturas } from './Coberturas';

export const PlanScreen = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const { mensualidad, coberturas } = useSelector(state => state.secure)
    const { placa, marca, year } = useSelector(state => state.user);

    const state = useSelector(state => state)

    const handleAccept = () => {
        dispatch(stepSecure());
        localStorage.setItem('rimac_seguro',JSON.stringify(state));
        history.push('/thanks');
    }

    const handleVolver = () => {
        dispatch(coveragesDelete());
        history.push('/car');
    }

    return (
        <div className="container mt-3 mb-3">
            <h2>Mira las coberturas</h2>
            <label htmlFor="descripcion" >Conoce las coberturas para tu plan</label>

            <div className="card mb-5">
                <div className="card-body">
                    <p className="card-text">Placa {placa}</p>
                    <h5 className="card-title">{`${marca} ${year}`}</h5>
                    <Link to="/car">Editar</Link>
                </div>
            </div>

            <div>
                <h5 className="mb-0">${mensualidad}.00</h5>
                <span className="text-muted text-sm">Mensuales</span>
                <h6 className="text-sm mt-3">El precio incluye :</h6>

                <ul>
                    {
                        coberturas.map(item => <li key={item.uid} >{item.title}</li>)
                    }
                </ul>
            </div>

            <hr/>

            <Coberturas/>
            
            <hr/>

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
                            onClick={handleAccept}
                        >
                            Lo quiero
                        </button>
                </div>
            
        </div>
    )
}
