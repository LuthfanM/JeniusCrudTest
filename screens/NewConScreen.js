import React, { Component } from 'react';
import { View, Text, Card } from "native-base";
import { SafeAreaView, TextInput, Button } from "react-native";
import styles from './styles';
import {
    FlatList,
  } from 'react-native';
import themes from '../themes';
import axiosService from '../helpers/axiosService';
import {
    apiProduct, FilterProduct, URLService
} from '../constants/index';
import FilterItem from '../instances/FilterItems'
import Block from '../components/Block';
import qs from "qs";
const axios = require('axios');

export default class NewConScreen extends Component {

    constructor(props) {
        super(props);
        const {dataTransfer}=this.props.route.params;
        dataTransfer=="None"?
        this.state = {
            firstName: "",
            lastName: "",
            ages : "",
            photos : ""
        }:
        this.state = {
            firstName: dataTransfer.firstName,
            lastName: dataTransfer.lastName,
            ages : dataTransfer.age,
            photos : dataTransfer.photo
        }
    }

    savingContact=()=>{
        const { page } = this.state;
        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8',

        //         "Access-Control-Allow-Origin": "*",
        //     }
        //   };
        let parames = qs.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: ""+this.state.aged,
            photo: ""+this.state.photos,
        });
        //   let params = new URLSearchParams();
        //   params.append('firstName', this.state.firstName );
        //   params.append('lastName', this.state.lastName );
        //   params.append('age', this.state.aged );
        //   params.append('photo', this.state.photos );
       
        const URL = URLService+'contact';

        axios.post("https://simple-contact-crud.herokuapp.com/contact",
            parames, {
                headers: {
                    "Content-Type": "application/json"
                }
            }
        ).then((response) =>{
            console.warn(JSON.stringify(response));
          })
          .catch(function (error) {
            console.warn("ERA : "+error);
          });

          this.reset();
    }

    EditContact=()=>{
        let parames = qs.stringify({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: ""+this.state.aged,
            photo: ""+this.state.photos,
        });

        axios.put("https://simple-contact-crud.herokuapp.com/contact/"+this.props.route.params.id,
        parames, {
            headers: {
                "Content-Type": "application/json"
            }
        }
    ).then((response) =>{
        console.warn("Sukses Edit");
      })
      .catch(function (error) {
        console.warn("ERA : "+error);
      });

        this.reset();
    }

    reset(){
        this.props.route.params.dataKey = "None";
          this.props.navigation.navigate('App');
    }

    render() {
        const {dataTransfer}=this.props.route.params;
        console.warn("nilai dt "+JSON.stringify(dataTransfer));
        return (
            <View style={themes.fl1}>
              <Block blockStyle={styles.colorRedd}/>   
              {
              dataTransfer=="None"?
              <Text style={{textAlign: 'center'}}>Add New Contact</Text>:
              <Text style={{textAlign: 'center'}}>Edit Contact</Text>
                }
            <Card>
            <SafeAreaView>
                <Text>First Name</Text>
            <TextInput
        style={styles.input}
        onChangeText={(value) => this.setState({firstName: value})}
        value={this.state.firstName}
        />
        <Text>Last Name</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => this.setState({lastName: value})}
        value={this.state.lastName}
        />
        <Text>Age</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => this.setState({ages: value})}
        value={this.state.ages}
        />
        <Text>Photo</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => this.setState({photos: value})}
        value={this.state.photos}
        />
        {
              dataTransfer=="None"?
         <Button
        title="Save Contact"
        onPress={() => this.savingContact()}
      />:
      <Button
        title="Edit Contact"
        onPress={() => this.EditContact()}
      />
        }       
                </SafeAreaView>
    </Card>
        </View>
        );
    }

}