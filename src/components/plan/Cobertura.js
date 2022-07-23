import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { coverageAdd, coverageRemove } from '../../actions/actions';

export const Cobertura = ({ uid, title, description, monto }) => {

    const dispatch = useDispatch();
    const [actionBtn, setActionBtn] = useState(true);

    const handleActionBtn = () => {
        if (actionBtn) {
            dispatch(coverageAdd(uid, title, description, monto));
            setActionBtn(false);
        } else {
            dispatch(coverageRemove(uid));
            setActionBtn(true);
        }
    }

    return (
        <div className="container border border border-secondary rounded mt-3 mb-3 p-3">
            <h5>{title}</h5>
            <p className="text-muted mb-1">{description}</p>
            <button
                className={actionBtn ? 'btn btn-secondary btn-sm' : 'btn btn-danger btn-sm'}
                onClick={handleActionBtn}
            >
                {actionBtn ? 'Agregar' : 'Quitar'}
            </button>
        </div>
    )
}
