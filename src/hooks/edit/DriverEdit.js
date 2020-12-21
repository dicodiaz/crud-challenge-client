import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInputHook } from '../commons/input-hook';
import { editDriverAction } from '../../store/actions';
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

  const { value: idValue, bind: idBind } = useInputHook('');
  const { value: driverIdValue, bind: driverIdBind } = useInputHook('');
  const { value: firstNameValue, bind: firstNameBind } = useInputHook('');
  const { value: lastNameValue, bind: lastNameBind } = useInputHook('');
  const { value: ageValue, bind: ageBind } = useInputHook('');
  const { value: usernameValue, bind: usernameBind } = useInputHook('');
  const { value: phoneValue, bind: phoneBind } = useInputHook('');
  const { value: passwordValue, bind: passwordBind } = useInputHook('');

  const handleSubmit = (event) => {
    const id = idValue;
    const data = {
      driver_id: driverIdValue,
      firstname: firstNameValue,
      lastname: lastNameValue,
      age: ageValue,
      username: usernameValue,
      phone: phoneValue,
      password: passwordValue,
    };
    dispatch(editDriverAction(id, data));
  };

  const handleClick = (page) => history.push(page);

  return (
    <div>
      <h2>Editar conductor</h2>
      <p>Ingrese sólo los campos que desea editar</p>
      <form className={classes.root}>
      <TextField
          required
          id="id"
          label="ID"
          variant="outlined"
          size="small"
          onChange={event => idBind.onChange(event)} />
        <br />
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
    </div>
  );
}

export default DriversList;
