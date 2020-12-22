import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInputHook } from '../commons/input-hook';
import { createDriverAction } from '../../store/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
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
}));

function DriversList() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const driver = useSelector(store => store.driverReducers.driverCreated);
  const error = useSelector(store => store.driverReducers.driverCreatedError);

  const { value: driverIdValue, bind: driverIdBind } = useInputHook('');
  const { value: firstNameValue, bind: firstNameBind } = useInputHook('');
  const { value: lastNameValue, bind: lastNameBind } = useInputHook('');
  const { value: ageValue, bind: ageBind } = useInputHook('');
  const { value: usernameValue, bind: usernameBind } = useInputHook('');
  const { value: phoneValue, bind: phoneBind } = useInputHook('');
  const { value: passwordValue, bind: passwordBind } = useInputHook('');

  const handleSubmit = (event) => {
    const data = {
      driver_id: driverIdValue,
      firstname: firstNameValue,
      lastname: lastNameValue,
      age: ageValue,
      username: usernameValue,
      phone: phoneValue,
      password: passwordValue,
    };
    dispatch(createDriverAction(data));
  };

  const handleClick = (page) => history.push(page);

  return (
    <div>
      <h2>Registrar conductor</h2>
      <form className={classes.root}>
        <TextField
          required
          id="driver_id"
          label="Driver ID"
          variant="outlined"
          size="small"
          onChange={event => driverIdBind.onChange(event)} />
        <br />
        <TextField
          required
          id="firstname"
          label="Nombre"
          variant="outlined"
          size="small"
          onChange={event => firstNameBind.onChange(event)} />
        <br />
        <TextField
          required
          id="lastname"
          label="Apellido"
          variant="outlined"
          size="small"
          onChange={event => lastNameBind.onChange(event)} />
        <br />
        <TextField
          required
          id="age"
          label="Edad"
          variant="outlined"
          size="small"
          type="number"
          onChange={event => ageBind.onChange(event)} />
        <br />
        <TextField
          required
          id="username"
          label="Usuario"
          variant="outlined"
          size="small"
          onChange={event => usernameBind.onChange(event)} />
        <br />
        <TextField
          required
          id="phone"
          label="Teléfono"
          variant="outlined"
          size="small"
          onChange={event => phoneBind.onChange(event)} />
        <br />
        <TextField
          required
          id="password"
          label="Contraseña"
          variant="outlined"
          size="small"
          type="password"
          onChange={event => passwordBind.onChange(event)} />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={(event) => handleSubmit(event)}>
          Enviar
      </Button>
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={(event) => handleClick('')}>
          Regresar
      </Button>
      </form>
      <br />
      {Object.keys(driver).length !== 0 && !error &&
        <p style={{color: "green"}}>
          Conductor creado exitosamente: <br />
          ID: {driver.driver_id}<br />
          Nombre: {driver.firstname}<br />
          Apellido: {driver.lastname}<br />
          Edad: {driver.age}<br />
          Usuario: {driver.username}<br />
          Teléfono: {driver.phone}<br />
        </p>
      }
    </div>
  );
}

export default DriversList;
