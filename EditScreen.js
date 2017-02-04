'use strict';

var React = require('react-native');
var {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TextInput,
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
  onActionSelected: function(position) {
    if(position === 0) {
        Alert.alert(
           `温馨提示`,
           '请记录您的碳排放量。',
           [
               {text: '确定', onPress: () => console.log('OK Pressed')},
           ]
       );
    }

  },
  onSubmitClick: function() {
    Alert.alert(
       `提交`,
       '提交成功',
       [
           {text: '确定', onPress: () => console.log('OK Pressed')},
       ]
    );
  },
  defaultData: {
      category: {
          name: '分类',
          txtHide: '',
          ispassword: false,
      },
      number: {
          name: '数量',
          txtHide: '请输入数量',
          ispassword: false,
      },
      date: {
          name: '日期',
          txtHide: '2017-01-02',
          ispassword: false,
      }

  },
  render: function() {
    var title = '记录碳排放量';
    var {category, number, date } = this.defaultData;
    return (
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
             <Text style={styles.txtTip}>请记录您的碳排放量，低碳生活每一天^_^。</Text>

          <View style={styles.btnWrap}>
             <View style={styles.txtBorder}>
                 <View style={styles.txtLeft}>
                     <Text style={styles.txtInner}>{category.name}</Text>
                     <Text style={styles.iconStyle}>&#xe64a;</Text>
                 </View>
                 <TextInput
                     underlineColorAndroid = {'transparent'}
                     style={styles.textInput}
                     multiline={false}
                     placeholder={category.txtHide}
                     password={category.ispassword}
                     onChangeText={(text) => {
                         this.setState({
                             categoryValue: text
                         })
                     }}
                     value={this.state.categoryValue}
                 />
             </View>
             <View style={styles.txtBorder}>
                 <Text style={styles.txtName}>{number.name}</Text>
                 <TextInput
                     underlineColorAndroid = {'transparent'}
                     style={styles.textInput}
                     multiline={false}
                     placeholder={number.txtHide}
                     password={number.ispassword}
                     onChangeText={(text) => {
                         this.setState({
                             numberValue: text
                         })
                     }}
                     value={this.state.numberValue}
                 />
             </View>
             <View style={styles.txtBorder}>
                  <Text style={styles.txtName}>{date.name}</Text>
                  <TextInput
                      underlineColorAndroid = {'transparent'}
                      style={styles.textInput}
                      multiline={false}
                      placeholder={date.txtHide}
                      password={date.ispassword}
                      onChangeText={(text) => {
                          this.setState({
                              dateValue: text
                          })
                      }}
                      value={this.state.dateValue}
                  />
              </View>

          </View>
          <View style={styles.btnStyle}>
               <TouchableOpacity
                   style={styles.btn}
                   onPress={this.onSubmitClick}>
                   <Text style={{fontSize: 16,color: '#fff'}}>提交</Text>
               </TouchableOpacity>
           </View>
        </View>

    );
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6D5',
  },
  toolbar: {
    backgroundColor: '#238E23',
    height: 56,
  },
  txtTip: {
    color: '#238E23',
    fontSize: 20
  },
  btnStyle: {
    flex: 1,
    height: 50,
    width: 262,
    backgroundColor: '#238E23',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 25,
    justifyContent:'center',
    alignItems:'center',
    position: 'absolute',
    bottom: 20
  },
  btnWrap: {
    alignItems: 'center',
    position:'absolute',
    top: 100
  },
    txtBorder: {
        height: 50,
        flex: 1,
        borderWidth: 1,
        borderColor: '#238E23',
        marginLeft: 50,
        marginRight: 50,
        marginTop:5,
        marginBottom:10,
        borderRadius: 25,
        flexDirection: 'row'
    },
    txtLeft:{
       flexDirection: 'row',
       justifyContent:'center',
       alignItems:'center',
    },
    txtInner:{
        height: 20,
        width: 40,
        color: '#238E23',
        fontSize: 14,
        marginLeft: 20,
    },
    txtName: {
        height: 20,
        width: 40,
        marginLeft: 20,
        marginTop: 15,
        color: '#238E23',
        marginRight: 10,
        fontSize: 14
    },
    textInput: {
        height: 50,
        width: 200
    },
    btnsRow: {
        flexDirection: 'row',
        width: 270,
        margin: 10
    },
    btn: {
        flex:1,
        height: 50,
        backgroundColor: '#238E23',
        borderRadius: 25,
        marginLeft: 5,
        justifyContent:'center',
        alignItems:'center',

    },
    btnTxt: {
        height: 40,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    demoStyle: {
        flex: 1,
        marginLeft: 50,
        marginRight: 50,
        flexDirection: 'row',
    },
    iconStyle:{
        fontFamily:'iconfont',
        alignItems:'center',
        justifyContent:'center',
        color: '#238E23',
        fontSize: 14,
    }

});

module.exports = EditScreen;
