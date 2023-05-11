import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Button, Linking, SafeAreaView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Navbar from './src/components/navbar/Navbar';
import Header from './src/components/header/Header';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [page, setPage] = useState("home");

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(Entypo.font);
        await Font.loadAsync(MaterialIcons.font);
        await Font.loadAsync({
          PolyFont: require("./assets/fonts/polyfont-medium.ttf"),
          PolyFontBold: require("./assets/fonts/polyfont-heavy.ttf"),
          Downtempo: require("./assets/fonts/Downtempo-Medium.ttf"),
          DowntempoLight: require("./assets/fonts/Downtempo-Light.ttf"),
          DowntempoBold: require("./assets/fonts/Downtempo-Bold.ttf"),
          Calibri: require("./assets/fonts/calibri-regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: "space-between" }}
      onLayout={onLayoutRootView}>
      <Header pageSetter={setPage}></Header>

      <SafeAreaView style={{flex: 1, paddingVertical: 10}}>
        <Text>L'appli officielle de ton BDE préféré !</Text>
      </SafeAreaView>

      <Navbar current={page} pageSetter={setPage}></Navbar>
    </SafeAreaView>
  );
}