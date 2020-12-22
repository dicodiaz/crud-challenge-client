import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInputHook } from '../commons/input-hook';
import { searchDriverAction } from '../../store/actions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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
  const drivers = useSelector(store => store.driverReducers.driversFound);
  const error = useSelector(store => store.driverReducers.driversFoundError);

  const { value: idValue, bind: idBind } = useInputHook('');

  const handleSubmit = (event) => {
    const id = idValue;
    dispatch(searchDriverAction(id));
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
      <List>
        {drivers && !error && drivers.map(driver => (
          <ListItem key={driver.id}>
            Driver#{driver.id}<br />
            ID: {driver.driver_id}<br />
            Name: {driver.firstname}<br />
            Last name: {driver.lastname}<br />
            Age: {driver.age}<br />
            Username: {driver.username}<br />
            Phone: {driver.phone}<br />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default DriversList;
