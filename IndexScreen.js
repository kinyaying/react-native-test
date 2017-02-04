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
 {title:'weibo',icon:require('./image/icon_search.png'),show:'always'},
 {title:'blog',icon:require('./image/icon_scan.png'),show:'always'},
];

var IndexScreen = React.createClass({
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
  onRefresh: function() {
    this.onSelectTheme(this.state.theme);
  },
  onRefreshFinish: function() {
    this.swipeRefreshLayout && this.swipeRefreshLayout.finishRefresh();
  },
  render: function() {
    var title = '合肥';
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
            logo={require('./image/icon_map.png')}
            onIconClicked={() => this.refs[DRAWER_REF].openDrawer()}
            onActionSelected={this.onActionSelected} />
            <Image source={require('./image/index_bg.jpg')} style={styles.imgStyle}></Image>
            <View style={styles.colStyle}>
                <TouchableOpacity style={styles.iconStyle} onPress={
                   ()=> {
                       Alert.alert(
                           `你点击了按钮`,
                           'Hello World！',
                           [
                               {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                               {text: '确定', onPress: () => console.log('OK Pressed')},
                           ]
                       )
                   }
                }>
                    <Text style={{ color: 'red', fontFamily:'iconfont',fontSize: 30 }}>&#xe69e;</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconStyle} onPress={
                   ()=> {
                       Alert.alert(
                           `你点击了按钮`,
                           'Hello World！',
                           [
                               {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                               {text: '确定', onPress: () => console.log('OK Pressed')},
                           ]
                       )
                   }
                }>
                        <Text style={styles.txtStyle}>&#xe780;</Text>
                </TouchableOpacity>
            </View>
        </View>
      </DrawerLayoutAndroid>

    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#blue',
  },
  toolbar: {
    backgroundColor: '#238E23',
    height: 56,
  },
  imgStyle: {
    backgroundColor:'green',
    width:Dimensions.get('window').width,
    height:150
  },
  colStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  iconStyle: {
    flex: 1,
    height: 100,
    justifyContent:'center',
    alignItems:'center'
  },
  txtStyle: {
    color: '#fff',
  }
});

module.exports = IndexScreen;
