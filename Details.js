import React from "react";
import {
  View,
  Text,
  FlatList,

} from "react-native";
import { Card, Title, Paragraph, Button, Searchbar } from 'react-native-paper';
import axios from 'react-native-axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Details extends React.Component {

  state = {
    items: [],
    isLoading: false,
    
  }

  officeDelid(cl) {
    this.setState({ isLoading: true })
    if(!this.items){
      let _URL = 'http://cr16661-django-2.tw1.ru/api'
      axios.delete(`${_URL}/${cl}`).finally(() => this.getData())
    }
    
  }

  

  renderRow = ({ item }) => {

    return (
      <View style={{
        pading: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(212, 105, 236, 0.88)',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
      }}>
        
        <Card>
          <Card.Content >
            <Title style={{ textAlign: 'center' }}>{item.name} {item.last_name}</Title>
            <View style={{
              flex: 1,
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 15, borderBottomWidth: 1,
              borderBottomColor: '#ababab'
            }}>
              <Paragraph style={{ fontSize: 16 }} >{item.usluga} </Paragraph>
              <Paragraph></Paragraph>
              <Paragraph style={{ fontSize: 17 }}>цена: {item.cena} </Paragraph>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
              <Text>{item.data}</Text>
              <Text></Text>
              <Text>{item.my_h} : {item.my_m}</Text>
            </View>
          </Card.Content>
          <View style={{
            height: 40,
            width: 150,
            margin: 20,
            left: 100
          }}>
            <Button
              icon="close"
              color="rgba(219, 123, 123, 0.93)"
              contentStyle={{
                backgroundColor: 'rgba(28, 8, 8, 0.93)',
                textAlign: 'center',
                borderRadius: 15,
              }}
              
              onPress={() => this.officeDelid(item.id)}
            >
              Удалить</Button>
          </View>
        </Card>

      </View>
    )
  }

  componentDidMount() {
    this.getData()
  }


  getData = () => {
    this.setState({ isLoading: true })
    if (!this.items){
      let _URL = ''
    this.setState({ isLoading: true })
    axios.get(`${_URL}`)
      .then(res => {
        this.setState({ items: res.data })
      }).finally(() => this.setState({ isLoading: false }))
    }
  }


  serachUser = (textSearch) => {
    this.setState({
      items: this.state.items.filter(i => i.name.toLowerCase().includes(textSearch.toLowerCase()) || 
      i.data.toLowerCase().includes(textSearch.toLowerCase()) )
    })
    this.setState({font:true})
  }

 
 
  render() {

    let a = (this.state.items.reduce((a, b) => a = a + b.cena, 0))

    return (

      <View style={{ flex: 1, marginTop: 30 }}>  
      <Text style={{textAlign: 'center', fontSize:19}}>Сума: {a}</Text>
      <View
          style={{ alignSelf: 'flex-end',textAlign: "center", marginTop: -30 }}
        >
          <Icon.Button
            backgroundColor='rgba(255, 255, 255, 0)'
            color={'rgba(148, 82, 255, 0.5)'}
            size={30}
            name="menu"
            onPress={() => this.props.navigation.openDrawer()}
          >
          </Icon.Button>
          </View>
      <Searchbar
      placeholder="поиск -имя -дата"
      clearAccessibilityLabel='clear'
      iconColor = 'red'
      onChangeText={text => {this.serachUser(text)}}     
      />
       <FlatList
          data={this.state.items}
          renderItem={this.renderRow}
          refreshing={this.state.isLoading}
          onRefresh={this.getData}
          keyExtractor={(i, k) => k.toString()}

        />
      </View>


    )
  }
}


