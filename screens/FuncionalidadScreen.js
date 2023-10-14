import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, PermissionsAndroid } from "react-native"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const FuncionalidadScreen = ()=>{


    const handleTakePhoto = async ()=>{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
        )
    if (granted === PermissionsAndroid.RESULTS.GRANTED){
        const result = (await launchCamera(options as any)) as {
            assets: ImageType[];
        }
    }
    }

    return (
        <View>
            <Text
                style = {{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >compartir imagen</Text>
        </View>
    )
}
 export default FuncionalidadScreen
;