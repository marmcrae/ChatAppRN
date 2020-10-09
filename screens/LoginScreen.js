import React from 'react';
import { View, Text, StyleSheet , TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-ionicons'


export default class LoginScreen extends React.Component {
    state = {
        name: ' '
    }

    continue = ()=> {
        this.props.navigation.navigate('Chat', {name: this.state.name})
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.circle}/>
                <View style={{marginTop: 16}}>
                    <Image 
                        source={require("../assets/chatapp.png")} 
                        style={{width: 175, height:150, alignSelf: "center"}} 
                        />             
                </View> 

                <View style={{marginHorizontal: 32}}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Enter Name Here" 
                        onChangeText={name => {this.setState({name});
                    }}
                    
                    value={this.state.name} 
                    
                    />

                    <View style={{alignItems: 'flex-end', marginTop: 64}}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>
                             <Icon name="md-arrow-round-forward" size={24} color="#FFF"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
       
    }
}


const styles= StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: "#000000"
    },

    circle: {
        width: 470,
        height: 450,
        borderRadius: 450/2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20

    },
    header: {
        fontWeight:"800",
        fontSize: 30,
        color: "#514E5A",
        marginTop:5
    },
    input:{
        marginTop: 16,
        height: 50,
        borderWidth: 1,
        borderColor: "#2C292E",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight:"600"

    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
});

