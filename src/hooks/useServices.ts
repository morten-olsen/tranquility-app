import { useContext } from 'react';
import ServiceContext from 'contexts/ServiceContext';

const useServices = () => {
  const services = useContext(ServiceContext);
  return services;
};

export default useServices;
