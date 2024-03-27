import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import AuthNavigationRoutes from './Screen/AuthNavigationRoutes';

export default function App() {

  // Mockup logic mechanism
  const isLoggedIn = false;
  if(!isLoggedIn){
    return (
      <PaperProvider>
        <AuthNavigationRoutes/>
      </PaperProvider>
    );
  } else{
    return (
      <PaperProvider>
        <DrawerNavigationRoutes/>
      </PaperProvider>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
