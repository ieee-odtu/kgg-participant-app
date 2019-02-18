// @flow
import {
  VirtualizedList,
  View,
  TouchableOpacity,
  Image,
  Text
} from 'react-native'
import _ from 'lodash'
import moment from 'moment'
import React from 'react'

import styleConstructor from './style'

import DayView from './dayView'

export default class EventCalendar extends React.Component {
  constructor(props) {
    super(props)
    this.styles = styleConstructor(props.styles)
    this.state = {
      date: moment(this.props.initDate),
      index: this.props.size
    }
  }

  static defaultProps = {
    size: 3,
    initDate: new Date(),
    formatHeader: 'DD MMMM YYYY'
  }

  _getItemLayout(data, index) {
    const { width } = this.props
    return { length: width, offset: width * index, index }
  };

  _getItem(events, index) {
    const date = moment(this.props.initDate).add(index - this.props.size, 'days')
    return _.filter(events, event => {
      const eventStartTime = moment(event.start)
      return eventStartTime >= date.clone().startOf('day') &&
        eventStartTime <= date.clone().endOf('day')
    })
  }

  _renderItem({ index, item }) {
    const { width, format24h, initDate, scrollToFirst } = this.props
    const date = moment(initDate).add(index - this.props.size, 'days')
    return (
      <DayView
        date={date}
        index={index}
        format24h={format24h}
        formatHeader={this.props.formatHeader}
        headerStyle={this.props.headerStyle}
        renderEvent={this.props.renderEvent}
        eventTapped={this.props.eventTapped}
        events={item}
        width={width}
        styles={this.styles}
        scrollToFirst={scrollToFirst}
      />
    )
  }

  _goToPage(index) {
    if (index <= 0 || index >= this.props.size * 2) {
      return
    }
    const date = moment(this.props.initDate).add(index - this.props.size, 'days')
    this.refs.calendar.scrollToIndex({ index, animated: false })
    this.setState({ index, date })
  }

  render() {
    const { width, initDate, format24h, scrollToFirst, events } = this.props
    const date = moment(initDate).add(1 - this.props.size, 'days')
    return (
      <DayView
        date={date}
        index={1}
        format24h={format24h}
        formatHeader={this.props.formatHeader}
        headerStyle={this.props.headerStyle}
        renderEvent={this.props.renderEvent}
        eventTapped={this.props.eventTapped}
        events={events}
        width={width}
        styles={this.styles}
        scrollToFirst={scrollToFirst}
      />
    )
  }
}
