import React from 'react';
import { View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AboutScreen, MainScreen, QRScreen, NewsScreen } from './screens';
import {colorsF, colors} from './globalStyles';

const SCREEN_HOME = 'home';
const SCREEN_QR = 'qr';
const SCREEN_NEWS = 'news';
const SCREEN_ABOUT = 'about';

export default class TabNavScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: SCREEN_QR,
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === SCREEN_HOME}
                        title={'Program'}
                        titleStyle={{ color: 'black' }}
                        renderIcon={() => <Icon active name='work' size={30} color={'gray'} />}
                        onPress={() => this.setState({ selectedTab: SCREEN_HOME })}>
                        <MainScreen />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === SCREEN_QR}
                        title="QR"
                        titleStyle={{ color: 'black' }}
                        renderIcon={() => <Icon active name='business' size={30} color={'gray'} />}
                        onPress={() => this.setState({ selectedTab: SCREEN_QR })}>
                        <QRScreen />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === SCREEN_NEWS}
                        title="Duyurular"
                        titleStyle={{ color: 'black' }}
                        renderIcon={() => <Icon active name='notifications' size={30} color={'gray'} />}
                        onPress={() => this.setState({ selectedTab: SCREEN_NEWS })}>
                        <NewsScreen />
                    </TabNavigator.Item>

                    <TabNavigator.Item
                        selected={this.state.selectedTab === SCREEN_ABOUT}
                        title="IEEE ODTÜ"
                        titleStyle={{ color: 'black' }}
                        
                        renderIcon={() => <Icon active name='library-books' size={30} color={'gray'} />}
                        onPress={() => this.setState({ selectedTab: SCREEN_ABOUT })}>
                        <AboutScreen />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }

}