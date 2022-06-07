import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
const User: React.FC = ({ navigation }: any) => {
  //access_key=67579492159a1332be2171323dc08001&query=india
  //http://api.weatherstack.com/current?access_key=67579492159a1332be2171323dc08001&query=india
  const [userInput, setUserInput] = useState<string>('');

  const handleChange = (data: string) => {
    setUserInput(data.toLowerCase());
  };

  const handlePress = () => {
    navigation.navigate('CountryInfo', { userInput: userInput.trim() });
    console.log(userInput);
  };
  return (
    <View style={{ padding: 10 }}>
      <Text style={{ textAlign: 'center', padding: 10 }}>
        {'User'.toUpperCase()}
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'black',
          padding: 10,
          marginBottom: 20,
        }}
      >
        <TextInput placeholder='Enter country' onChangeText={handleChange} />
      </View>
      <View style={{ padding: 0 }}>
        <Button title='Get Country Details' onPress={handlePress} />
      </View>
    </View>
  );
};
export default User;
