import React, { useState } from 'react';
import './styles.css';
import api from '../../../services/api';
export default function EditAccountForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [reNewPassword, setReNewPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        if (newPassword === reNewPassword) {
            const response = await api.put('/update', {
                name,
                email,
                password,
                newPassword
            })
            console.log(response.data);
        } else {
            alert('As senhas não conferem');
        }
    }
    return (
        <div className="editAcc-container">
            <div className="page">
                <div>
                    <section>
                        <form onSubmit={handleSubmit}>
                            <h1>Editar Conta</h1>
                            <input
                                id="nameField"
                                placeholder="Seu nome"
                                required
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />

                            <input
                                id="emailField"
                                type="email"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <input
                                id="passwordField"
                                type="password"
                                placeholder="Senha Atual"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />

                            <input
                                id="newPasswordField"
                                type="password"
                                placeholder="Nova Senha"
                                required
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            />

                            <input
                                id="reNewPasswordField"
                                type="password"
                                placeholder="Confirmar Senha"
                                required
                                value={reNewPassword}
                                onChange={e => setReNewPassword(e.target.value)}
                            />
                            <button
                                id="submit-button"
                                className="button orange darken-3"
                                type="submit">
                                Atualizar
                        </button>
                        </form>
                    </section>
                </div>
            </div>
        </div>

    );

}