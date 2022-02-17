import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameScreen from './components/GameScreen';

function HomeScreen({ navigation }) {
  return (
    // using this button, we can navigate between different screens. In the event, onPress, the button will
    // execute a function which calls navigation.navigate('Details') which specifies the name of the 
    // screen that is being navigated to. navigation is a prop that is passed into every screen component
    // by the navigator. 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go to Game"
        onPress={() => navigation.navigate('Game')}
      />
    </View>
  );
}

// navigate.push addes a new screen with the  of that same component to the stack. This can be utilized in the
// event that you want to add some unique data to the screen when it is being navigated to.
// you can use the navigation.goBack() function to programatically go back to the last route on the stack. It 
// is the equivalent of popping a screen on the stack. 
// popToTop() can be used to pop all the routes from the stack until you get to the first screen you were on.
function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// This contains a Screen and Navigator Component. The Screen component takes in a 
// name and component and the Navigator component contains all the Screens.


const Stack = createNativeStackNavigator(); 

function App() {
  return (
    // You can pass a prop called initalRouteName to specifiy which Screen you would like the app to start on.
    // Screens take in a prop called options as well as name and component. Options specifies some details like
    // the tile
    // A screenOptions prop can be passed to the Navigator to specify a set of options for every screen in that 
    // navigator stack.
    // Additional props can be passed to screens by wrapping the navigator with a context provider (look into once needed)
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Home"}}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;