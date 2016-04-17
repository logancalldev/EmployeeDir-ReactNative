import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  StatusBar,
  NavigatorIOS
} from 'react-native';

const List = require('./components/List');
const styles = require('./styles.js');

StatusBar.setBarStyle('light-content');

class EmployeeDirectory extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        titleTextColor="#fff"
        barTintColor="#00529c"
        tintColor="#fff"
        initialRoute={{
          title: 'Employee Directory',
          component: List,
      }}/>
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
