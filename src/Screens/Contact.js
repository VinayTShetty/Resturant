import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';


const IMAGES = {
  image1: require('../Screens/pizza.jpg')
};

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, name: "John Doe",   position:"CTO",               image:IMAGES.image1},
        {id:2, name: "Clark Man",  position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar6.png"} ,
        {id:3, name: "Jaden Boor", position:"Front-end dev",     image:"https://bootdey.com/img/Content/avatar/avatar5.png"} ,
        {id:4, name: "Srick Tree", position:"Backend-end dev",   image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:5, name: "John Doe",   position:"Creative designer", image:"https://bootdey.com/img/Content/avatar/avatar3.png"} ,
        {id:6, name: "John Doe",   position:"Manager",           image:"https://bootdey.com/img/Content/avatar/avatar2.png"} ,
        {id:8, name: "John Doe",   position:"IOS dev",           image:"https://bootdey.com/img/Content/avatar/avatar1.png"} ,
        {id:9, name: "John Doe",   position:"Web dev",           image:"https://bootdey.com/img/Content/avatar/avatar4.png"} ,
        {id:11, name: "John Doe",   position:"Analyst",           image:"https://bootdey.com/img/Content/avatar/avatar7.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Alert.alert(item.name)
  }

  

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={1}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                <Image 
                 
                
                style={styles.userImage}
                 source={item.image}
                 
                 />
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.position}>{item.position}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>Detials</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:5,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 900,
      height: 10,
    },
    shadowOpacity: 0.90,
    shadowRadius: 9.49,
    elevation: 20,

    marginVertical: 25,
    backgroundColor:"white",
    flexBasis: '96%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 150,
    width: 300,
 
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  }
});    