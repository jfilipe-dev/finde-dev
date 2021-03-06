import React from 'react';
import { WebView } from 'react-native-webview'
import { View } from 'react-native';

function Profile({ navigation }){

    const github_username = navigation.getParam('github_username');

    return(
        <WebView source={{ uri: `https://github.com/${github_username}` }} style={{ flex:1 }}></WebView>
    )
}

export default Profile;