import * as React from 'react';
import{Text, View, StyleSheet} from 'react-native';

export default class SpaceCrafts extends React.Component{
    render(){
        return(
            <View style = {{flex: 1, justifyContent: "center", alignItems:"center", backgroundColor:"black"}}>
                <Text style = {{color: "white"}}>Space Crafts Screen</Text>
            </View>
        )
    }
}