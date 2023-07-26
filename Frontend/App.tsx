import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackType = {
  SignUp: undefined;
  Login: undefined;
  Dashboard: undefined;
};

export default function App() {
  const RootStack = createNativeStackNavigator<RootStackType>();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Login">
        <RootStack.Screen name="SignUp" component={SignUp} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Dashboard" component={Dashboard} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
