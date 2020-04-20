import React, { useState } from 'react'
import imagen from '../imagenes/aula.jpeg'
import signin from '../imagenes/iniciar-sesion.png'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'

 

const Image = styled.image`
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height:750px;
`;

const Titulo = styled.div`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 60px;
    opacity: .8;
`;


const Cuerpo = styled.div`
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 30px;
    opacity: .8;
    margin-bottom:10px;
`;

const Seccion = styled.div`
    margin: 0 auto;
    margin-top: 15%;
`;

const InputF = styled.div`
    padding: 15px;
    margin-left: 3%;
    box-shadow: 0px 0px 10px .1px #e1e1e1;
    background: white;
    margin-bottom:0px;
`;

const Input = styled.input`
    border: none;
`;

const Button = styled.button`
    margin-top: 20px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 20px;
    background: white;
    border:none;
    color:black;
`;

const Formato = styled.div`
    background: #8f6464;
    border-radius: 10px;
    margin: 0px;
    padding: 0px;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 20px;
`;



function Login() {

    const { register, handleSubmit, errors} = useForm();

    const onSubmit=(data, event) =>{
        console.log(data);
        event.target.reset();
    }

    return (
        <div className="container-fluid" >
            <div className="row">
                <div className="col-5">
                    <Image src={imagen}></Image>
                </div>
                <div className="col-7 ">
                    <Seccion className="col-sm-8 "> 
                            <Titulo className="col-12 text-center">BIENVENIDO</Titulo>
                        
                            <Cuerpo className="col-12 text-center">
                                Ingresa tu usuario para consultar tu horario
                            </Cuerpo>
                            <div className="col-12">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Formato>
                                        <InputF className="form-group">
                                            <label className="Control-label">Usuario:</label>
                                            <Input 
                                                type="text" 
                                                className={`form-control ${errors.username ? 'is-invalid' : 'is-valid'}`}
                                                name="username" 
                                                placeholder="Ingresa tu usuario"
                                                ref={register({ required: 'Debes ingresar un usuario valido', validate: username => username .trim() !== "" || 'No debe tener espacios en blanco' })}
                                            />
                                            <div className="invalid-feedback">
                                                {errors.username && errors.username.message}
                                            </div>
                                        </InputF>                                   
                                    </Formato>

                                    <Formato>
                                        <InputF className="form-group">
                                            <label className="Control-label">Contraseña:</label>
                                            <Input 
                                            type="password" 
                                            className={`form-control ${errors.password ? 'is-invalid' : 'is-valid'}`} 
                                            name="password"  
                                            placeholder="Ingresa tu contraseña"
                                            ref={register({ required: 'Debes ingresar una contraseña valida', validate: password => password.trim() !== "" || 'No debe tener espacios en blanco' })}
                                            />   
                                            <div className="invalid-feedback">
                                            {errors.password && errors.password.message}
                                            </div>
                                        </InputF>
                                    </Formato>
                                    <div className="col-12 text-center">
                                        <Button className="btn btn-light" >Entrar <image src={signin}></image> </Button>
                                    </div>
                                </form>
                            </div>          
                    </Seccion>
                </div>
            </div>
        </div>
    );
}

export default Login;