import React, { createContext, useMemo } from 'react';
import { Container } from 'typedi';
import Services from 'services/Services';

const ServiceContext = createContext<Services>(undefined as any);

const ServiceProvider: React.FC = ({ children }) => {
  const services = useMemo(() => Container.get(Services), []);
  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
};

export { ServiceProvider };

export default ServiceContext;
