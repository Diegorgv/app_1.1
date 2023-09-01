import React, { useState, useEffect } from 'react'

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registroslogin");
    if (datos) {
      return JSON.parse(datos);
    } else {
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistros());

  const [titulo, setTitulo] = useState("");
  const [descrip, setDescrip] = useState("");
  const [hora, setHora] = useState("");
  const [fecha, setFecha] = useState("");


  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { titulo, descrip, hora, fecha }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin]);



  const limpiarFormulario = () => {
    setTitulo("");
    setDescrip("");
    setHora("");
    setFecha("");
    document.getElementById("miFormulario").reset();
  }


  return (


    <div className="bg-light" style={{ marginTop: 20, padding: 20 }}>

      <div className="h3">
        Formulario De Registro De Tareas
        <br />
        <form id="miFormulario" onSubmit={botonGuardar} >
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="text" placeholder="Titulo Nueva Tarea" onChange={(e) => setTitulo(e.target.value)} required />
            </div>

            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="text" placeholder='Descripción de la Nueva Tarea' onChange={(e) => setDescrip(e.target.value)} required />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-6">
              <input className="form-control form-control-lg text-center" type='time' placeholder='' onChange={(e) => setHora(e.target.value)} required />

            </div>
            <div className="col-6">
              <input className="form-control form-control-lg text-center" type="date" min="1" max="100000000" placeholder="Ingrese Fecha" onChange={(e) => setFecha(e.target.value)} required />
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <div className="col">
              <button className="btn btn-primary btn-lg">Guardar Datos</button>
            </div>
          </div>
        </form>
      </div>

    </div>




  )
}
