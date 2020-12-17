import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCarListAction} from '../../store/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function CarsList() {
  const history = useHistory();

  const dispatch = useDispatch();
  const cars = useSelector(store => store.carReducers.cars);
  const error = useSelector(store => store.carReducers.error);

  const handleClick = () => history.push('');

  useEffect(() => {
    dispatch(getCarListAction());
  }, [dispatch]);

  return (
    <div>
      <List className="section">
        {cars && !error && cars.map(car => (
          <ListItem key={car.plate}>{car.model} {car.color}</ListItem>
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

export default CarsList;
