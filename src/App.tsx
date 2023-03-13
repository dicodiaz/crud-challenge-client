import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routes from './data/routes-data';

const App: FC = () => (
  <>
    <Header />
    <Container className="bg-dark min-vh-100 py-5" as="main" fluid>
      <Routes>
        {routes.map((route) => {
          const { path, Component } = route;
          return <Route key={path} path={path} element={<Component />} />;
        })}
      </Routes>
    </Container>
  </>
);

export default App;
