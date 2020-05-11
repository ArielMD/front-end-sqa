import React from 'react';
import styled from 'styled-components';

const generarColor= ()=> {
    return '#' +  Math.random().toString(16).substr(-6);
};

const itemMateria = (props) => {

    return (
        <Item>
            <Div>
                <div>{props.materia}</div>
            </Div>
        </Item>
    );
    
}

const Item = styled.div`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    text-align: center;
    border-radius: 5px;
    margin:0px;
    margin-bottom : 20px;
    font-size: 1.5em;
    height:50px;
    background-color:#9D81B3;
`;

const Div = styled.div`
    background-color: #fcfee9;
    margin-left: 5px;
    height:50px;
    &:hover {
        background-color: #D1E8FF;
    }
`;


export default itemMateria;