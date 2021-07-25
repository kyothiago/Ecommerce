import React from 'react';

export default functiona Produtos() {
return (
    <form action="/autenticate" method="POST">
        <fieldset>
            <label for="productcode">Cód. Produto </label>
            <input id="productcode" 
            type="productcode"
            inputMode="number" 
            />
        </fieldset>
        <fieldset>
            <label for="productName">Nome </label>
            <input id="productName" 
            type="productName"
            inputMode="text"
            />
        </fieldset>
        <fieldset>
            <label for="description">Descrição </label>
            <input id="description" 
            type="description"
            inputMode="text" 
            />
        </fieldset>
        <fieldset>
            <label for="price">Preço Unidade: </label>
            <input id="price" 
            type="price"
            inputMode="number"
            />
        </fieldset>
        <fieldset>
            <label for="qtde">Quantidade: </label>
            <input id="qtde" 
            type="qtde" 
            inputMode="number" 
            />
        </fieldset>
        <button type="submit">Adcionar</button>
    </form>
    )
}
}