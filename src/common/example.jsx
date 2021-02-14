import React from 'react';
import Majax from 'react-mathjax';

export const changeValue = (event) => isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);
export const setRes = (res, fixed) => isNaN(res) ? "0" : res.toFixed(fixed);
export const mathjaxNode = (formula) => {
    return <Majax.Node inline formula={formula} />
}