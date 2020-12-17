import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './DriverCreate.css';
import {useInputHook} from '../commons/input-hook';
import {setDriverAction} from '../../store/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function DriversList() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {value: firstNameValue, bind: firstNameBind} = useInputHook('');
  const {value: lastNameValue, bind: lastNameBind} = useInputHook('');
  const {value: driverIdValue, bind: driverIdBind} = useInputHook('');
  const {value: ageValue, bind: ageBind} = useInputHook('');
  const {value: usernameValue, bind: usernameBind} = useInputHook('');

  const handleSubmit = (event) => {
    const data = {
      firstNameValue,
      lastNameValue,
      driverIdValue,
      ageValue,
      usernameValue
    };

    dispatch(setDriverAction(data));
  };

  const handleClick = () => history.push('');

  return (
    <form>
      <TextField
        className={`elements-input`}
        id="firstName"
        label="Nombre"
        onChange={event => firstNameBind.onChange(event)} />
      <br/>

      <TextField
        className={`elements-input`}
        id="lastname"
        label="Apellido"
        variant="filled"
        onChange={event => lastNameBind.onChange(event)} />
      <br/>

      <TextField
        className={`elements-input`}
        id="customerId"
        label="Identificacion"
        variant="outlined"
        onChange={event => driverIdBind.onChange(event)} />
      <br/>

      <TextField
        className={`elements-input`}
        id="email"
        label="Email"
        variant="standard"
        onChange={event => ageBind.onChange(event)} />
      <br/>

      <TextField
        className={`elements-input`}
        id="username"
        label="Username"
        variant="outlined"
        onChange={event => usernameBind.onChange(event)} />
      <br/>

      <Button
        className={`elements-input`}
        variant="contained"
        color="primary"
        onClick={ (event) => handleSubmit(event)}>
        Enviar
      </Button>
      <br/>
      <Button
        className={`elements-input`}
        variant="contained"
        color="secondary"
        onClick={ (event) => handleClick()}>
        Regresar
      </Button>
    </form>
  );
}

export default DriversList;
