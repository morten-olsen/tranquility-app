import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReposProvider } from './contexts/Repos';
import { ServiceProvider } from './contexts/ServiceContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <ReposProvider>
          <ServiceProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </ServiceProvider>
        </ReposProvider>
      </SafeAreaProvider>
    );
  }
}
