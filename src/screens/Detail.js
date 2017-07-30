import React ,{Component} from 'react';
import {
  View,
  Text,
  Button
}from 'react-native';

export default class  Detail extends Component {
  render(){
    return(
      <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
        <Text >DETAIL</Text>
        <Button
        onPress={()=> { this.props.navigation.goBack()} }
        title="Back"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
        <Text>{this.props.navigation.state.params.thamso} </Text>
      </View>
    );
  }
}
