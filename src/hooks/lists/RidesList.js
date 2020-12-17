import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getRideListAction} from '../../store/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function RidesList() {
  const history = useHistory();

  const dispatch = useDispatch();
  const rides = useSelector(store => store.rideReducers.rides);
  const error = useSelector(store => store.rideReducers.error);

  const handleClick = () => history.push('');

  useEffect(() => {
    dispatch(getRideListAction());
  }, [dispatch]);

  return (
    <div>
      <List className="section">
        {rides && !error && rides.map(ride => (
          <ListItem key={ride.driver_id}>{ride.first_point} {ride.target_point}</ListItem>
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

export default RidesList;
