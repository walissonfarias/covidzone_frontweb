import React from 'react';
import './userheader.css';

export default function UserHeader() {
    return (
        <ul className='list-user-options'>
            <li className='button-user-option'>
                <button
                    className='button-user-option waves-effect waves-light btn orange darken-3'
                    href="/UserConfig/UserView"
                    id="profileButton">
                    Dados do Usuario
            </button>
            </li>

            <li className='button-user-option'>
                <button
                    className='button-user-option waves-effect waves-light btn orange darken-3'
                    href="/UserConfig/EditAccount"
                    id="editButton">
                    Editar Conta
            </button>
            </li>

            <li className='button-user-option'>
                <button
                    className='button-user-option waves-effect waves-light btn orange darken-3'
                    href="/UserConfig/DeleteAccount"
                    id="deleteAccountButton">
                Excluir Conta
            </button>
            </li>

        </ul>
    )
}