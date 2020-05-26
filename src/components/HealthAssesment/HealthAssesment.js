import React from 'react';

import './styles.css';

export default function HealthAssesment() {
    return (
        <div className="health-container">
            <div className="page">
                <section>
                    <form>
                        <h1>Avaliação de Saúde</h1>
                        <div>
                            Teve contato com algum caso confirmado ou suspeito nos ultimos 14 dias?
                            <div>

                                <label
                                    id='sim-option'
                                >
                                    <input

                                        className="with-gap"
                                        name="Contato"
                                        type="radio" />
                                    <span>Sim</span>

                                </label>

                                <label
                                    id='nao-option'
                                >
                                    <input

                                        className="with-gap"
                                        name="Contato"
                                        type="radio" />
                                    <span>Não</span>

                                </label>

                            </div>
                        </div>

                        <input
                            id="days-field"
                            type="number"
                            placeholder="Há quanto tempo que está de quarentena? (Em Dias)"
                            required
                        />

                        <table>
                            <thead>
                                <tr>
                                    <th> Sintomas </th>
                                    <th> Condições agravantes </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>
                                    <div className="checkbox" >

                                        <div>
                                            <label
                                                id="Tosse"
                                                htmlFor='Tosse'>
                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Tosse</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Febre'
                                                id="Febre"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Febre</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Coriza'
                                                id="Coriza"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Coriza</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='DorDeCabeca'
                                                id="DorDeCabeca"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Dor de Cabeça</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='DorDeGarganta'
                                                id="DorDeGarganta"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Dor de Garganta</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='DorNoPeito'
                                                id="DorNoPeito"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Dor no Peito</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Tonturas'
                                                id="Tonturas"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Tonturas</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='DorNoCorpo'
                                                id="DorNoCorpo"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Dor no Corpo</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='DificuldadeRespirar'
                                                id="DificuldadeRespirar"
                                            >

                                                <input

                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Dificuldade para Respirar</span>

                                            </label>
                                        </div>

                                    </div>
                                </td>
                                    <td>

                                        <div>
                                            <label
                                                htmlFor='Asma'
                                                id="Asma"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="filled-in" />
                                                <span>Asma</span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='AIDS'
                                                id="AIDS"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="filled-in" />
                                                <span>AIDS</span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Bronquite'
                                                id="Bronquite"
                                            >

                                                <input
                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Bronquite</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Cancer'
                                                id="Cancer"
                                            >

                                                <input
                                                    type="checkbox"
                                                    className="filled-in"
                                                />
                                                <span>Cancer</span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Diabetes'
                                                id="Diabetes"
                                            >

                                                <input
                                                    type="checkbox"
                                                    className="filled-in"
                                                />
                                                <span>Diabetes</span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='PressaoAlta'
                                                id="PressaoAlta"
                                            >
                                                <input

                                                    type="checkbox"
                                                    className="filled-in"
                                                />
                                                <span>Pressão Alta</span>
                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Gestante'
                                                id="Gestante"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="filled-in"
                                                />
                                                <span>Gestante</span>

                                            </label>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor='Idoso'
                                                id="Idoso"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="filled-in" />

                                                <span>Idoso</span>

                                            </label>
                                        </div>

                                    </td>

                                </tr>
                            </tbody>
                        </table>

                        <button
                            id='submit-button'
                            className="button"
                            type="submit">
                            Salvar
                        </button>

                    </form>
                </section>
            </div>
        </div>
    );

}