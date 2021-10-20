import React, { Component } from 'react';
import { Text, CardItem, Body } from "native-base";
import styles from '../components/styles';

class FilterItem extends Component {

    constructor(props) {
        super(props);
    }

    returnToApp=(value)=>{ 
        this.props.navigation.navigate('App'
        ,{
            dataKey: value,
          }
        );
    }

    render() {
        const {data} = this.props;

        return (
            <CardItem button bordered onPress={()=>this.returnToApp(data.key)}>
                <Body>
              <Text style={styles.filterItem}>
                {data.key}
              </Text>
              </Body>
            </CardItem>
        );
    }

}

export default FilterItem;