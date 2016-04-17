'use strict';
var React = require('react-native');
const Person = require("./Person");
const styles = require('../styles.js')
const { View, TouchableHighlight, Text, Component, Platform } = React;

class ListItem extends React.Component {
	rowPressed(personInfo) {
	    this.props.navigator.push({
	      passProps: {personInfo : personInfo},
				// IOS - IOSNavigator component SPECIFIC
	      title: personInfo.firstName + " " + personInfo.lastName,
	      component: Person,
				// ANDROID - Navigator component SPECIFIC
				id: 'Person',
	      name: personInfo.firstName + " " + personInfo.lastName
	    });
  }
  render() {
    return (
      <TouchableHighlight onPress={() => this.rowPressed(this.props.personInfo)}>
        <View style={styles.li}>
          <Text style={styles.liText}>{this.props.personInfo.lastName}, {this.props.personInfo.firstName}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListItem;
