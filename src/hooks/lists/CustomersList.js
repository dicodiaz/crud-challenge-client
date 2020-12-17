import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getCustomerListAction} from '../../store/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

function CustomersList() {
  const history = useHistory();

  const dispatch = useDispatch();
  const customers = useSelector(store => store.customerReducers.customers);
  const error = useSelector(store => store.customerReducers.error);

  const handleClick = () => history.push('');

  useEffect(() => {
    dispatch(getCustomerListAction());
  }, [dispatch]);

  return (
    <div>
      <List className="section">
        {customers && !error && customers.map(customer => (
          <ListItem key={customer.customerId}>{customer.firstname} {customer.lastname}</ListItem>
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

export default CustomersList;
