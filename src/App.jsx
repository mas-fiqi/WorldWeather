import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Settings from './screens/Settings';
import Profile from './screens/Profile';
import Tema from './components/tema';
import Huruf from './components/huruf';
import Nada from './components/nada';
import Pilihan from './components/pilihan';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';

            } else if (route.name === 'Tema') {
              iconName = 'format-color-fill';
            } else if (route.name === 'Huruf') {
              iconName = 'alphabetical';
            } else if (route.name === 'Nada') {
              iconName = 'music';
            } else if (route.name === 'Pilihan') {
              iconName = 'star';
            } else if (route.name === 'Settings') {
            iconName = 'cog';
          } else if (route.name === 'Profile') {
            iconName = 'account';
          }

            return (
              <MaterialCommunityIcons
                name={iconName}
                color={color}
                size={size}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Tema" component={Tema} />
        <Tab.Screen name="Huruf" component={Huruf} />
        <Tab.Screen name="Nada" component={Nada} />
        <Tab.Screen name="Pilihan" component={Pilihan} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
