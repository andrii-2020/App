
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer, } from "@react-navigation/native"
import Details from './Details';
import Input1 from './Input1'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function Home({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <ImageBackground
        source={require('./assets/fonts/in.jpg')}
        style={styles.container}
      >
        <View
          style={{ alignSelf: 'flex-end', textAlign: "center", }}
        >
          <Icon.Button
            backgroundColor='rgba(255, 255, 255, 0)'
            color={'#ffffff'}
            size={30}
            name="menu"
            onPress={() => navigation.openDrawer()}
          >

          </Icon.Button>
        </View >

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>HAPPY NAILS KASIA  </Text>
          <View>
          <Image
            style={{ 
              width: 80,
              height: 80,}}
            source={require('./assets/fonts/heart.png')}
          />
          </View>
        </View>
      </ImageBackground>


    </View>

  )

}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginTop: 25,
    resizeMode: 'cover',


  },
  bottomDrawerSection: {
    borderRadius: 20,
    backgroundColor: 'rgba(148, 82, 255, 0.5)',
    width: 250,
    marginTop: 16,
  },
  text: {
    color: 'white',
    fontSize: 25,
  }
});


import { createDrawerNavigator, } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();


import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

      <DrawerItem
        style={styles.bottomDrawerSection}
        drawerContentOptions={{
          itemStyle: { marginVertical: 30 },
        }}

        icon={({ color, size }) => (
          <Icon
            name="home-outline"
            color={'#000000'}
            size={size}
          />
        )}
        label={() => <Text style={{ color: '#000000' }}>{'Главная'}</Text>}

        onPress={() => { props.navigation.navigate('Home') }} />

      <DrawerItem
        style={styles.bottomDrawerSection}
        icon={({ color, size }) => (
          <Icon
            name="send"
            color={'#000000'}
            size={size}
          />
        )}
        label="Добавить клиента"
        onPress={() => { props.navigation.navigate('Input1') }} />

      <DrawerItem
        style={styles.bottomDrawerSection}

        icon={({ color, size }) => (
          <Icon
            name="account-details"
            color={'#000000'}
            size={size}
          />
        )}
        label={() => <Text style={{ color: '#000000' }}>{'Просмотр записей'}</Text>}
        onPress={() => { props.navigation.navigate('Detail') }} />

    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerStyle={{
        backgroundColor: '#ffffff',
        borderTopRightRadius: 20,

      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Input1" component={Input1} />
      <Drawer.Screen name="Detail" component={Details} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (

    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
