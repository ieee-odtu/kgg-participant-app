import React from 'react';
import { View, Text, ScrollView, Image, WebView } from 'react-native';



export default class AboutScreen extends React.Component {


    render() {
        return (
            <WebView source={{uri: 'https://ieee.metu.edu.tr'}}  style={{flex:1}} >
           
            </WebView>
        );
    }
}