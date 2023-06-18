import { FC, FormEvent } from 'react';
import { Button, Col, FloatingLabel, Form, Row, Toast } from 'react-bootstrap';
import { CustomerType } from '../data/customers-data';
import { useAppDispatch } from '../hooks/redux-hooks';
import useBoolean from '../hooks/use-boolean';
import { createCustomer } from '../redux/slices/customers-slice';
import { OmitId } from '../utils/custom-types';

const CustomersCreate: FC = () => {
  const dispatch = useAppDispatch();
  const { value: validated, setTrue: setValidatedTrue, setFalse: setValidatedFalse } = useBoolean();
  const { value: showToast, setTrue: setShowToastTrue, setFalse: setShowToastFalse } = useBoolean();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const emptyCustomer: OmitId<CustomerType> = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        phone: '',
        password: '',
      };
      const newCustomer = [...form.elements].reduce((newCustomer, formElement) => {
        if (formElement instanceof HTMLInputElement) {
          return { ...newCustomer, [formElement.id]: formElement.value };
        }
        return newCustomer;
      }, emptyCustomer);
      dispatch(createCustomer(newCustomer));
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
          <legend className="mb-3 text-white">Create new customer</legend>
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
          <FloatingLabel className="mt-3" label="Phone number" controlId="phone">
            <Form.Control type="number" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel className="mt-3" label="Email address" controlId="email">
            <Form.Control type="email" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address
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
            Customer created
          </Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};

export default CustomersCreate;
