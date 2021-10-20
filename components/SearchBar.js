import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import { View } from "native-base";
import styles from './styles';
import {
    searchByFace
} from '../constants/index'

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    onUpdate = (teks) => {
        this.props.onUpdate(teks)        
    };

    render() {

        return (
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="zoom-in" size={30} color="#000" />
                <TextInput
                    style={styles.input}
                    placeholder={searchByFace}
                    onChangeText={this.onUpdate}
                    underlineColorAndroid="transparent"
                />
            </View>
        );
    }

}