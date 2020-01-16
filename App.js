
import React, { Component } from 'react';
import { View, Text, StyleSheet, Share, TextInput, TouchableOpacity, } from 'react-native';

export default class Myapp extends Component<{}> {
  constructor() {
    super();
    this.state = {
      inputValue: '',
    };
  }
  ShareMessage = () => {
   
    Share.share({
      message: this.state.inputValue.toString(),
    })
    
    .then(result => console.log(result))
    .catch(errorMsg => console.log(errorMsg));
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Enter Text to Share"
          style={styles.TextInputStyle}
          onChangeText={TextInputText => {
            this.setState({ inputValue: TextInputText });
          }}
        />
        <TouchableOpacity
          onPress={this.ShareMessage}
          activeOpacity={0.5}
          style={styles.button}>
          <Text style={styles.TextStyle}>Share this Text</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
    padding: 40,
  },
  TextInputStyle: {
    borderWidth: 1,
    borderColor: '#009688',
    width: '100%',
    height: 40,
    textAlign: 'center',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    width: '100%',
    backgroundColor: '#646464',
  },
  TextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});