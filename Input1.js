
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  ImageBackground
} from "react-native";
import TimePicker from 'react-native-simple-time-picker'
import axios from 'react-native-axios'
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class Input1 extends React.Component {


  state = {
    name: '',
    last_name: '',
    usluga: '',
    my_h: 0,
    my_m: 0,
    data: '',
    cena: 0
  };

componentDidMount() {
  
}



  handleLast = (text) => {
    this.setState({ last_name: text });
  };
  handlename = (text) => {
    this.setState({ name: text });
  };
  handleUsluga = (text) => {
    this.setState({ usluga: text });
  };

  onTextChanged(text) {
    this.setState({ cena: +text })
  }

  SingUp = (last_name, name, usluga, my_h, my_m, data, cena) => {
    axios
      .post('', {
        name: name,
        last_name: last_name,
        usluga: usluga,
        my_h: my_h,
        my_m: my_m,
        data: data,
        cena,
      })

      .then((response) => {
        
      })
      .catch((err) => {
        throw err;
      });
      Alert.alert('Клиент додали до БД')
      this.props.navigation.navigate('Home')
  };

  render() {


    return (
      <ImageBackground
        source={require('./assets/fonts/in.jpg')}
        style={style.container}
      >
        <View
          style={{ alignSelf: 'flex-end',textAlign: "center", marginTop: 40 }}
        >
          <Icon.Button
            backgroundColor='rgba(255, 255, 255, 0)'
            color={'#ffffff'}
            size={30}
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          >
          </Icon.Button>
        </View>
        <View >
          <ScrollView style={{
            marginTop: 50, marginLeft: 5, marginRight: 5, backgroundColor: 'rgba(0, 0, 0, 0.06)',
            height: 90 + "%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,

            },
            shadowOpacity: 0.22,
            shadowRadius: 2.14,

            elevation: 5,
          }}>

            <View style={{
              marginTop: 10,
              width: 300,
              marginLeft: 50,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: 'rgba(148, 82, 255, 0.5)',
              borderBottomWidth: 1
            }}>
              <TimePicker
                selectedHours={'my_h'}
                selectedMinutes={'my_m'}
                onChange={(my_h, my_m) => this.setState({ my_h: my_h, my_m: my_m })}

              />
            </View>

            <DatePicker
              style={{ width: 350, padding: 10, marginTop: 30, color: 'blue' }}
              date={this.state.data}
              mode="date"
              placeholder="Календарь"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2050-12-01"
              androidMode='spinner'
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 5,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 60,
                  width: 200,
                  fontSize: 20,
                  borderRadius: 10,
                  borderColor: 'rgba(148, 82, 255, 0.5)',
                  color: 'white'
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={(data) => { this.setState({ data: data }) }}
            />

            <View>
              <TextInput
                style={style.inputs}
                placeholder="Имя"
                placeholderTextColor="#ffffff"
                onChangeText={this.handlename}
              />
            </View>

            <View>
              <TextInput
                style={style.inputs}
                placeholder="Фамилия"
                placeholderTextColor="#ffffff"
                onChangeText={this.handleLast}
              />
            </View>
            <View>
              <TextInput
                style={style.inputs}
                placeholder="Услуга"
                placeholderTextColor="#ffffff"
                onChangeText={this.handleUsluga}
              />

              <TextInput
                style={style.inputs}
                placeholder="Цена"
                placeholderTextColor="#ffffff"
                type="cena"
                keyboardType='number-pad'
                onChangeText={(text) => this.onTextChanged(Number(text))}
                value={this.state.cena}
              />
            </View>

            <TouchableOpacity

              style={style.submitButton}
              onPress={() =>
                this.SingUp(
                  this.state.name,
                  this.state.last_name,
                  this.state.usluga,
                  this.state.my_h,
                  this.state.my_m,
                  this.state.data,
                  this.state.cena
                )
              }
            >
              <Text style={style.textButton}>Записать</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
const style = StyleSheet.create({
  inputs: {
    marginTop: 50,
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: 'rgba(148, 82, 255, 0.5)',
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(148, 82, 255, 0.5)',
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: 'rgba(148, 82, 255, 0.5)',
    borderRadius: 15,
  },
  textButton: {
    width: 180,
    padding: 10,
    fontSize: 16,
    marginTop: 10 + "%",
    marginRight: "auto",
    fontWeight: "bold",
    borderRadius: 30,
    color: "#000000",
    textAlign: "center",
    backgroundColor: 'rgba(148, 82, 255, 0.5)',
  },
  submitButton: {
    width: 180,
    padding: 10,
    marginTop: 1 + "%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 30,

  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 25,
    resizeMode: 'cover',
    justifyContent: "center"
  },

});






