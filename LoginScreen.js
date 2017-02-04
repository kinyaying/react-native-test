
var React = require('react-native');
var {
    Component,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    View,
    PropTypes,
    StyleSheet,
    ToastAndroid
} = React;

var Dimensions = require('Dimensions');

import IndexScreen from "./IndexScreen";

class LoginScreen extends Component {
    static propTypes = {
        name: React.PropTypes.string,
        txtHide: React.PropTypes.string,
        ispassword: React.PropTypes.bool
      }

    static defaultProps = {
        txt: {
            name: '用户名',
            txtHide: '请输入用户名',
            ispassword: false,
        },
        psw: {
            name: '密码',
            txtHide: '请输入密码',
            ispassword: true,
        }

    }

    constructor (props) {
        super (props)
        this.state = {
          txtValue: "",
          pswValue: ""
        }
    }

    loginClick() {

    }

    registerClick() {

    }

    demoClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'index',
                index: IndexScreen,
            });
        }
    }

    render () {
        var { style, txt, psw } = this.props;

        return(
            <View style={styles.container}>
                <Image source={require('./image/login_bg.jpg')} style={styles.imgStyle}></Image>
                <View style={styles.btnWrap}>
                    <View style={styles.txtBorder}>
                        <Text style={styles.txtName}>{txt.name}</Text>
                        <TextInput
                            underlineColorAndroid = {'transparent'}
                            style={styles.textInput}
                            multiline={false}
                            placeholder={txt.txtHide}
                            password={txt.ispassword}
                            onChangeText={(text) => {
                                this.setState({
                                    txtValue: text
                                })
                            }}
                            value={this.state.txtValue}
                        />
                    </View>
                    <View style={styles.txtBorder}>
                        <Text style={styles.txtName}>{psw.name}</Text>
                        <TextInput
                            underlineColorAndroid = {'transparent'}
                            style={styles.textInput}
                            multiline={false}
                            placeholder={psw.txtHide}
                            password={psw.ispassword}
                            onChangeText={(text) => {
                                this.setState({
                                    pswValue: text
                                })
                            }}
                            value={this.state.pswValue}
                        />
                    </View>
                        <TouchableOpacity
                            style={styles.demoStyle}
                            onPress={this.demoClick.bind(this)}>
                            <Text style={{color: '#CE0000'}}>体验演示版</Text>
                            <Text style={styles.iconStyle}>&#xe608;</Text>
                        </TouchableOpacity>

                    <View style={styles.btnsRow}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.demoClick.bind(this)}>
                            <View style={styles.btnTxt}><Text style={{fontSize: 16,color: '#fff'}}>登录</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={this.demoClick.bind(this)}>
                            <View style={styles.btnTxt}><Text style={{fontSize: 16,color: '#fff'}}>注册</Text></View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    getValue () {
        return this.state.txtValue
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F6D5'
    },
    imgStyle: {
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width
    },
    btnWrap: {
        position: 'absolute',
        bottom: 5,
        alignItems: 'center',
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
        flex: 1,
        textAlign: 'right',
        color: '#CE0000'
    }
})

module.exports = LoginScreen;