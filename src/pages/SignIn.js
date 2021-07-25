import React from 'react';

export default function SignIn() {
    return (
    <form action="/autenticate" method="POST">
        <fieldset>
            <label for="name">Nome </label>
            <input id="name" 
            type="name"
            inputMode="name"
            autocomplete="name" 
            />
        </fieldset>
        <fieldset>
            <label for="nascdata">Data de Nascimento </label>
            <input id="nascdata" 
            type="nascdata"
            inputMode="nascdata"
            autocomplete="birthdata" 
            />
        </fieldset>
        <fieldset>
            <label for="doc">CPF </label>
            <input id="doc" 
            type="doc"
            inputMode="doc"
            autocomplete="documents" 
            />
        </fieldset>
        <fieldset>
            <label for="address">Endereço </label>
            <input id="address" 
            type="address"
            inputMode="address"
            autocomplete="address" 
            />
        </fieldset>
        <fieldset>
            <label for="email">E-mail </label>
            <input id="email" 
            type="email"
            inputMode="email"
            autocomplete="username" 
            />
        </fieldset>
        <fieldset>
            <label for="password">Senha</label>
            <input id="password" 
            type="password" 
            inputMode="password" 
            autocomplete="current-password" 
            />
        </fieldset>
        <button type="submit">Cadastrar</button>
    </form>
    )
}