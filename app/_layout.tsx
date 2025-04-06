import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, useSegments } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useCallback } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';
import { View, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { store } from '../store';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Enable DevTools in development
if (__DEV__) {
  if (Platform.OS === 'android') {
    require('react-native').LogBox.ignoreLogs(['Remote debugger']);
  }
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const segments = useSegments();
  const colorScheme = useColorScheme();

  const [fontsLoaded, fontError] = useFonts({
    // ... your fonts
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setIsReady(true);
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (isReady) {
      checkToken();
    }
  }, [isReady]);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('token', token);
      if (token) {
        // If we have a token, redirect to home
        router.replace('/(home)/home');
      } else {
        // If no token, redirect to login
        router.replace('/(auth)/login');
      }
    } catch (error) {
      console.error('Error checking token:', error);
      router.replace('/(auth)/login');
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
          <Stack>
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </View>
      </ThemeProvider>
    </Provider>
  );
}
