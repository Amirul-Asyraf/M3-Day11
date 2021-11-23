import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './src/containers/login';
import Register from './src/containers/register';
import Home from './src/containers/home';
import Details from './src/containers/details';
import About from './src/containers/about';
import Contact from './src/containers/contact';
import MovieList from './src/containers/movieList';
import Bag from './src/containers/bag';

import { Provider } from 'react-redux';
import { store, persistor } from './src/store/configureStore'
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav () {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size}) => {
        let iconName;

        if(route.name === 'Home') {
          iconName = focused ? 'md-home-sharp' : 'md-home-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
        } else if (route.name === 'Contact') {
          iconName = focused ? 'phone-portrait-sharp' : 'phone-portrait-outline';
        }

        return <Ionicons name={iconName} size={20} color={color} />
      },

      tabBarActiveTintColor: 'gold',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen 
        name="Home" 
        component={MovieList}
        options={{
          headerTitle: "My Town",
          // tabBarIcon: () => (
          //   <Ionicons name="md-home-outline" size={24} color='black'/>
          //   )
        }}  
      />
      <Tab.Screen name="About" component={About}/>
      <Tab.Screen name="Contact" component={Contact}/>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={{
                // headerShown: false,
                headerStyle: {
                  backgroundColor: 'pink'
                },
                // headerRight: null
              }}
            />

            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen 
              name="TabNav" 
              component={TabNav}
              options={{
                headerShown: false
              }}  
            />
            <Stack.Screen name="Details" component={Details}/>
            <Stack.Screen name="Bag" component={Bag}/>

          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
