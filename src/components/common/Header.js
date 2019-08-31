import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
  const {viewStyle, textStyle} = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 5,
    shadowColor:'#000',
    shadowOffset:{width:0,height:0},
    shadowOpacity:0.2,
    elevation:2,
    position:"relative",
  },
  textStyle: {
    fontSize: 30,
  },
});

export {Header};
