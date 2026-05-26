//////////////////////////////////////////////////////////////////////////////////////////
// Imports
//////////////////////////////////////////////////////////////////////////////////////////

import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';

//////////////////////////////////////////////////////////////////////////////////////////
// Load Resource Hook
//////////////////////////////////////////////////////////////////////////////////////////

export function useLoadResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync()

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'hyope': require('../assets/fonts/hyope.ttf'),
        });

        // Load Images  
        await Asset.fromModule(require('../assets/rules.png')).downloadAsync()
        await Asset.fromModule(require('../assets/circle.png')).downloadAsync()
        await Asset.fromModule(require('../assets/cross.png')).downloadAsync()
      } catch (e) {
        // Hook to error reporting service if required
        console.warn(e);
      } finally {
        setLoadingComplete(true)
        SplashScreen.hideAsync()
      }
    }

    loadResourcesAndDataAsync()
  }, [])

  return isLoadingComplete
}
