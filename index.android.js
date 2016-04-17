import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Navigator,
  Text,
  TouchableOpacity
} from 'react-native';

const List = require('./components/List');
const Person = require('./components/Person');
const styles = require('./styles.js');

class EmployeeDirectory extends Component {
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>No Route Available</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'List') {
      return (
        <List
          navigator={navigator}/>
      );
    }
    if (routeId === 'Person') {
      return (
        <Person
          navigator={navigator}  {...route.passProps} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);
  }
  render() {
    return (
      <Navigator
        initialRoute={{id: 'List', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }} />
    );
  }
}

// const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
// });

AppRegistry.registerComponent('EmployeeDirectory', () => EmployeeDirectory);
