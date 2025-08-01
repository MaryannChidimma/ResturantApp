import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import { ActivityIndicator, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        setUserToken(token);
      } catch (err) {
        console.error('Error reading token', err);
      } finally {
        setIsLoading(false);
      }
    };

    checkToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userToken ? (
         <Stack.Screen name="Menu" component={MenuScreen} />
        ) : (
          <>
            {/* <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Menu" component={MenuScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
