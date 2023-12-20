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
      fila.push(<Button key={i + " " + j} color={props.campo[i][j]} outline onClick={() => props.click(i, j)} className='btnCampo'/>);
    }
    lista.push(<Row><Col>{fila}</Col></Row>)

  }

  return(lista)
}

const BotonTurno = (props) => {
  return(
  <Button className='btnTurno' color={props.color}>{props.players} </Button>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      campo:[],
      filas:9,
      columnas:9,
      listaColores:["danger","primary"],
      turno: "azul",
      players:["x","o"],
    }
  }

  cambiaTurno(){
    let t = this.state.turno;

    if(t==="azul"){
       t = "rojo"
    }else{
       t = "azul"
    }
    this.setState({turno:t})
  }

  click(i, j){
    console.log(i, j);
    console.log(this.state.turno)
    this.cambiaTurno();
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
            <MapaBotones cambiaTurno={()=>this.cambiaTurno()} click={(x,y)=>this.click(x,y)} campo={this.state.campo}/>
          </div>
          <div className='divTexto'>
            <h2>Turno {this.state.turno}</h2>
            <BotonTurno color={this.state.listaColores[0]} players={this.state.players[0]}></BotonTurno>
            {" "}
            <BotonTurno color={this.state.listaColores[1]} players={this.state.players[1]}></BotonTurno>
          </div>
      </div>
    );
  }
}

export default App;
