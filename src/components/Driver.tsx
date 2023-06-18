import { FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { DriverType } from '../data/drivers-data';
import { useAppDispatch } from '../hooks/redux-hooks';
import useCounter from '../hooks/use-counter';
import { deleteDriver } from '../redux/slices/drivers-slice';

type DriverProps = {
  data: DriverType;
};

const Driver: FC<DriverProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id, firstname, lastname, age, username, phone } = data;
  const { count: deleteCount, increment: deleteIncrement, reset: deleteReset } = useCounter();

  const handleEditClick = () => {
    navigate(`/drivers/edit/${id}`);
  };

  const handleDeleteClick = () => {
    if (deleteCount === 0) {
      deleteIncrement();
    }
    if (deleteCount === 1) {
      dispatch(deleteDriver(id));
    }
  };

  const handleDeleteBlur = () => {
    deleteReset();
  };

  return (
    <Col>
      <Card bg="secondary" text="white" border="light">
        <Card.Body>
          <Card.Title className="text-overflow">
            {firstname} {lastname}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-overflow">{username}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-overflow">{age} years old</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-overflow">{phone}</Card.Subtitle>
          <Row className="justify-content-evenly" xs="auto">
            <Col>
              <Button size="sm" variant="info" onClick={handleEditClick}>
                Edit
              </Button>
            </Col>
            <Col>
              <Button
                size="sm"
                variant="danger"
                onClick={handleDeleteClick}
                onBlur={handleDeleteBlur}
              >
                {deleteCount === 0 && 'Delete'}
                {deleteCount === 1 && 'Are you sure?'}
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Driver;
