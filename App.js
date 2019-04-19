import React from 'react';
import {TouchableHighlight,Alert,TouchableOpacity,TouchableNativeFeedback,TouchableWithoutFeedback,Platform,
  Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  _onPressButton() {
    Alert.alert('You pressed button')
  }
  _onLongPressButton(){
    Alert.alert('You pressed long button')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.c1}>Welcome Chaudhry</Text>
      <Button
      onPress = {this._onPressButton}
      title="Press Me"
      />
      <TouchableHighlight
      color="#2ecc71"
      underlayColor="#f1c40f"
      onPress={this._onPressButton}
      onLongPress={this._onLongPressButton}
      style = {styles.b1}>
        <View style= {styles.c1}>
          <Text>Highlight Button</Text>
        </View>
      </TouchableHighlight>
      <TouchableOpacity
      color="#2ecc71"
      underlayColor="#f1c40f"
      onPress={this._onPressButton}
      onLongPress={this._onLongPressButton}
      style = {styles.b1}>
        <View style= {styles.c1}>
          <Text>Opacity Button</Text>
        </View>
      </TouchableOpacity>
      <TouchableNativeFeedback
      color="#2ecc71"
      underlayColor="#f1c40f"
      onPress={this._onPressButton}
      onLongPress={this._onLongPressButton}
      style = {styles.b1}>
        <View style= {styles.c1}>
          <Text>Native Feedback Button</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  c1:{
    color:'red',
  },
  b1:{
    color:'green',
    justifyContent:'center',
    marginTop:20,
    backgroundColor:'#8e44ad',
    
  }
});
