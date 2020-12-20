import React from 'react';
import {useHistory} from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function Home() {
  const history = useHistory();
  const handleClick = (page) => {
    history.push(page);
  }

  return (
    <div>
      <h1>Proyecto Final</h1>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/list')}>Lista de conductores</Button>
        <Button onClick={() => handleClick('/customers/list')}>Lista de clientes</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/list')}>Lista de vehículos</Button>
        <Button onClick={() => handleClick('/rides/list')}>Lista de viajes</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/create')}>Crear conductor</Button>
        <Button onClick={() => handleClick('/customers/create')}>Crear cliente</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/create')}>Crear vehículo</Button>
        <Button onClick={() => handleClick('/rides/create')}>Crear viaje</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/search')}>Buscar conductor</Button>
        <Button onClick={() => handleClick('/customers/search')}>Buscar cliente</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/search')}>Buscar vehículo</Button>
        <Button onClick={() => handleClick('/rides/search')}>Buscar viaje</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/edit')}>Editar conductor</Button>
        <Button onClick={() => handleClick('/customers/edit')}>Editar cliente</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/edit')}>Editar vehículo</Button>
        <Button onClick={() => handleClick('/rides/edit')}>Editar viaje</Button>
      </ButtonGroup>
      <br/><br/>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/delete')}>Eliminar conductor</Button>
        <Button onClick={() => handleClick('/customers/delete')}>Eliminar cliente</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/delete')}>Eliminar vehículo</Button>
        <Button onClick={() => handleClick('/rides/delete')}>Eliminar viaje</Button>
      </ButtonGroup>
    </div>
  );
}

export default Home;
