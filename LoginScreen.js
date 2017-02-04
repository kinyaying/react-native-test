
var React = require('react-native');
var {
    Component,
    Text,
    TextInput,
    TouchableHighlight,
    Alert,
    View,
    PropTypes,
    StyleSheet,
    ToastAndroid
} = React;

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
    render () {
        var { style, txt, psw } = this.props;

        return(
            <View style={styles.container}>
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
                <Text>体验演示版</Text>
                <TouchableHighlight
                    style={styles.btnWrap}
                    onPress={
                    ()=> {
                        Alert.alert(
                            `你点击了按钮`,
                            'Hello World！',
                            [
                                {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: '确定', onPress: () => console.log('OK Pressed')},
                            ]
                        )
                    }
                }>
                    <View style={styles.btnTxt}><Text>登录</Text></View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.btnWrap}
                    onPress={
                    ()=> {
                        const {navigator} = this.props;
                        if (navigator) {
                            navigator.push({
                                name: 'index',
                                index: IndexScreen,
                            });
                        }
                    }
                }>
                    <View style={styles.btnTxt}><Text>注册</Text></View>
                </TouchableHighlight>
            </View>
        )
    }
    getValue () {
        return this.state.txtValue
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    txtBorder: {
        height: 50,
        flex: 1,
        borderWidth: 1,
        borderColor: '#238E23',
        marginLeft: 50,
        marginRight: 50,
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
    btnWrap: {
        height: 50,
        width: 200,
        flex: 1,
        backgroundColor: '#238E23',
        marginLeft: 50,
        marginRight: 50,
        borderRadius: 25,
    },
    btnTxt: {
        height: 50,
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
})

module.exports = LoginScreen;