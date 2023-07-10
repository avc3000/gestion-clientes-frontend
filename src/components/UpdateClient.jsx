import { useState, useEffect } from 'react';
import ClientService from '../services/ClientService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateClient = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  const updateClient = (e) => {
    e.preventDefault();
    const client = { nombre, apellido, email };
    ClientService.updateClient(id, client).then(() => navigate('/clients')).catch((error) => console.log(error));
  };

  useEffect(() => {
    ClientService.getClientById(id).then((response) => {
      setNombre(response.data.nombre);
      setApellido(response.data.apellido);
      setEmail(response.data.email);
    }).catch((error) => console.log(error));
  }, [id]);  

  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 bg-dark'>
          <h2 className='text-center mt-4' style={{ color: "cyan" }}>ACTUALIZAR CLIENTE</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <input type="text" placeholder='Nombre ...' name='nombre' className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </div>
              <div className='form-group mb-2'>
                <input type="text" placeholder='Apellido ...' name='apellido' className='form-control' value={apellido} onChange={(e) => setApellido(e.target.value)} />
              </div>
              <div className='form-group mb-2'>
                <input type="text" placeholder='email@mail.com' name='email' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div style={{ display: "flex" }}>
                <button className='btn btn-success mt-4' onClick={(e) => updateClient(e)} style={{ width: "-webkit-fill-available" }}>ACTUALIZAR</button>&nbsp;&nbsp;
                <Link to='/clients' className='btn btn-danger mt-4' style={{ width: "-webkit-fill-available" }}>CANCELAR</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateClient;