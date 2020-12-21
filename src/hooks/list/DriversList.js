import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverListAction } from '../../store/actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'max-content',
    background: 'inherit',
    color: 'inherit',
    textAlign: 'center'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: 'center'
  },
  center: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'max-content'
  }
}));

function DriversList() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const drivers = useSelector(store => store.driverReducers.drivers);
  const error = useSelector(store => store.driverReducers.driversError);

  const handleClick = (page) => history.push(page);

  useEffect(() => {
    dispatch(getDriverListAction());
  }, [dispatch]);

  return (
    <div className={classes.center}>
      <h2>Lista de conductores</h2>
      <List>
        {drivers && !error && drivers.map(driver => (
          <ListItem key={driver.id}>
            <Accordion className={classes.root}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" >
                <Typography className={classes.heading}>Driver#{driver.id}: {driver.firstname} {driver.lastname}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.center}>
                <Typography>
                  ID: {driver.driver_id}<br />
                  Age: {driver.age}<br />
                  Username: {driver.username}<br />
                  Phone: {driver.phone}<br />
                  {/* <Button onClick={() => handleClick(driver.driver_id)}>Edit</Button> */}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}
        <span>{error}</span>
        <hr />
      </List>
      <br />
      <ButtonGroup color="primary" aria-label="outlined primary button group">
        <Button onClick={() => handleClick('')}>Home</Button>
      </ButtonGroup>
    </div>
  );
}

export default DriversList;
