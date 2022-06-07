import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import User from '../src/components/User';
import CountryInfo from '../src/components/CountryInfo';
const { Navigator, Screen } = createNativeStackNavigator();
const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name='User' component={User} />
        <Screen name='CountryInfo' component={CountryInfo} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
