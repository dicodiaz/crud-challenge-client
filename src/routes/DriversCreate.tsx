import { FC, FormEvent } from 'react';
import { Button, Col, FloatingLabel, Form, Row, Toast } from 'react-bootstrap';
import { DriverType } from '../data/drivers-data';
import { useAppDispatch } from '../hooks/redux-hooks';
import useBoolean from '../hooks/use-boolean';
import { createDriver } from '../redux/slices/drivers-slice';
import { OmitId } from '../utils/custom-types';

const DriversCreate: FC = () => {
  const dispatch = useAppDispatch();
  const { value: validated, setTrue: setValidatedTrue, setFalse: setValidatedFalse } = useBoolean();
  const { value: showToast, setTrue: setShowToastTrue, setFalse: setShowToastFalse } = useBoolean();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const emptyDriver: OmitId<DriverType> = {
        firstname: '',
        lastname: '',
        age: 0,
        username: '',
        phone: '',
        password: '',
      };
      const newDriver = [...form.elements].reduce((newDriver, formElement) => {
        if (formElement instanceof HTMLInputElement) {
          return { ...newDriver, [formElement.id]: formElement.value };
        }
        return newDriver;
      }, emptyDriver);
      dispatch(createDriver(newDriver));
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
          <legend className="mb-3 text-white">Create new driver</legend>
          <FloatingLabel label="First name" controlId="firstname">
            <Form.Control type="text" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a first name
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Last name" controlId="lastname">
            <Form.Control type="text" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a last name</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Username" controlId="username">
            <Form.Control type="text" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a username</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Age" controlId="age">
            <Form.Control type="number" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a valid age</Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Phone number" controlId="phone">
            <Form.Control type="number" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Password" controlId="password">
            <Form.Control type="password" required />
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
            Driver created
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default DriversCreate;
