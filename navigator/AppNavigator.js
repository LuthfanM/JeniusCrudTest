import App from '../App';
import * as React from 'react';
import NewConScreen from '../screens/NewConScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from "../helpers/stores";

const Stack = createStackNavigator(
);

function AppNavigator() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
      initialRouteName="App">
        <Stack.Screen name="App" component={App} initialParams={{ dataKey: "None" }}/>
        <Stack.Screen name="NewConScreen" component={NewConScreen} initialParams={{ dataTransfer: "None" }}/>
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

export default AppNavigator;