import React, { useMemo } from "react";
import { Typography } from "./Typography";
import { View } from "react-native";

export const HookTestComponent = (props) => {
    
    const text = useMemo(() => {
        return props.a + props.b;
    },[props.a, props.b])
    return(
        <View>
            <Typography>
                결과값: {text}
            </Typography>
        </View>
    )
}