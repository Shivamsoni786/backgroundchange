import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';
import {COLORS, images} from './constants';
var moment = require('moment-timezone');

const App = () => {
  const arr = [
    {id: 1, name: 'usa'},
    {id: 2, name: 'uk'},
    {id: 3, name: 'australia'},
    {id: 4, name: 'south africa'},
  ];

  const [country, setCountry] = React.useState(arr);
  const [countryData, setCountryData] = React.useState('');
  const [countryModal, setCountryModal] = React.useState(false);

  const getData = timezone => {
    const date = moment().tz(timezone);

    let tz = date.tz();
    let hours = date.hours();
    let minutes = date.minutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');

    const formatedDate = `${date.date().toString().padStart(2, '0')}/${(
      date.month() + 1
    )
      .toString()
      .padStart(2, '0')}/${date.year()}`;
    let formatedTime =
      hours.toString().padStart(2, '0') + ':' + minutes + ' ' + ampm;

    setCountryData({
      date: formatedDate,
      time: formatedTime,
      ampm: ampm,
      timezone: tz,
    });
  };

  React.useEffect(() => {
    getData('Asia/Kolkata');
  }, []);

  function renderModal() {
    return (
      <Modal animationType="slide" transparent={true} visible={countryModal}>
        <TouchableWithoutFeedback onPress={() => setCountryModal(false)}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.transparentBlack5,
            }}>
            <View
              style={{
                position: 'absolute',
                width: '70%',
                padding: 20,
                paddingHorizontal: 30,
                borderRadius: 20,
                backgroundColor: COLORS.white,
              }}>
              {country.map(obj => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      obj.id == 1
                        ? getData('America/Toronto')
                        : obj.id == 2
                        ? getData('Europe/London')
                        : obj.id == 3
                        ? getData('Australia/Melbourne')
                        : obj.id == 4
                        ? getData('Africa/Tripoli')
                        : null;

                      setCountryModal(false);
                    }}
                    key={obj.id}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.darkGray,
                        textTransform: 'capitalize',
                      }}>
                      {obj.name}
                    </Text>
                    <View
                      style={{
                        borderBottomWidth: 1,
                        marginVertical: 8,
                        borderColor: COLORS.gray3,
                      }}></View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }

  return (
    <ImageBackground
      source={
        countryData.ampm === 'AM'
          ? images.day1
          : countryData.item == '10:00 AM'
          ? images.day2
          : countryData.time == '6:00 PM'
          ? images.night1
          : countryData.ampm == 'PM'
          ? images.night2
          : null
      }
      style={{height: '100%'}}>
      <View style={{padding: 25, alignItems: 'center'}}>
        <View
          style={{
            padding: 15,
            backgroundColor: COLORS.white,
            width: '80%',
            marginTop: 50,
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <Text
            style={{fontSize: 35, color: COLORS.darkGray, fontWeight: '500'}}>
            {countryData.time}
          </Text>
          <Text style={{fontSize: 15, color: COLORS.black, fontWeight: '300'}}>
            {countryData.date}
          </Text>
          <Text
            style={{
              fontSize: 25,
              color: COLORS.black,
              fontWeight: '300',
              marginTop: 5,
            }}>
            {countryData.timezone}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setCountryModal(true)}
          style={{
            backgroundColor: COLORS.white,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 50,
            borderRadius: 5,
          }}>
          <Text style={{fontSize: 15, fontWeight: '500', color: COLORS.black}}>
            Select Country
          </Text>
        </TouchableOpacity>
      </View>

      {renderModal()}
    </ImageBackground>
  );
};

export default App;
