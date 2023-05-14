import React, { useCallback, useEffect, useState } from 'react';
import { Text, BackHandler } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

import Navbar from './src/components/navbar/Navbar';
import Header from './src/components/header/Header';

import Accueil from './src/pages/Accueil';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [page, setPage] = useState("home");
  const [pageStack, setStack] = useState(["home"]);

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

  useEffect(() => {
    if (page != pageStack.at(-1)) {
      setStack(pageStack.concat(page));
    }
    if (page == pageStack.at(-2)) {
      setStack(pageStack.slice(0, -1));
    }
  }, [page]);

  BackHandler.addEventListener("hardwareBackPress", () => {
    if (page != "home") {
      setPage(pageStack.at(-2));
      return true;
    }

    BackHandler.exitApp();
    return false;
  });

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
      <Header current={page} pageSetter={setPage}></Header>

      {
        {
          "home": (<Accueil pageSetter={setPage}></Accueil>),
          "calendar": (<Text>EDT</Text>),
          "images": (<Text>Photos</Text>),
          "open-book": (<Text>Annales</Text>),
          "menu": (<Text>Options</Text>),
        }[page]
      }

      <Navbar current={page} pageSetter={setPage}></Navbar>
    </SafeAreaView>
  );
}