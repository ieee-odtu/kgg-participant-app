import React from 'react';
import { View, Text, Dimensions, AsyncStorage } from 'react-native';
import QRCode from 'react-native-qrcode';
import * as utils from '../utils';

export default class QRScreen extends React.Component {

    constructor(props) {
        super(props);



        this.fetch = this.fetch.bind(this);
    }

    state = {
        data: '',
    }

    componentWillMount() {
        this.fetch();
    }



    async fetch() {
        try {
            const res = await AsyncStorage.getItem(utils.KEY_USER);
            if (res !== null) {

                const id = JSON.parse(res).id;
                console.warn(id);
                const asss = "token";

                this.setState({ data: asss });
            }

        } catch (error) {
            console.error('QRScreen : fetch ', error);
        }
    }



    render() {
        const w = Dimensions.get('screen').width;
        const h = Dimensions.get('screen').height;

        return (
            <View style={{ flex: 1, backgroundColor: '#f4f4f4', justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: w / 9.41, margin: 8, marginTop: 16 }} > Kimlik </Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} >
                    <QRCode
                        value={this.state.data}
                        size={w / 1.25}
                        bgColor='black'
                        fgColor='#f4f4f4' />
                </View>
            </View>
        );
    }
}