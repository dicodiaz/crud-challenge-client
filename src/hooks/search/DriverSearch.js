import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInputHook } from '../commons/input-hook';
import { searchDriverAction } from '../../store/actions';
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
  const driver = useSelector(store => store.driverReducers.driver);
  const error = useSelector(store => store.driverReducers.driverError);

  const { value: idValue, bind: idBind } = useInputHook('');

  const handleSubmit = (event) => {
    const data = {
      id: idValue,
    };
    dispatch(searchDriverAction(data));
  };

  const handleClick = (page) => history.push(page);

  return (
    <div>
      <h2>Buscar conductor</h2>
      <form className={classes.root}>
        <TextField
          required
          id="id"
          label="ID"
          variant="outlined"
          size="small"
          onChange={event => idBind.onChange(event)} />
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
      {driver && !error &&
        <p>
          Driver#{driver.id}<br />
          Name: {driver.firstname}<br />
          Last name: {driver.lastname}<br />
          ID: {driver.driver_id}<br />
          Age: {driver.age}<br />
          Username: {driver.username}<br />
          Phone: {driver.phone}<br />
        </p>
      }
    </div>
  );
}

export default DriversList;
