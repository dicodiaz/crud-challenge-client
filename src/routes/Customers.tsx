import { FC, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Customer from '../components/Customer';
import SearchBar from '../components/SearchBar';
import { useAppSelector } from '../hooks/redux-hooks';
import useInput from '../hooks/use-input';
import { selectCustomers } from '../redux/slices/customers-slice';

const Customers: FC = () => {
  const customers = useAppSelector(selectCustomers);
  const [filteredCustomers, setFilteredCustomers] = useState(customers);
  const { value: searchBarValue, onChange: onSearchBarChange, clear: clearSearchBar } = useInput();

  const filterCustomers = () =>
    setFilteredCustomers(
      customers.filter((customer) => {
        const { firstname, lastname } = customer;
        return `${firstname} ${lastname}`.toLowerCase().startsWith(searchBarValue.toLowerCase());
      }),
    );

  useEffect(() => {
    filterCustomers();
  }, [customers]);

  useEffect(() => {
    const timeoutId = setTimeout(filterCustomers, 500);

    return () => clearTimeout(timeoutId);
  }, [searchBarValue]);

  return (
    <>
      <SearchBar value={searchBarValue} onChange={onSearchBarChange} clear={clearSearchBar} />
      <Row className="mt-3 px-5 gy-3" xs={1} sm={2} lg={3} xl={4} xxl={5}>
        {filteredCustomers.map((customer) => (
          <Customer key={customer.id} data={customer} />
        ))}
      </Row>
    </>
  );
};

export default Customers;
