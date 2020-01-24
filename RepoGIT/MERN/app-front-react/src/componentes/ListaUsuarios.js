import React, { Component } from 'react';


class ListaUsuarios extends /*React.*/ Component{

    componentDidMount(){
        this.state = null; // AUnque es redundante
        let promesaHttp = window.fetch('http://localhost:4000/api/usuarios/');
        promesaHttp.then((res) => {
            let promesaJSON = res.json();
           // promesaJSON = null;
            promesaJSON.then((objColeccionUsu)=>{
                console.log(JSON.stringify(objColeccionUsu));
                this.setState({
                    listaUsuarios: objColeccionUsu
                })
               
            })
        })
    }
    
    componentWillUnmount(){}
    render(){
        let objViDomJSX

        //TODO: Condiciomañ si this.state no existe mostramos cargando... 

        if (this.state===null){
            
             objViDomJSX = (<h1>Cargando...</h1>)

        } else {
    

           let filasTr = this.state.listaUsuarios.map((usu)=>{
                return (<tr key={ usu._id }> 
                            <td className='columnaTabla'>{usu.name}</td>
                            <td className='columnaTabla'>{usu.email}</td>
                            <td className='columnaTabla'>{usu.edad}</td>
                            <td className='columnaTabla'>
                            <input type='button' value='Borrar'/>
                            </td></tr>);
            });
            
            
        objViDomJSX = (<div>
                <h2>Lista de usuarios</h2>
                <table className='estiloLista col-md-12'>
        <thead >
           <tr><th className='columnaTabla'>
                Nombre
           </th>
           <th className='columnaTabla'>
                Email
            </th>
            <th className='columnaTabla'> 
                Edad
            </th></tr>
        </thead>
        <tbody>
        {filasTr}
 
        </tbody>
                </table>
            </div>
           )}
       
       
       
        return objViDomJSX;
    }
}

export default ListaUsuarios 