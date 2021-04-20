import React, { createContext, useEffect, useState } from 'react';
import { Container } from 'typedi';
import { Connection } from 'typeorm';
import { ActivityIndicator } from 'react-native';
import createConnection from '../data/createConnection';
import Repos from '../data/repos/Repos';

const ReposContext = createContext<Repos>(undefined as any);

const ReposProvider: React.FC = ({ children }) => {
  const [context, setContext] = useState<Repos | undefined>(undefined);

  useEffect(() => {
    let connection: Connection;
    const run = async () => {
      connection = await createConnection();
      Container.set(Connection, connection);
      const repos = Container.get(Repos)
      setContext(repos);
    };

    run();

    return () => {
      if (connection) {
        connection.close();
      }
    };
  }, []);

  if (!context) {
    return <ActivityIndicator />
  }

  return (
    <ReposContext.Provider value={context}>
      {children}
    </ReposContext.Provider>
  );
};

export {
  ReposProvider,
};

export default ReposContext;

