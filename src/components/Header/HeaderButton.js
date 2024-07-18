import React from "react";
import { Button } from "react-native";
import { Icon } from "../Icons";

export class HeaderIcon extends React.Component {
    render(){
        return(
            <Button onPress={this.props.onPress}  title="">
                    <Icon name= {this.props.iconName} size= {28} color='black'/> 
            </Button>
        )
    }
}