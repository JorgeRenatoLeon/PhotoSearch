import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';

import store from './redux/store/configureStore';

import Home from './screens/Home/Home';
import Search from './screens/Search/Search';
import Map from './screens/Map/Map';
import Profile from './screens/Profile/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Jua: require('./assets/fonts/Jua-Regular.ttf'),
    KalamBold: require('./assets/fonts/Kalam-Bold.ttf'),
    KalamLight: require('./assets/fonts/Kalam-Light.ttf'),
    Kalam: require('./assets/fonts/Kalam-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
          }}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Map" component={Map} />
              <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
