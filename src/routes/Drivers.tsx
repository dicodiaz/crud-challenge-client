import { FC, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Driver from '../components/Driver';
import SearchBar from '../components/SearchBar';
import { useAppSelector } from '../hooks/redux-hooks';
import useInput from '../hooks/use-input';
import { selectDrivers } from '../redux/slices/drivers-slice';

const Drivers: FC = () => {
  const drivers = useAppSelector(selectDrivers);
  const [filteredDrivers, setFilteredDrivers] = useState(drivers);
  const { value: searchBarValue, onChange: onSearchBarChange, clear: clearSearchBar } = useInput();

  const filterDrivers = () =>
    setFilteredDrivers(
      drivers.filter((driver) => {
        const { firstname, lastname } = driver;
        return `${firstname} ${lastname}`.toLowerCase().startsWith(searchBarValue.toLowerCase());
      }),
    );

  useEffect(() => {
    filterDrivers();
  }, [drivers]);

  useEffect(() => {
    const timeoutId = setTimeout(filterDrivers, 500);

    return () => clearTimeout(timeoutId);
  }, [searchBarValue]);

  return (
    <>
      <SearchBar value={searchBarValue} onChange={onSearchBarChange} clear={clearSearchBar} />
      <Row className="mt-3 px-5 gy-3" xs={1} sm={2} lg={3} xl={4} xxl={5}>
        {filteredDrivers.map((driver) => (
          <Driver key={driver.id} data={driver} />
        ))}
      </Row>
    </>
  );
};

export default Drivers;
