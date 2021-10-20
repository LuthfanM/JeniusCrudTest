import React, { Component } from 'react';
import { View, Text, Card } from "native-base";
import styles from './styles';

import {
    FlatList,
  } from 'react-native';
import themes from '../themes';

import FilterItem from '../instances/FilterItems'
import Block from '../components/Block';

export default class FilterScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={themes.fl1}>
              <Block blockStyle={styles.colorRedd}/>     
              <Text style={{textAlign: 'center'}}>Filter Datas</Text>
            <Card>
            <FlatList
                data={[
                    {key: 'None', value: '0'},
                    {key: 'Size', value: '1'},
                    {key: 'Price', value: '2'},
                    {key: 'ID', value: '3'},      
                ]}
                renderItem={({item}) => <FilterItem data={item} {...this.props} />}
    />
    </Card>
        </View>
        );
    }

}