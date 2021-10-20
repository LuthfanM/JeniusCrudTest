import React, { Component } from 'react';
import {
    Image, Text
  } from 'react-native';
import {  View } from "native-base";
import styles from './styles';

export default class Ads extends React.PureComponent {

    constructor(props){
        super(props);
        this.state={
            storeNum: []
        }
    }

    randomIndex(){
        const {storeNum} = this.state;
    
        var randomNum;
        do{
            randomNum = Math.floor((Math.random() * 100) + 1);
        }while(storeNum.includes(randomNum))
        storeNum.push(randomNum);
    
        var urlAds = 'http://localhost:3000/ads/?r='+randomNum;
    
        return urlAds;
    }

    render() {

        return (
            <View style = {styles.containerImage} >
                <Text style={{color: 'white'}}>Ads</Text>
            <Image source = {{uri:this.randomIndex()+"?"+new Date().toLocaleString()}}
                          style = {styles.imageAds} />
                          </View>
        );
    }

}