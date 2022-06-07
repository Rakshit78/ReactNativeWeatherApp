import { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ActivityIndicator,
  Modal,
  Pressable,
} from 'react-native';
const CountryInfo: React.FC = ({ route }: any) => {
  const [details, setDetails] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [err, seterr] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // getdata();
    getcountryInfo();
  }, [route.params.userInput]);

  const getcountryInfo = async () => {
    try {
      setLoading(true);
      const url = `https://restcountries.com/v3.1/name/${route.params.userInput}`;
      const res = await fetch(url);
      const data = await res.json();
      setDetails(data);
      console.log(data);
      setLoading(false);
    } catch (e) {
      seterr(true);
      console.log(e);
    }
  };
  const getdata = async () => {
    try {
      setLoad(true);
      const url = `http://api.weatherstack.com/current?access_key=67579492159a1332be2171323dc08001&query=india`;
      const res = await fetch(url);
      const data = await res.json();
      setList(data.current);
      console.log(data.current);
      setLoad(false);
    } catch (e) {
      seterr(true);
      console.log(e);
    }
  };
  const handleModal = () => {
    setModal(true);
    getdata();
  };
  if (err) {
    return (
      <View>
        <Text>Something went wrong!!!</Text>
      </View>
    );
  }
  if (loading) {
    return <ActivityIndicator color={'blue'} />;
  }

  return (
    <View
      style={{
        padding: 10,
        flex: 1,
      }}
    >
      <View style={{ elevation: 4 }}>
        <Image
          source={{ uri: details[0]?.flags.png }}
          style={{
            width: '100%',
            height: 200,
            borderRadius: 1,
            marginBottom: 20,
          }}
        />
        <Text style={{ fontSize: 24 }}> Capital:{details[0]?.capital}</Text>
        <Text style={{ fontSize: 24 }}>
          {' '}
          population:{details[0]?.population}
        </Text>
        <Text style={{ fontSize: 24 }}>
          {' '}
          Lat/Lng:{details[0]?.latlng[0]}/{details[0]?.latlng[1]}
        </Text>

        <View style={{ marginTop: 15 }}>
          <Button title='Capital Weather' onPress={handleModal} />
        </View>
      </View>
      <Modal visible={modal}>
        <View
          style={{
            padding: 20,
            margin: 50,
            backgroundColor: '#d5d5d5',
            flex: 1,
            position: 'relative',
          }}
        >
          <Image source={{ uri: list?.weather_icons[0] }} />
          <Text style={{ fontSize: 24 }}>Temperature:{list?.temperature}</Text>

          <Text style={{ fontSize: 24 }}>Wind Speed :{list?.wind_speed}</Text>
          <Text style={{ fontSize: 24 }}>Precip:{list?.precip}</Text>
        </View>
        <View style={{ position: 'absolute', right: 60, top: 60 }}>
          <Pressable onPress={() => setModal(false)}>
            <Text>X</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default CountryInfo;
