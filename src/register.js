import React from 'react';
import {
    View, Text, TouchableOpacity, Dimensions,
    StatusBar, Easing, StyleSheet, Switch, AsyncStorage
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { MyTextInput } from './components'
import * as utils from './utils';
import * as api from './api';

const KEY_ISLOGIN = 'isopen26447dds';
const KEY_ANSWER_YES = "KEY_ANSWER_YES12";
const KEY_ANSWER_NO = "KEY_ANSWER_NO12";

const KEY_BOARDING = 'boarding';




export default class RegisterScreen extends React.Component {
    constructor(props) {
        super(props);

        this.isNotEmpty = this.isNotEmpty.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


   

    state = {
        name: 'a',
        institution: 'a',
        dept: 'a',
        grade: 'a',
        email: 'a@a.com',
        valid: false,
        warn: '',
        page: '',
    };


    componentWillMount() {
        this.isBeforeSign();
    }

    async isBeforeSign() {
        try {
            const value = await AsyncStorage.getItem(KEY_ISLOGIN);
            if (value !== null) {
                // We have data!!

                if (value == KEY_ANSWER_YES) {
                    //TODO reverse
                    utils.resetTo(this, 'TabNav');
                    return;
                }

            }
        } catch (error) {
            // Error retrieving data
        }
    }

    isNotEmpty() {

        if (this.state.name === '') {
            return false
        }
        if (this.state.institution === '') {
            return false
        }
        if (this.state.dept === '') {
            return false
        }
        if (this.state.grade === '') {
            return false
        }
        if (this.state.email === '') {
            return false
        }
        return true;
    }

    async onSubmit() {

        if (!this.state.valid) {
            this.setState({ warn: "Geçerli bir email adresi giriniz" })
            return;
        } else if (!this.isNotEmpty()) {
            this.setState({ warn: "Bütün Alanları doldurmalısınız" })
            return;
        }
        else {
            this.setState({ warn: "" })
            try {

                const user = new api.UserInfo();

                user.name = this.state.name;
                user.institution = this.state.institution;
                user.dept = this.state.dept;
                user.grade = this.state.grade;
                user.email = this.state.email;



                const id = await api.sendUserInfo(user);
                if (id) {
                    // login is successfull

                    user.id = id;

                    const strData = JSON.stringify(user);
                    await AsyncStorage.setItem(utils.KEY_USER, strData);
                    await AsyncStorage.setItem(KEY_ISLOGIN, KEY_ANSWER_YES);
                    utils.resetTo(this, 'TabNav')
                } else {
                    // there are some problem
                    // TODO show user error message

                }
            } catch (error) {
                // Error saving data
                console.error('Boarding : onSubmit', error);
            }
        }
    }





    render() {
        return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 16 }} >
                <Text style={{ fontSize: 36, margin: 8, }} > Kayıt </Text>
            </View>
            <View style={{ flex: 1, marginTop: 30 }} >

                <MyTextInput
                    key={1}
                    onChangeText={(name) => {
                        this.setState(prev => ({
                            name: name,
                        }));
                    }}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={'İsim Soyisim'}
                    placeholderTextColor={'gray'}
                    returnKeyType={'next'}
                    width={300}
                />

                <MyTextInput
                    key={2}
                    onChangeText={(email) => {
                        this.setState(prev => ({
                            email: email,
                            valid: utils.validateEmail(email),
                        }));
                    }}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={'Email'}
                    placeholderTextColor={'gray'}
                    keyboardType={'email-address'}
                    returnKeyType={'next'}
                    width={300}
                />


                <MyTextInput
                    key={3}
                    onChangeText={(institution) => {
                        this.setState(prev => ({
                            institution: institution,
                        }));
                    }}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={'Üniversite / Şirket'}
                    placeholderTextColor={'gray'}
                    returnKeyType={'next'}
                    width={300}
                />

                <MyTextInput
                    key={4}
                    onChangeText={(dept) => {
                        this.setState(prev => ({
                            dept: dept,
                        }));
                    }}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={'Bölüm'}
                    placeholderTextColor={'gray'}
                    returnKeyType={'next'}
                    width={300}
                />

                <MyTextInput
                    key={5}
                    onChangeText={(grade) => {
                        this.setState(prev => ({
                            grade: grade,
                        }));
                    }}
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={'Sınıf'}
                    placeholderTextColor={'gray'}
                    returnKeyType={'go'}
                    width={300}
                />

                <View style={{ height: 16, width: 300, margin: 12, justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontSize: 16, color: 'red' }} >
                        {this.state.warn}
                    </Text>
                </View>


                <View style={{ height: 56, width: 300, margin: 12 }} >
                    <TouchableOpacity
                        onPress={this.onSubmit}
                        style={{ height: 56, width: 300, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center', borderRadius: 8 }} >
                        <Text style={{ fontSize: 24 }} >
                            Kayıt Ol
                        </Text>
                    </TouchableOpacity >
                </View>
            </View>

        </View>);
    }
}