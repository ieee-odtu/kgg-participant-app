import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Text as NativeText,
} from 'react-native';

const { width } = Dimensions.get('window');

export default class MyTextInput extends Component {
  focus() {
    const ref = this.props.textInputRef;
    this.refs[ref].focus();
  }
  blur() {
    const ref = this.props.textInputRef;
    this.refs[ref].blur();
  }
  render() {
    const {
      containerStyle,
      inputStyle,
      textInputRef,
      containerRef,
      ...attributes
    } = this.props;
    return (
      <View
        ref={containerRef}
        style={[styles.container, containerStyle && containerStyle]}
      >
        <TextInput
          ref={textInputRef}
          style={[styles.input, inputStyle && inputStyle, { width: this.props.width,backgroundColor:'white',paddingLeft:8 }]}
          {...attributes}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    margin: 7,
    marginLeft: 12,
    marginRight: 12,
    ...Platform.select({
      ios: {
        borderBottomColor: '#bdc6cf',
        borderBottomWidth: 1,
        marginLeft: 12,
        marginRight: 12,
      },
    }),
  },
  input: {
    ...Platform.select({
      android: {
        height: 46,
      },
      ios: {
        height: 36,
      },
    }),
    color: 'black',
  },
});