import React, { Component } from 'react';
import {  View } from "native-base";

export default class Block extends Component {

    render() {

        return (
            <View style={this.props.blockStyle}>            
            </View>
        );
    }

}