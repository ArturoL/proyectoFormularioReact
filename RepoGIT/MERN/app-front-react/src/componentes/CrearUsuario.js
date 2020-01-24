import React, { Component } from 'react';


class CrearUsuario extends /*React.*/ Component{
    //this.props es objeto con datos publicos
    //this.state( objeto de REACT ) objeto con datos privados, es decir, 
    //el estado interno del componente. Como Angular 
    //las variables miembro de la clase privada 

    constructor(props){
        super(props);    //Invocamos al constructor del padre
                        // pasándole las propiedades públicas.
        
        //Para evitar el problema del this con JS hacemos siguiente
        // en el futuro cuando se invoque el metodo this sea realmente this
        
        this.state={
            name: 'señor1',
            edad: '90',
            email: 'aaa@aaaa.com',
            password:'aaaa',
        }
        
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEdad = this.onChangeEdad.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    

    }

    // metodo  onChange invocado por React cada vez que se cambia el valor de INPUT 
    // se envia un objeto con la informacion del metodo.


    onChangeName(evt){

        this.setState({// como parámetro recibimos un objeto con la prop email y le asignamos el valor
            name: evt.target.value
        });
    }
    onChangeNombre(evt){

        this.setState({// como parámetro recibimos un objeto con la prop email y le asignamos el valor
            email: evt.target.value
        });
    }

    onChangeEdad(evt){

        this.setState({// como parámetro recibimos un objeto con la prop email y le asignamos el valor
            edad: evt.target.value
        });
    }

    onChangePassword(evt){

        this.setState({
            password: evt.target.value
        });
    }

    onSubmit(evt){
        evt.preventDefault();// Invocamos al servicio Http ajax fetch....
        console.log(`Datos: ${this.state.name}, ${this.state.email}, ${this.state.password}`)
        window.fetch('http://localhost:4000/api/usuarios/registro', {
            method: 'POST',
            body: JSON.stringify({
                "name": this.state.name,
                "email": this.state.email,
                "edad": this.state.edad,
                "password":this.state.password
            }), 
            headers: {'Content-Type': 'application/json'}
        }).then((res)=> alert('pues habra ido bien jeje'))
        .catch((vacas)=> 'Pues habra ido mal jojo')
    }

    render(){
        return(
            <div className='wrapper col-md-12 divwrappercrear'>
                <h2>Formulario</h2>
                <form className='formularioCrear col-md-6' onSubmit={this.onSubmit}> 
                    <div className='divCampo' >
                        <label>Nombre</label>
                        <input type="text"
                                placeholder="Quién eres"
                                value={this.state.name}
                                onChange={this.onChangeName}/>
                    </div>
                    <div className='divCampo'>
                        <label>Email</label>
                        <input type="email"
                                placeholder="email@email.com"
                                value={this.state.email}
                                onChange={this.onChangeNombre}/>
                    </div>
                    <div className='divCampo'>
                        <label>Email</label>
                        <input type="number"
                                placeholder="email@email.com"
                                value={this.state.edad}
                                onChange={this.onChangeEdad}/>
                    </div>
                    <div className='divCampo'>
                        <label>Password</label>
                        <input type="password"
                                placeholder="l3tr4s y números"
                                value={this.state.password}
                                // onChange de react, es una función
                                onChange={this.onChangePassword}/>
                    </div>
                    <div className='divCampo'><input type="submit" value="Registrar" /></div>
                  
                </form>
            </div>
        )
    }
}

export default CrearUsuario