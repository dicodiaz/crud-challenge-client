import { FC } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CustomerType } from '../data/customers-data';
import { useAppDispatch } from '../hooks/redux-hooks';
import useCounter from '../hooks/use-counter';
import { deleteCustomer } from '../redux/slices/customers-slice';

type CustomerProps = {
  data: CustomerType;
};

const Customer: FC<CustomerProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id, firstname, lastname, username, email, phone } = data;
  const { count: deleteCount, increment: deleteIncrement, reset: deleteReset } = useCounter();

  const handleEditClick = () => {
    navigate(`/customers/edit/${id}`);
  };

  const handleDeleteClick = () => {
    if (deleteCount === 0) {
      deleteIncrement();
    }
    if (deleteCount === 1) {
      dispatch(deleteCustomer(id));
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
          <Card.Subtitle className="mb-2 text-overflow">{email}</Card.Subtitle>
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

export default Customer;
