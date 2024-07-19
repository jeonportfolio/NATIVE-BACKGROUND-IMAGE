import { Button, useWindowDimensions, View } from "react-native";
import React, { useCallback } from "react";
import { Typography } from "../components/Typography";
import { Header } from "../components/Header/Header";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RemoteImage } from "../components/RemoteImage";
import { Icon } from "../components/Icons";
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library'


export const ImageDetailScreen = (props) => {

    const navigation = useNavigation();

    const route = useRoute();
    
    const onPressBack = useCallback(() => {
        navigation.goBack();
    },[])

    const onPressDownload = useCallback (async() => {
        const downloadResumable = FileSystem.createDownloadResumable(
            route.params.url,
            `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
        )
        try{
            const {uri} = await downloadResumable.downloadAsync();
            console.log('Finished Downloading to', uri)

            const permissionResult = await MediaLibrary.getPermissionsAsync(true);
            console.log('permissionResult', permissionResult);
            if(permissionResult.status === 'denied'){
                //아예 못쓰는 상태 
                return;
            }

            if(permissionResult.status === 'undetermined'){
                const requestResult = await MediaLibrary.requestPermissionsAsync();
                console.log(requestResult);
                if(requestResult.status === 'denied') {
                    return;
                }
            }

            const asset = await MediaLibrary.createAssetAsync(uri);
            const album = await MediaLibrary.createAlbumAsync('MyFirstAlbum', asset, flase);

            console.log(album);

        }catch(ex){

        }
    },[])
    
    const {width} = useWindowDimensions();

    return (
        
        <View style={{flex:1}}>
            <Header>
                <Header.Group>
                        <Header.Icon iconName={'arrow-back'} onPress={onPressBack}/>
                        <Header.Title title='IMAGE DETAIL'/>
                </Header.Group>
            </Header>
            <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
                       <RemoteImage url={route.params.url} width={width} height = {width * 1.5}/>
            </View>

            <Button onPress={onPressDownload} title="downLoad" >
                <View style={{paddingBottom:24, backgroundColor:'#000'}}>
                    <View style={{height:52, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>   
                         <Typography color={'white'}>DOWNLOAD</Typography>
                         <Icon name='download' size={24} color='white'/>
                    </View>
                </View>
            </Button>

        </View>    
    )
}