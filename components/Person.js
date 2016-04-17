'use strict';

import React from 'react-native';
var {
  StyleSheet,
  Image,
  View,
  Text,
  Component,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
  Platform
} = React;
const styles = require('../styles.js');
const Communications = require('react-native-communications');
const NavigationBarRouteMapper = require('./NavigationBarRouteMapper');

class Person extends Component {
  renderScene(route, navigator) {
    return (
      <View style={styles.containerAndroid}>
         <TouchableOpacity onPress={() => Communications.email([this.props.personInfo.email],null,null,'','')}>
          <View style={styles.personli}>
            <Text style={styles.liText}>Email: </Text>
            <Text style={styles.liText, styles.liLink}>{this.props.personInfo.email}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Communications.phonecall(this.props.personInfo.cell, true)}>
          <View style={styles.personli}>
            <Text style={styles.liText}>Cell: </Text>
            <Text style={styles.liText, styles.liLink}>{this.props.personInfo.cell}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.personli}>
          <Text style={styles.liText}>Extension: </Text>
          <Text style={styles.liText}>{this.props.personInfo.ext}</Text>
        </View>
      </View>
    );
  }
  render() {
    if (Platform.OS === 'ios') {
      return this.renderScene();
    } else if (Platform.OS === 'android') {
      return (
        <Navigator
            renderScene={this.renderScene.bind(this)}
            navigator={this.props.navigator}
            navigationBar={
              <Navigator.NavigationBar
                style={styles.navAndroid}
                routeMapper={NavigationBarRouteMapper.person(this.props)} />
            } />
      );
    }
  }
}

module.exports = Person;
