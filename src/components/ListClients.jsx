import { useState, useEffect } from 'react';
import ClientService from '../services/ClientService';
import { Link } from 'react-router-dom';

const ListClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    ListClients();
  }, []);

  const ListClients = () => ClientService.getAllClients().then(response => setClients(response.data)).catch(err => console.log(err));
  const deleteClient = (clientId) => ClientService.deleteClient(clientId).then(response => ListClients()).catch(err => console.log(err));

  return (
    <div className='container mt-4'>
      <h2 className='text-center mb-2' style={{ fontWeight: "bold", color: "green" }}>LISTA DE CLIENTES</h2>
      <Link to='/create' className='btn btn-primary mb-3' style={{ fontWeight: "bold" }}>AGREGAR</Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th style={{ textAlign: "center", background: "skyblue" }}>ID</th>
            <th style={{ textAlign: "center", background: "skyblue" }}>NOMBRE</th>
            <th style={{ textAlign: "center", background: "skyblue" }}>APELLIDO</th>
            <th style={{ textAlign: "center", background: "skyblue" }}>EMAIL</th>
            <th style={{ textAlign: "center", background: "skyblue" }}>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {
            clients.map((client) => 
              <tr key={client.id}>
                <td style={{ textAlign: "center" }}>{client.id}</td>
                <td style={{ textAlign: "center" }}>{client.nombre}</td>
                <td style={{ textAlign: "center" }}>{client.apellido}</td>
                <td style={{ textAlign: "center" }}>{client.email}</td>
                <td style={{ textAlign: "center" }}>
                  <Link className='btn btn-info text-white' to={`/update/${client.id}`}>ACTUALIZAR</Link>
                  <button style={{ marginLeft: "10px" }} className='btn btn-danger' onClick={() => deleteClient(client.id)}>ELIMINAR</button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default ListClients;