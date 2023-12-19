import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Component } from 'react';
import { Button,Row,Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaBotones = (props)=>{
  let lista=[];

  for(let i=0; i<props.campo.length; i++){
    let fila=[]
    for(let j=0; j<props.campo[i].length; j++){
      fila.push(<Button color={props.campo[i][j]} outline className='btnCampo'/>);
    }
    lista.push(<Row><Col>{fila}</Col></Row>)

  }

  return(lista)
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      campo:[],
      filas:9,
      columnas:9,
      listaColores:["danger","primary"],
      turno:"azul",
    }
  }

  componentWillMount() {
    // Inicializar matriz vacía
    let matrizAux=[]
    // Mientras que i sea menor que filas
    for (let i=0;i<this.state.filas;i++){
      // Inicializar matriz vacía
      let fila=[]
      // Mientras que j sea menor que columnas
      for (let j=0;j<this.state.filas;j++){
        //insertamos un string
        fila.push("secondary")
      }
      // Insertamos cada fila en m
      matrizAux.push(fila)
    }
    // indicamos que campo será matrizAux
    this.setState({campo:matrizAux})
  }


  render(){
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Cuatro en rayas</h1>
          <div className='divCampo'>
            <MapaBotones campo={this.state.campo}/>
          </div>
          <div className='divTexto'>
            <h2>Turno de: {this.state.turno}</h2>
          </div>
          

      </div>
    );
  }
}

export default App;
