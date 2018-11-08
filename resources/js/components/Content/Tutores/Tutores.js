import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Tutores extends Component {

  constructor(){
      super();
      this.onChangeTutor_Nombre = this.onChangeTutor_Nombre.bind(this);
      this.onChangeTutor_ApellidoPaterno = this.onChangeTutor_ApellidoPaterno.bind(this);
      this.onChangeTutor_ApellidoMaterno = this.onChangeTutor_ApellidoMaterno.bind(this);
      this.onChangeTutor_Correo = this.onChangeTutor_Correo.bind(this);
      this.onChangeTutor_Pais = this.onChangeTutor_Pais.bind(this);
      this.onChangeTutor_Estado = this.onChangeTutor_Estado.bind(this);
      this.onChangeTutor_Ciudad = this.onChangeTutor_Ciudad.bind(this);
      this.onChangeTutor_Municipio = this.onChangeTutor_Municipio.bind(this);
      this.onChangeTutor_Genero = this.onChangeTutor_Genero.bind(this);
      this.onChangeTutor_Curso = this.onChangeTutor_Curso.bind(this);
      this.onChangeTutor_Institucion = this.onChangeTutor_Institucion.bind(this);
      this.onChangeSearch = this.onChangeSearch.bind(this);
      this.state = {
        tutores : [],
        isActive : false,
        tutorEsp : [],
        search_info : ""
    }

  }

  componentDidMount() {
    axios.get('/api/tutores').then(
        response => {
            this.setState({
                tutores: response.data
            });
    });
    //Modal.setAppElement('body');
}

onEnter(e){
    var search_info = this.state.search_info;
    
    if (search_info != "") {
        
        axios.get('/api/search/tutores/'+ search_info).then(
            response => {
                this.setState({
                    tutores: response.data
                });
        });
        
     }
       else
        {
            axios.get('/api/tutores').then(
                response => {
                    this.setState({
                        tutores: response.data
                    });
            });
        } 
    

}

onChangeSearch(e){
    this.state.search_info = e.target.value;
    this.forceUpdate();
}

onDelete(tutor_id){
    console.log(tutor_id);
    swal({
        title: 'Estas seguro de borrarlo?',
        text: "Esta accion no es reversible",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminalo!',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.value) {
            axios.delete('/api/tutores/delete/' + tutor_id)
            .then(response =>{
    
                var tutores = this.state.tutores;
                for(var  i = 0; i< tutores.length; i++){
                    if(tutores[i].id == tutor_id){
                        tutores.splice(i,1);
                        this.setState({tutores:tutores});
                    }
                }
            })
          swal(
            'Eliminado!',
            'El tutor ha sido elimnado con exito',
            'success'
          )
        }
      })

}

toggleModal(tutor_id){
    console.log(tutor_id);
    this.setState({isActive: true});
    axios.get('/api/tutor/' + tutor_id).then(
        response => {
            this.setState({
                tutorEsp: response.data
                
            });
    });
    
}

closeModal(){
    this.setState({isActive:false});
}

onChangeTutor_Nombre(e) {
    this.state.tutorEsp.nombre = e.target.value;
    this.forceUpdate();
}
onChangeTutor_ApellidoPaterno(e) {
    this.state.tutorEsp.apellidoPaterno = e.target.value;
    this.forceUpdate();
}

onChangeTutor_ApellidoMaterno(e) {
    this.state.tutorEsp.apellidoMaterno = e.target.value;
    this.forceUpdate();
}

onChangeTutor_Correo(e) {
    this.state.tutorEsp.correo = e.target.value;
    this.forceUpdate();
}

onChangeTutor_Pais(e) {
    this.state.tutorEsp.pais = e.target.value;
    this.forceUpdate();
}

onChangeTutor_Estado(e) {
    this.state.tutorEsp.estado = e.target.value;
    this.forceUpdate();
}

onChangeTutor_Ciudad(e) {
    this.state.tutorEsp.ciudad = e.target.value;
    this.forceUpdate();
}

onChangeTutor_Municipio(e) {
    this.state.tutorEsp.municipio = e.target.value;
    this.forceUpdate();
}

onChangeTutor_Genero(e) {
    this.state.tutorEsp.genero = e.target.value;
    this.forceUpdate();
}

onChangeTutor_Curso(e) {
    this.state.tutorEsp.curso = e.target.value;
    this.forceUpdate();
}
onChangeTutor_Institucion(e) {
    this.state.tutorEsp.institucion = e.target.value;
    this.forceUpdate();
}

onSubmit(e) {
        
    var tutor_id = this.state.tutorEsp.id;
    const tutor = {
        tutor_nombre : this.state.tutorEsp.nombre,
        tutor_apellidoPaterno : this.state.tutorEsp.apellidoPaterno,
        tutor_apellidoMaterno : this.state.tutorEsp.apellidoMaterno,
        tutor_correo : this.state.tutorEsp.correo,
        tutor_pais : this.state.tutorEsp.pais,
        tutor_estado : this.state.tutorEsp.estado,
        tutor_ciudad : this.state.tutorEsp.ciudad,
        tutor_municipio : this.state.tutorEsp.municipio,
        tutor_genero : this.state.tutorEsp.genero,
        tutor_curso : this.state.tutorEsp.curso,
        tutor_institucion : this.state.tutorEsp.institucion

    }
    
    axios.put('/api/tutor/update/' + tutor_id, tutor).then(
        response =>{
            axios.get('/api/tutores').then(
                response => {
                    this.setState({
                        tutores: response.data
                    });
                    swal(
                        'Bien',
                        'Curso modificado con exito',
                        'success'
                      )
                }
            );
        }
        
    );
    

}
    render() {
        return (

<Router>
<div className="col-8 p-0 main">
    {/*Search bar*/}
    <div className="row p-0">
    <div className="col-12 p-0">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                <i className="material-icons">search</i>
                </span>
            </div>
            <input value={this.state.search_info} onKeyUp={this.onEnter.bind(this)}
            onChange={this.onChangeSearch} type="text" className="form-control form-control-lg" 
            placeholder="Buscar tutor por nombre..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
    </div>
    </div>
    {/*Content row*/}
    <div className="row justify-content-center p-4">
    <div className="col p-0">
        <div className="row justify-content-between">
            <div className="col-auto">
                <h1>Tutores</h1>
            </div>

            <div className="col-auto">
                <a href="/index/tutores/nuevo" className="font-weight-bold">Agregar nuevo</a>
            </div>
        </div>

        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Curso</th>
                    <th scope="col">Acciones</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
{
    this.state.tutores.map(tutor => {
        return (
            <tr>
                <th scope="row">{tutor.id}</th>
                <td>{tutor.nombre}</td>
                <td>{tutor.correo}</td>
                <td>{tutor.curso}</td>
                <td><button className="btn btn-danger"  onClick={this.onDelete.bind(this,tutor.id)}><FontAwesomeIcon icon="trash-alt" /></button></td> 
                <td><button className="btn btn-info"  onClick={this.toggleModal.bind(this, tutor.id)}><FontAwesomeIcon icon="info-circle" /></button></td> 
                <Modal isOpen={this.state.isActive} onRequestClose={this.closeModal.isActive}>
                    <button className="btn btn-primary" onClick={this.closeModal.bind(this)}><FontAwesomeIcon icon="arrow-left" /></button>
                        <div className="form-group">                         
                            <label htmlFor="tutor_nombre">Nombre</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_nombre"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.nombre} 
                                onChange={this.onChangeTutor_Nombre} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_apellidoPaterno">Apellido Paterno</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_nombre"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.apellidoPaterno} 
                                onChange={this.onChangeTutor_ApellidoPaterno} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_apellidoMaterno">Apellido Materno</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_apellidoMaterno"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.apellidoMaterno} 
                                onChange={this.onChangeTutor_ApellidoMaterno} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_correo">Correo</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_correo"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.correo} 
                                onChange={this.onChangeTutor_Correo} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_pais">Pais</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_pais"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.pais} 
                                onChange={this.onChangeTutor_Pais} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_estado">Estado</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_estado"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.estado} 
                                onChange={this.onChangeTutor_Estado} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_ciudad">Ciudad</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_ciudad"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.ciudad} 
                                onChange={this.onChangeTutor_Ciudad} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_municipio">Municipio</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_municipio"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.municipio} 
                                onChange={this.onChangeTutor_Municipio} />
                        </div>
                        <div className="form-group">                         
                            <label htmlFor="tutor_genero">Genero</label>
                                <input type="text"
                                className="form-control"
                                id="tutor_genero"
                                aria-describedby="nombre"
                                value={this.state.tutorEsp.genero} 
                                onChange={this.onChangeTutor_Genero} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tutor_curso">Curso</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_Curso"
                            aria-describedby="curso"
                            value={this.state.tutorEsp.curso}
                            onChange={this.onChangeTutor_Curso}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="tutor_institucion">Institucion</label>
                            <input type="text"
                            className="form-control"
                            id="tutor_Institucion"
                            aria-describedby="institucion"
                            value={this.state.tutorEsp.institucion}
                            onChange={this.onChangeTutor_Institucion}/>
                        </div>
                          <button className="btn btn-primary" onClick={this.onSubmit.bind(this,tutor.id)}><FontAwesomeIcon icon="save" /></button>
                </Modal>
            </tr>
                )
                                })
}
            </tbody>
        </table>
    </div>
    </div>
    </div>
</Router>
        );
    }
}

if (document.getElementById('Tutores')) {
    ReactDOM.render(<Tutores/>, document.getElementById('tutores'));
}
