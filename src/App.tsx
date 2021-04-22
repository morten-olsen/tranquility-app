import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, KeyboardAvoidingView } from 'react-native';
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
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <SafeAreaProvider>
          <ReposProvider>
            <ServiceProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </ServiceProvider>
          </ReposProvider>
        </SafeAreaProvider>
      </KeyboardAvoidingView>
    );
  }
}
