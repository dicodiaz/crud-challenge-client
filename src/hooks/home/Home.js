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
      <h2>Home</h2>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/list')}> Lista de conductores</Button>
        {/* <Button onClick={() => handleClick('/drivers/create')}>Crear conductor</Button> */}
        <Button onClick={() => handleClick('/customers/list')}> Lista de clientes</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/list')}> Lista de vehículos</Button>
        <Button onClick={() => handleClick('/rides/list')}> Lista de viajes</Button>
      </ButtonGroup>
    </div>
  );
}

export default Home;
