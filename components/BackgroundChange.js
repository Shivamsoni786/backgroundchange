import React, {useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {images, icons, FONTS, COLORS, SIZES} from '../constants';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  getAustralia,
  getSouthAfrica,
  getUK,
  getUSA,
} from './CountryApiController';

const BackgroundChange = () => {
  const [openCountry, setOpenCountry] = useState(false);
  const [valueCountry, setValueCountry] = useState(null);
  const [country, setCountry] = useState([
    {label: 'USA', value: '1'},
    {label: 'UK', value: '2'},
    {label: 'Australia', value: '3'},
    {label: 'South Africa', value: '4'},
  ]);

  const [openTime, setOpenTime] = useState(false);
  const [valueTime, setValueTime] = useState(null);
  const [time, setTime] = useState([
    {label: '10:00 AM (Morinig)', value: '1'},
    {label: '6:00 PM (Evening)', value: '2'},
  ]);

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

  return (
    <ImageBackground
      source={images.night1}
      style={{height: '100%', width: '100%'}}>
      <View
        style={{
          padding: 25,
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: COLORS.black,
            paddingHorizontal: 25,
            paddingVertical: 15,
          }}>
          <Text style={{...FONTS.h2, color: COLORS.white}}>
            {timeZone.datetime}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: COLORS.black,
            padding: 25,
            marginBottom: 150,
          }}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.green,
              marginBottom: 30,
              textAlign: 'center',
            }}>
            Select Country & Time
          </Text>
          <DropDownPicker
            style={{
              borderWidth: null,
              borderRadius: null,
              backgroundColor: COLORS.white,
              minHeight: 40,
            }}
            dropDownContainerStyle={{
              backgroundColor: COLORS.white,
              borderWidth: null,
              borderRadius: null,
            }}
            textStyle={{
              fontSize: 16,
              color: COLORS.black,
            }}
            placeholder="Select country"
            open={openCountry}
            value={valueCountry}
            items={country}
            setOpen={setOpenCountry}
            setValue={setValueCountry}
            setItems={setCountry}
            zIndex={5000}
            zIndexInverse={2000}
            onSelectItem={value => {
              setVal(value.value);
              fetchCountryTime();
            }}
          />
          <DropDownPicker
            style={{
              marginTop: 15,
              borderWidth: null,
              borderRadius: null,
              backgroundColor: COLORS.white,
              minHeight: 40,
            }}
            dropDownContainerStyle={{
              marginTop: 15,
              backgroundColor: COLORS.white,
              borderWidth: null,
              borderRadius: null,
            }}
            textStyle={{
              fontSize: 16,
              color: COLORS.black,
            }}
            placeholder="Select time"
            open={openTime}
            value={valueTime}
            items={time}
            setOpen={setOpenTime}
            setValue={setValueTime}
            setItems={setTime}
            zIndex={2000}
            zIndexInverse={1000}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default BackgroundChange;
