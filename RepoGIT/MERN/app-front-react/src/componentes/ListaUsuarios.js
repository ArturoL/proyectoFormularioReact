import React, { Component } from 'react';


class ListaUsuarios extends /*React.*/ Component{

    constructor(props){
        super(props);    //Invocamos al constructor del padre
                        // pasándole las propiedades públicas.
        
        //Para evitar el problema del this con JS hacemos siguiente
        // en el futuro cuando se invoque el metodo this sea realmente this
        
        this.onDelete = this.onDelete.bind(this);

    }
    onDelete(evt){
       
        let el = evt.target;
        let id = el.dataset.idusu;
        console.log(id)

        

        fetch(`http://localhost:4000/api/usuarios/${id}`, {
            method: 'DELETE',
            mode: 'cors'
        })
         .catch(err => console.error(err))
         .then(res => 
            res)

    window.location.reload();
        
        
    
    }


    componentDidMount(){
       
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

            
    

           let contIds= 1;
           let filasTr = this.state.listaUsuarios.map((usu)=>{
                
            contIds++;
            return (<tr key={ contIds } > 
                            <td className='columnaTabla'>{usu.name}</td>
                            <td className='columnaTabla'>{usu.email}</td>
                            <td className='columnaTabla'>{usu.edad}</td>
                            <td className='columnaTabla'>
                            <input type='button' value='Borrar' data-idusu={usu._id} onClick={this.onDelete} />
                            <input type='button' value='Editar' />
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