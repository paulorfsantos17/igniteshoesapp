import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';

import { THEME } from './src/theme';
import { Loading } from './src/components/Loading';
import {OneSignal, type NotificationClickEvent}  from 'react-native-onesignal'
import { CartContextProvider } from './src/contexts/CartContext';
import { useEffect } from 'react';

OneSignal.initialize("2ff339fe-b059-4bba-8439-e83a816c3d91")
OneSignal.Notifications.requestPermission(true)

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });


  
  useEffect(() =>  {
    const handleNotificationClick = (event: NotificationClickEvent) =>  {
      const  {actionId}  = event.result
      switch (actionId) { 
        case "1":
          console.log("Aceitou")
          break
        case "2":
          console.log("Rejeitou")
          break
        default: 
          console.log("Default case")  
          break
      }
    }

    OneSignal.Notifications.addEventListener("click", handleNotificationClick)

    return () => OneSignal.Notifications.removeEventListener("click", handleNotificationClick)
  },[])
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}