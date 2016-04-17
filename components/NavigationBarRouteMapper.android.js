import React, {
  Text,
  TouchableOpacity
} from 'react-native';

const Icon = require('react-native-vector-icons/MaterialIcons');
const styles = require('../styles.js');

const NavigationBarRouteMapper = {
  index: {
    LeftButton(route, navigator, index, navState) {
      return (
        <Text style={styles.navTitleAndroidLeft}>Employee Directory</Text>
      );
    },
    RightButton(route, navigator, index, navState) {
      return null;
    },
    Title(route, navigator, index, navState) {
      return null;
    }
  },
  person: function(props) {
    return {
      LeftButton(route, navigator, index, navState) {
        return (
          <TouchableOpacity>
            <Icon.Button name="arrow-back" size={30} backgroundColor="transparent" iconStyle={{marginTop: 4, marginLeft: 3 }} onPress={() => navigator.parentNavigator.pop()}></Icon.Button>
          </TouchableOpacity>
        );
      },
      RightButton(route, navigator, index, navState) {
        return null;
      },
      Title(route, navigator, index, navState) {
        return (
          <Text style={styles.navTitleAndroidCenter}>{props.personInfo.firstName} {props.personInfo.lastName}</Text>
        );
      }
    };
  }
};

module.exports = NavigationBarRouteMapper;
