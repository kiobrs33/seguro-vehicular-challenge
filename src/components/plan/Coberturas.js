import React, { useState } from 'react';
import { coberturas } from '../../data/data';
import { Cobertura } from './Cobertura';

export const Coberturas = () => {

    const [togleState, setTogleState] = useState(1);

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <span
                        className={togleState === 1 ? "nav-link active" : 'nav-link'}
                        onClick={() => setTogleState(1)}
                    >Protege tu auto</span>
                </li>
                <li className="nav-item">
                    <span
                        className={togleState === 2 ? "nav-link active" : 'nav-link'}

                        onClick={() => setTogleState(2)}
                    >Protege a los que te rodean</span>
                </li>
                <li className="nav-item">
                    <span
                        className={togleState === 3 ? "nav-link active" : 'nav-link'}

                        onClick={() => setTogleState(3)}
                    >Mejora tu plan</span>
                </li>
            </ul>
            <div className="tab-content">
                <div
                    className={togleState === 1 ? 'tab-pane fade show active' : 'tab-pane fade'}
                    role="tabpanel"
                >
                    {
                        coberturas.map(({ uid, title, description, monto }) =>
                            <Cobertura
                                key={uid}
                                uid={uid}
                                title={title}
                                description={description}
                                monto={monto}
                            />
                        )
                    }
                </div>
                <div
                    className={togleState === 2 ? 'tab-pane fade show active' : 'tab-pane fade'}
                    role="tabpanel"
                >
                    <div className="container mt-3 mb-3">
                        <h4>Mas planes en unos momentos</h4>
                    </div>
                </div>
                <div
                    className={togleState === 3 ? 'tab-pane fade show active' : 'tab-pane fade'}
                    role="tabpanel"
                >
                    <div className="container mt-3 mb-3">
                        <h4>Mas planes en unos instantes</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
