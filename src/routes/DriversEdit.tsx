import { FC, FormEvent } from 'react';
import { Button, Col, FloatingLabel, Form, Row, Toast } from 'react-bootstrap';
import { useParams } from 'react-router';
import { DriverType } from '../data/drivers-data';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import useBoolean from '../hooks/use-boolean';
import { editDriver, selectDrivers } from '../redux/slices/drivers-slice';
import { PartialExceptForId } from '../utils/custom-types';

const DriversEdit: FC = () => {
  const dispatch = useAppDispatch();
  const { driverId } = useParams();
  const { value: validated, setTrue: setValidatedTrue, setFalse: setValidatedFalse } = useBoolean();
  const { value: showToast, setTrue: setShowToastTrue, setFalse: setShowToastFalse } = useBoolean();
  const drivers = useAppSelector(selectDrivers);

  const relevantDriver = drivers.find((driver) => driver.id === driverId);

  if (!relevantDriver) {
    return <p className="pt-5 lead text-white text-center">Invalid driver ID</p>;
  }

  const { firstname, lastname, age, username, phone, password } = relevantDriver;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const emptyDriver: PartialExceptForId<DriverType> = {
        id: '',
      };
      const updatedDriver = [...form.elements].reduce((updatedDriver, formElement) => {
        if (formElement instanceof HTMLInputElement) {
          return { ...updatedDriver, [formElement.id]: formElement.value };
        }
        return updatedDriver;
      }, emptyDriver);
      dispatch(editDriver(updatedDriver));
      form.reset();
      setValidatedFalse();
      setShowToastTrue();
    } else {
      setValidatedTrue();
    }
  };

  return (
    <Row className="pt-5 justify-content-center">
      <Col xs={11} sm={9} md={7} lg={6} xl={5} xxl={4}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <legend className="mb-3 text-white">Edit driver</legend>
          <FloatingLabel label="ID" controlId="id">
            <Form.Control type="text" defaultValue={`${driverId}`} disabled />
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="First name" controlId="firstname">
            <Form.Control type="text" defaultValue={`${firstname}`} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a first name
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Last name" controlId="lastname">
            <Form.Control type="text" defaultValue={`${lastname}`} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a last name</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Username" controlId="username">
            <Form.Control type="text" defaultValue={`${username}`} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a username</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Age" controlId="age">
            <Form.Control type="number" defaultValue={`${age}`} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a valid age</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Phone number" controlId="phone">
            <Form.Control type="number" defaultValue={`${phone}`} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Password" controlId="password">
            <Form.Control type="password" defaultValue={`${password}`} required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid password
            </Form.Control.Feedback>
          </FloatingLabel>
          <Button className="mt-3" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Toast
          className="mt-3 text-white w-100"
          bg="success"
          show={showToast}
          onClose={setShowToastFalse}
          delay={3000}
          autohide
        >
          <Toast.Body className="lead mb-0" as="p">
            Driver updated
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default DriversEdit;
