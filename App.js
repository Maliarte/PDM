import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Peixe1 from './screens/Peixe1';
import Peixe2 from './screens/Peixe2';
import Peixe3 from './screens/Peixe3';
import Peixe4 from './screens/Peixe4';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Peixe1" component={Peixe1} options={{ headerShown: false }} /> 
        <Stack.Screen name="Peixe2" component={Peixe2} options={{ headerShown: false }} />
        <Stack.Screen name="Peixe3" component={Peixe3} options={{ headerShown: false }} />
        <Stack.Screen name="Peixe4" component={Peixe4} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
