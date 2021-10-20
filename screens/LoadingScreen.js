import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
  } from 'react-native';
  

export default class LoadingScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <ActivityIndicator size="large" color="#135E5E" />
            </View>
        );
    }

}