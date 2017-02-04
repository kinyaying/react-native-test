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

var EditScreen = React.createClass({
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
  onPressCallback: function() {
    Alert.alert(
                               `你点击1111了按钮`,
                               'Hello World！',
                               [
                                   {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                   {text: '确定', onPress: () => console.log('OK Pressed')},
                               ]
                           )
  },
  render: function() {
    var title = '记录碳排放量';
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
                <TouchableOpacity style={[styles.cellStyle,styles.bg1]} onPress={this.onPressCallback}>
                    <Text style={styles.iconStyle}>&#xe69e;</Text>
                    <Text style={styles.txtStyle}>衣服</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cellStyle,styles.bg2]} onPress={this.onPressCallback}>
                    <Text style={styles.iconStyle}>&#xe780;</Text>
                    <Text style={styles.txtStyle}>食品</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.colStyle}>
                <TouchableOpacity style={[styles.cellStyle,styles.bg3]} onPress={this.onPressCallback}>
                    <Text style={styles.iconStyle}>&#xe6d9;</Text>
                    <Text style={styles.txtStyle}>住房</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cellStyle,styles.bg4]} onPress={this.onPressCallback}>
                    <Text style={styles.iconStyle}>&#xe613;</Text>
                    <Text style={styles.txtStyle}>出行</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.colStyle}>
                <TouchableOpacity style={[styles.cellStyle,styles.bg5]} onPress={this.onPressCallback}>
                    <Text style={styles.iconStyle}>&#xe60a;</Text>
                    <Text style={styles.txtStyle}>生活用品</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cellStyle,styles.bg6]} onPress={this.onPressCallback}>
                    <Text style={styles.iconStyle}>&#xe611;</Text>
                    <Text style={styles.txtStyle}>其他</Text>
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
    backgroundColor: 'rgba(0,0,0,0)',
  },
  toolbar: {
    backgroundColor: '#238E23',
    height: 56,
  },
  imgStyle: {
    width:Dimensions.get('window').width,
    height:150
  },
  colStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  cellStyle: {
    flex: 1,
    height: 120,
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
  },
  txtStyle: {
    flex: 2,
    color: '#fff',
    fontSize: 24,
    marginLeft:10,
    fontFamily:'Times'
  },
  iconStyle: {
    color: '#fff',
    fontFamily:'iconfont',
    fontSize: 30,
    flex: 1,
    textAlign: 'right'
  },
  bg1: {
    backgroundColor: '#D5E7A2'
  },
  bg2: {
    backgroundColor: '#B2D061'
  },
  bg3: {
    backgroundColor: '#DCC78E'
  },
  bg4: {
    backgroundColor: '#B5B149'
  },
  bg5: {
      backgroundColor: '#B48454'
    },
  bg6: {
      backgroundColor: '#6A7E3D'
    }
});

module.exports = EditScreen;
