const React = require('react-native')
const {StyleSheet, Dimensions} = React
const constants = {
  actionColor: '#24CE84',
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
  loveBlue: "#00529c"
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  navAndroid: {
    height: 55,
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: constants.loveBlue,
  },
  navTitleAndroidCenter: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    color: "#fff",
    fontSize: 18,
    marginTop: 15
  },
  navTitleAndroidLeft: {
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    color: "#fff",
    fontSize: 18,
    marginTop: 15,
    marginLeft: 15
  },
  containerAndroid: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginTop: 55
  },
  personli: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listview: {
    flex: 1,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  liLink: {
    fontSize: 16,
    color: constants.loveBlue
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
})

module.exports = styles
module.exports.constants = constants;
