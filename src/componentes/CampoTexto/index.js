import './CampoTexto.css'
import {useState} from "react";

const CampoTexto = (props) => {

    const placeholderModificada = `${props.placeholder}`;

    // let valor = 'Ramon dos Santos';

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        // JSX
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    );
}

export default CampoTexto;