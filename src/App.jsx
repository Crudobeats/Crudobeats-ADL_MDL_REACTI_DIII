import { useState } from "react";
import "./App.css";
import { BaseColaboradores } from "./components/baseColaboradores";
import Button from 'react-bootstrap/Button';

function App() {
  const [elementos, setElementos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [newList, setNewList] = useState(BaseColaboradores);

  const handleSubmit = (e) => {
    e.preventDefault();
    let elemento = { nombre: nombre, correo: correo };
    setElementos([...elementos, elemento]);
  };


  const handleFilter = (e) => {
    e.preventDefault();
    let filtroColaborador = elementos.filter((elem) => {
      return elem.nombre.toLowerCase().includes(nombre.toLowerCase()) ||
             elem.correo.toLowerCase().includes(correo.toLowerCase());
    });

    setListaMostrar(filtroColaborador);
  };

  const [listaMostrar, setListaMostrar] = useState(BaseColaboradores);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="container text-center">
            <h2>Ingresar Colaboradores</h2>
          </div>
          <div className="row">
            <form
              action=""
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="col">
                <input className="mb-3"
                  type="text"
                  placeholder="Ingrese aquí el nombre"
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <input  className="mb-3"
                  type="email"
                  placeholder="Ingrese aquí el correo"
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                />
                <div className="col mt-3">
                  <Button  type="submit" className="primary">Agregar Colaborador</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <h3>Listado de Colaboradores</h3>
          <ul>
            {listaMostrar.map((id) => (
              <li key={id}>
                {id.nombre}: {id.correo}
              </li>
            ))}
            {elementos.map((ele, i) => (
              <li key={i}>
                {ele.nombre}: {ele.correo}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <input className="mb-3"
            type="text"
            placeholder="Ingrese aquí la búsqueda"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
          <button onClick={handleFilter}>Buscar</button>
        </div>
      </div>
    </div>
  );
}

export default App;