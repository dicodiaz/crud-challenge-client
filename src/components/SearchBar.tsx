import { ChangeEvent, FC } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

type SearchBarProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
};

const SearchBar: FC<SearchBarProps> = ({ value, onChange, clear }) => (
  <Row className="pt-4 align-items-center justify-content-center">
    <Col xs={8} sm={7} md={6} lg={5} xl={4} xxl={3}>
      <FloatingLabel label="Search by name" controlId="searchBar">
        <Form.Control type="text" value={value} onChange={onChange} />
      </FloatingLabel>
    </Col>
    <Col xs="auto">
      <Button size="lg" variant="danger" onClick={clear}>
        Clear
      </Button>
    </Col>
  </Row>
);

export default SearchBar;
