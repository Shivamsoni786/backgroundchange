import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {images, icons, FONTS, COLORS, SIZES} from '../constants';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  getAustralia,
  getSouthAfrica,
  getUK,
  getUSA,
} from './CountryApiController';

const BackgroundChange = () => {
  // const [openCountry, setOpenCountry] = useState(false);
  // const [valueCountry, setValueCountry] = useState(null);
  // const [country, setCountry] = useState([
  //   {label: 'USA', value: '1'},
  //   {label: 'UK', value: '2'},
  //   {label: 'Australia', value: '3'},
  //   {label: 'South Africa', value: '4'},
  // ]);

  // const [openTime, setOpenTime] = useState(false);
  // const [valueTime, setValueTime] = useState(null);
  // const [time, setTime] = useState([
  //   {label: '10:00 AM (Morinig)', value: '1'},
  //   {label: '6:00 PM (Evening)', value: '2'},
  // ]);

  const [val, setVal] = useState('');
  const [timeZone, setTimeZone] = useState('');

  const fetchCountryTime = async () => {
    if (val == 1) {
      const response = await getUSA();
      console.log(response);
      setTimeZone(response);
    }
    if (val == 2) {
      const response = await getUK();
      console.log(response);
      setTimeZone(response);
    }
    if (val == 3) {
      const response = await getAustralia();
      console.log(response);
      setTimeZone(response);
    }
    if (val == 4) {
      const response = await getSouthAfrica();
      console.log(response);
      setTimeZone(response);
    }
  };

  const [countryModal, setCountryModal] = React.useState(false);
  const arr = [
    {id: 1, name: 'USA'},
    {id: 2, name: 'UK'},
    {id: 3, name: 'Australia'},
    {id: 4, name: 'South Africa'},
  ];
  const [country, setCountry] = React.useState(arr);

  function renderCountryModal() {
    return (
      <Modal visible={countryModal} transparent={true} animationType={'slide'}>
        <TouchableWithoutFeedback>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <ScrollView></ScrollView>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <ImageBackground
      source={images.night1}
      style={{height: '100%', width: '100%'}}>
      <View
        style={{
          padding: 25,
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            padding: 20,
            alignItems: 'center',
            width: '70%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text style={{...FONTS.h2, color: COLORS.black}}>UK</Text>
            <Text style={{...FONTS.h2, color: COLORS.black}}>10:00 AM</Text>
            <Text style={{...FONTS.h3, color: COLORS.black}}>04/12/2022</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{marginTop: 30, backgroundColor: COLORS.white, padding: 10}}
          onPress={() => setCountryModal(true)}>
          <Text style={{...FONTS.h3, color: COLORS.black}}>Select Country</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default BackgroundChange;
