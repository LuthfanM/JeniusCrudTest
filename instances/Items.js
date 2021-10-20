import React, { Component } from 'react';
import { View, Text } from "native-base";
import { Image, Button } from 'react-native';
import styles from './styles';
import themes from '../themes';

export default class Items extends Component {

    constructor(props) {
        super(props);  
    }

    onDelete = (ide) => {
        this.props.onDelete(ide)        
    };

    onEdit = () =>{
        let params = {
            id: this.props.data.id,
            firstName: this.props.data.firstName,
            lastName: this.props.data.lastName,
            age: ""+this.props.data.age,
            photo: ""+this.props.data.photo
        }
        console.warn("isi" +JSON.stringify(params));
        this.props.onEdit(params);
    }

    render() {
        const {data} = this.props;

        const sizeFace = {
            fontSize: data.size
        }

        return (          
            <View style={styles.item}> 
                <Text style={themes.bold}>ID: {data.id}</Text>    
                <View style={styles.item2}>  
       
                    <View style={styles.contentData}>
                        <Text>{data.firstName}</Text>
                        <View style={styles.bankRow}>
                        <Text style={themes.bold}>{data.lastName} </Text>                           
                        </View>
                        <Text>Age : {data.age}</Text>  
                        <Text style={themes.bold}>
                            Photo</Text>
                            {
                                data.photo!="N/A"?
                            <Image style={styles.photos} 
                              source={{
                                uri: data.photo,
                              }}
                             alt="Logo" />
                             :<Text>No Photo</Text>
                            }
                            {/* <Image src={data.photo!="N/A"? data.photo : null} alt="Logo" /> */}
                    </View>      
                    <View style={styles.smallWindow}>
                    <Button
        title="Edit"
        onPress={() => this.onEdit()}
      />       
      <Button
        title="Delete"
        onPress={()=>this.onDelete(data.id)}
      />       
                        {/* <Text style={[sizeFace, themes.white]}>{data.face}</Text>     */}
                    </View>              
                </View>            
            </View>
        );
    }

}