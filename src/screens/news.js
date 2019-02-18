import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import * as styles from '../globalStyles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const mockData = [
    {
        id: 1,
        title: "Test Duyuru",
        text: "Makefit etkinliği küçük fuayede başladı.Makefit etkinliği küçük fuayede başladı.Makefit etkinliği küçük fuayede başladı.Makefit etkinliği küçük",
        date: '1.Gün 14:00'
    }
]

export default class NewsScreen extends React.Component {

    renderItem(item) {

        const h = Dimensions.get('window').height;
        return (
            <View style={{
                height: 160,
                margin: 4, padding: 4, borderWidth: 1.5,
                borderRadius: 4,
                borderColor: 'gray', backgroundColor: 'white'
            }} >
                    <Text style={{ fontSize: 22, margin: 4, fontWeight: '800', }} >
                        {item.title}
                    </Text>
                <View style={{ height: 80, marginTop: 8 }}>
                    <Text style={{ fontSize: 16, margin: 4, fontWeight: '400' }} >
                        {item.text}
                    </Text>
                </View>

                <View style={{ height: 24, margin: 4, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
                    <View style={{ height: 24 }} >
                        <Text style={{ fontSize: 12, margin: 4 }}> @ieeeodtü </Text>
                    </View>
                    <View style={{ height: 24, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Icon active name='alarm' size={20} color={'black'} />
                        <Text style={{ fontSize: 12, margin: 4 }}> {item.date} </Text>
                    </View>
                </View>


            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f4f4f4' }} >
                    <Text style={{ fontSize: 28 }} >
                        Duyurular
                </Text>
                </View>
                <ScrollView style={{ flex: 1 }} >

                    {this.renderItem(mockData[0])}
                    {this.renderItem(mockData[0])}
                    {this.renderItem(mockData[0])}
                    {this.renderItem(mockData[0])}
                    {this.renderItem(mockData[0])}
                </ScrollView>
            </View>
        );
    }
}