import React, { Component } from 'react';
import { Container, View, Content, Text } from "native-base";
import { Button} from 'react-native';
import SearchBar from '../components/SearchBar';
import styles from './styles';
import ItemLists from '../components/ItemList';
import Block from '../components/Block';

 class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ""
        }
    }

    componentDidMount(){
        
    }

    onUpdateText = (e)=>{
        this.setState({
            searchText: e
        })
    }

    render() {
        const {searchText} = this.state;       

        return (
            <Container style={styles.container}>
                <Content
                  style={{flex: 1}}
                  contentContainerStyle={{flex: 1}} 
                >            
                    <View style={styles.greyBg}>    
                        <Block blockStyle={styles.colorRedd}/>              
                         <SearchBar onUpdate={this.onUpdateText} />                    
                        <ItemLists searchText={searchText} {...this.props} />                           
                    </View>  
                    
                </Content>  
                <Button
        title="Add New Contact"
        onPress={() => this.props.navigation.navigate('NewConScreen')}
      />       
            </Container>
        );
    }

}

export default MainScreen;