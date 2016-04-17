'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  AlertIOS,
  Platform,
  TouchableOpacity,
  Navigator
} from 'react-native';

const Firebase = require('firebase');
const ListItem = require('./ListItem');
const NavigationBarRouteMapper = require('./NavigationBarRouteMapper');
const styles = require('../styles.js');

class List extends Component {
  _renderItem(personInfo) {
    return (
      <ListItem personInfo={personInfo} navigator={this.props.navigator}/>
    );
  }
  constructor(props) {
    super(props);
    this.personsInfoRef = new Firebase("https://glowing-torch-8671.firebaseio.com/");
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }
  listenForItems(personsInfoRef) {
    personsInfoRef.on('value', (snap) => {
      // get children as an array
      var persons = [];
      snap.forEach((child) => {
        persons.push({
          firstName: child.val().firstName,
          lastName: child.val().lastName,
          ext: child.val().ext,
          cell: child.val().cell,
          email: child.val().email,
          _key: child.key()
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(persons)
      });
    });
  }
  renderScene(route, navigator) {
    return (
      <View style={ ( Platform.OS === 'ios' ) ? styles.container : styles.containerAndroid }>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          style={styles.listview}
          navigator={this.props.navigator}/>
      </View>
    );
  }
  componentDidMount() {
    this.listenForItems(this.personsInfoRef);
  }
  render() {
    if( Platform.OS === 'ios' ) {
      return this.renderScene();
    } else if ( Platform.OS === 'android' ) {
      return (
        <Navigator
          renderScene={this.renderScene.bind(this)}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={styles.navAndroid}
                routeMapper={NavigationBarRouteMapper.index} />
          } />
      );
    }
  }
}

module.exports = List;
