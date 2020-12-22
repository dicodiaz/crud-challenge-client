import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateDriverAction } from '../../store/actions';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useInputHook } from '../commons/input-hook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
      background: 'white',
      border: 'white',
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 20px auto',
    width: '75%',
    height: '200px',
    // border: '3px solid green',
  },
  subcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '50%',
    height: '200px',
    // border: '3px solid green',
  }
}));

function Home() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const { value: customerUsernameValue, bind: customerUsernameBind } = useInputHook('');
  const { value: customerPasswordValue, bind: customerPasswordBind } = useInputHook('');
  const { value: driverUsernameValue, bind: driverUsernameBind } = useInputHook('');
  const { value: driverPasswordValue, bind: driverPasswordBind } = useInputHook('');

  const driver = useSelector(store => store.driverReducers.driverAuthenticated);
  const error = useSelector(store => store.driverReducers.driverAuthenticatedError);

  const handleClick = (page) => history.push(page);

  const handleSubmitCustomer = () => {
    const data = {
      username: customerUsernameValue,
      password: customerPasswordValue,
    }
  };
  const handleSubmitDriver = () => {
    const data = {
      username: driverUsernameValue,
      password: driverPasswordValue,
    }
    dispatch(authenticateDriverAction(data));
  };
  const handleClickCustomerRegister = () => history.push('customers/register');
  const handleClickDriverRegister = () => history.push('drivers/register');

  return (
    <div>
      <h1>Aplicación de viajes</h1>
      <div className={classes.container}>
        <div className={classes.subcontainer}>
          <form className={classes.root}>
            <TextField
              required
              id="customerUsername"
              label="Usuario"
              variant="outlined"
              size="small"
              onChange={event => customerUsernameBind.onChange(event)} />
            <br />
            <TextField
              required
              id="customerPassword"
              label="Contraseña"
              variant="outlined"
              size="small"
              type="password"
              onChange={event => customerPasswordBind.onChange(event)} />
            <br />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleSubmitCustomer()}>
              Ingresar como cliente
            </Button>
            <br />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleClickCustomerRegister()}>
              Registrar como cliente
            </Button>
          </form>
        </div>
        <div className={classes.subcontainer}>
          <form className={classes.root}>
            <TextField
              required
              id="driverUsername"
              label="Usuario"
              variant="outlined"
              size="small"
              onChange={event => driverUsernameBind.onChange(event)} />
            <br />
            <TextField
              required
              id="driverPassword"
              label="Contraseña"
              variant="outlined"
              size="small"
              type="password"
              onChange={event => driverPasswordBind.onChange(event)} />
            <br />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleSubmitDriver()}>
              Ingresar como conductor
            </Button>
            <br />
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleClickDriverRegister()}>
              Registrar como conductor
            </Button>
          </form>
        </div>
      </div>
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/list')}>Lista de conductores</Button>
        <Button onClick={() => handleClick('/customers/list')}>Lista de clientes</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/list')}>Lista de vehículos</Button>
        <Button onClick={() => handleClick('/rides/list')}>Lista de viajes</Button>
      </ButtonGroup>
      <br /><br />
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/create')}>Crear conductor</Button>
        <Button onClick={() => handleClick('/customers/create')}>Crear cliente</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/create')}>Crear vehículo</Button>
        <Button onClick={() => handleClick('/rides/create')}>Crear viaje</Button>
      </ButtonGroup>
      <br /><br />
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/search')}>Buscar conductor</Button>
        <Button onClick={() => handleClick('/customers/search')}>Buscar cliente</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/search')}>Buscar vehículo</Button>
        <Button onClick={() => handleClick('/rides/search')}>Buscar viaje</Button>
      </ButtonGroup>
      <br /><br />
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button variant="contained" onClick={() => handleClick('/drivers/edit')}>Editar conductor</Button>
        <Button onClick={() => handleClick('/customers/edit')}>Editar cliente</Button>
        <Button variant="contained" onClick={() => handleClick('/cars/edit')}>Editar vehículo</Button>
        <Button onClick={() => handleClick('/rides/edit')}>Editar viaje</Button>
      </ButtonGroup>
      <br /><br />
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
