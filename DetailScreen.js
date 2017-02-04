'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  Alert,
  View,
  Image,
  DrawerLayoutAndroid,
  ToolbarAndroid,
  ToastAndroid,
  BackAndroid,
  TouchableOpacity,
  Dimensions,
} = React;

var Drawer = require('react-native-drawer');
var StoriesList = require('./StoriesList');
var ThemesList = require('./ThemesList');
var SwipeRefreshLayoutAndroid = require('./SwipeRereshLayout');
var Dimensions = require('Dimensions');

var DRAWER_REF = 'drawer';
var DRAWER_WIDTH_LEFT = 56;
var toolbarActions = [
 {title:'weibo',icon:require('./image/icon_help.png'),show:'always'},
];

var DetailScreen = React.createClass({
  getInitialState: function() {
    return ({
      theme: null,
    });
  },
  onSelectTheme: function(theme) {
    this.refs[DRAWER_REF].closeDrawer();
    this.setState({theme: theme});
  },
  _renderNavigationView: function() {
    return (
      <ThemesList
        onSelectItem={this.onSelectTheme}
      />
    );
  },
  onActionSelected: function(position) {
    if(position === 0) {
        Alert.alert(
           `温馨提示`,
           '展示对应时间内的碳排放量详情。',
           [
               {text: '确定', onPress: () => console.log('OK Pressed')},
           ]
       );
    }

  },
  render: function() {
    var title = '衣服的碳排放量';
    var mockData = [
        {
            time:'2016-01-09',
            data: 2.56
        },{
            time:'2016-11-09',
            data: 0.56
        },{
              time:'2016-07-09',
              data: 2.6
        },{
              time:'2016-12-09',
              data: 1.3
        },{
              time:'2016-01-09',
              data: 2.56
          },{
              time:'2016-11-09',
              data: 0.56
          },{
                time:'2016-07-09',
                data: 2.6
          },{
                time:'2016-12-09',
                data: 1.3
          }
    ];
    var tableDOM = [];
    mockData.forEach((item, index) => {
      if(index % 2) {
        tableDOM.push(
          <View style={[styles.rowStyle,styles.rowEven]}>
             <Text style={styles.rowCell}>{item.time}</Text>
             <Text style={styles.rowCell}>{item.data}</Text>
           </View>
        );
      } else {
        tableDOM.push(
            <View style={[styles.rowStyle,styles.rowOdd]}>
               <Text style={styles.rowCell}>{item.time}</Text>
               <Text style={styles.rowCell}>{item.data}</Text>
             </View>
          );
      }

    });
    return (
      <DrawerLayoutAndroid
        ref={DRAWER_REF}
        drawerWidth={Dimensions.get('window').width - DRAWER_WIDTH_LEFT}
        keyboardDismissMode="on-drag"
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this._renderNavigationView}>
        <View style={styles.container}>
          <ToolbarAndroid
            title={title}
            titleColor="white"
            style={styles.toolbar}
            actions={toolbarActions}
            navIcon={require('./image/icon_back.png')}
            onIconClicked={() => {
               const {navigator} = this.props;
               if (navigator) {
                 navigator.pop();
               }
            }}
            onActionSelected={this.onActionSelected}
           />
             <View style={styles.titleStyle}>
               <Text style={styles.titleCell}>日期</Text>
               <Text style={styles.titleCell}>碳排放量</Text>
             </View>
             {tableDOM}
        </View>
      </DrawerLayoutAndroid>

    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  toolbar: {
    backgroundColor: '#238E23',
    height: 56,
  },
  titleStyle: {
    flexDirection: 'row',
    height: 56,
    backgroundColor: '#70B597',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 15
  },
  titleCell: {
    flex: 1,
  },
  rowStyle: {
    flexDirection: 'row',
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    paddingLeft: 18
  },
  rowOdd: {
    backgroundColor: '#fff',
  },
  rowEven: {
    backgroundColor: '#DDEDED',
  },
  rowCell: {
    flex: 1,
  }

});

module.exports = DetailScreen;
