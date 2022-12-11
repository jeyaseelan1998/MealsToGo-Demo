import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

import { Provider as PaperProvider } from 'react-native-paper';

import RestaurantsScreen from './src/screens/RestaurantsScreen';

export default function App() {
  return (
    <PaperProvider>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </PaperProvider>
  );
}
