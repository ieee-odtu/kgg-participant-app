import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { SwiperDot, EventCalendar, Swiper } from '../components';

const events1 = [
    { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Muhammet Demirci', summary: 'Girişimci, A Salonu' },
    { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Muhammet Demirci', summary: 'Girişimci, C Salonu' },
    { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Muhammet Demirci', summary: 'Girişimci, B Salonu' },
    { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Muhammet Demirci', summary: 'Girişimci, A Salonu' },
    { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Muhammet Demirci', summary: 'Girişimci, B Salonu' },
]

const events2 = [
    { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'aa Demirci', summary: 'Girişimci, B Salonu' },
    { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Muhammet Demirci', summary: 'Girişimci, A Salonu' },
    { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Muhammet Demirci', summary: 'Girişimci, B Salonu' },
    { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Muhammet Demirci', summary: 'Girişimci, B Salonu' },
]

const events3 = [
    { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'bb Demirci', summary: 'Girişimci, A Salonu' },
    { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Muhammet Demirci', summary: 'Girişimci, B Salonu' },
    { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Muhammet Demirci', summary: 'Girişimci, B Salonu' }
]

export default class MainScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            index: 0, step: 0
        }
        this._onMomentumSwiperScrollEnd = this._onMomentumSwiperScrollEnd.bind(this);
    }

    _eventTapped() {

    }



    _onMomentumSwiperScrollEnd(e, state, context) {
        this.state.index = state.index;
        this.forceUpdate();
    }

    renderDots() {
        if (this.state.index == 0) {
            return (
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    {this.renderActiveDot(1)}
                    {this.renderDot(2)}
                    {this.renderDot(3)}
                </View>
            );

        }
        if (this.state.index == 1) {
            return (
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    {this.renderDot(1)}
                    {this.renderActiveDot(2)}
                    {this.renderDot(3)}
                </View>
            );
        }
        if (this.state.index == 2) {
            return (
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                    {this.renderDot(1)}
                    {this.renderDot(2)}
                    {this.renderActiveDot(3)}
                </View>
            );
        }
    }



    renderDot(day) {

        return (<TouchableOpacity style={{ height: 38, width: 80, borderColor: 'black', margin: 8, borderRadius: 12, borderWidth: 0, justifyContent: 'center', alignItems: 'center' }} >
            <Text style={{ fontSize: 16 }} >
                {day}.Gün
    </Text>
        </TouchableOpacity >);
    }

    renderActiveDot(day) {
        return (
            (<TouchableOpacity style={{ height: 38, width: 80, borderColor: 'black', margin: 8, borderRadius: 12, borderWidth: 1.5, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ fontSize: 16 }} >
                    {day}.Gün
            </Text>
            </TouchableOpacity >)
        );
    }

    render() {

        const h = Dimensions.get('screen').height;
        let { width } = Dimensions.get('window')


        return (
            <View style={{ flex: 1, backgroundColor: '#f4f4f4' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8, margin: 4 }} >
                    <Text style={{ fontSize: 28 }} >
                        Kampüs Gelişim Günleri
                </Text>
                </View>

                <View style={{ height: 50 }} >
                    {this.renderDots()}
                </View>

                <Swiper
                    onMomentumScrollEnd={this._onMomentumSwiperScrollEnd}
                >

                    <EventCalendar
                        key={1}
                        eventTapped={this._eventTapped.bind(this)}
                        events={events1}
                        width={width}
                        initDate={'2017-09-07'}
                    />

                    <EventCalendar
                        key={2}
                        eventTapped={this._eventTapped.bind(this)}
                        events={events2}
                        width={width}
                        initDate={'2017-09-08'}
                    />

                    <EventCalendar
                        key={3}
                        eventTapped={this._eventTapped.bind(this)}
                        events={events3}
                        width={width}
                        initDate={'2017-09-09'}
                    />

                </Swiper>
            </View>
        );
    }
}