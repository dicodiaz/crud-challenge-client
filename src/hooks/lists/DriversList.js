import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getDriverListAction} from '../../store/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function DriversList() {
  const history = useHistory();

  const dispatch = useDispatch();
  const drivers = useSelector(store => store.driverReducers.drivers);
  const error = useSelector(store => store.driverReducers.driversError);

  const handleClick = () => history.push('');

  useEffect(() => {
    dispatch(getDriverListAction());
  }, [dispatch]);

  return (
    <div>
      <List className="section">
        {drivers && !error && drivers.map(driver => (
          <ListItem key={driver.driverId}>{driver.firstname} {driver.lastname}</ListItem>
        ))}
        <span>{error}</span>
        <hr/>
      </List>
      <br />
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => handleClick()}>Home</Button>
      </ButtonGroup>
    </div>
  );
}

export default DriversList;
