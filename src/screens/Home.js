import React ,{Component} from 'react';
import {
  View,
  Text,
  Button
}from 'react-native';

export default class  Home extends Component {
  // static navigationOptions = {
  //   title:'Trang chu'
  // }

  render(){
    return(
      <View style={{flex:1 , justifyContent:'center', alignItems:'center'}}>
      <Text >HOME</Text>
      <Button
      onPress={()=> { this.props.navigation.navigate('ManHinh_Detail',{thamso:'NguyenDangHung'}) } }
      title="Next"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />

      <Button
      onPress={()=> { this.props.navigation.navigate('DrawerOpen');} }
      title="Open Menu"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
  onPressNext(){
    console.log("abc");
  }
}
