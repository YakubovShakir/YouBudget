import React from "react";
import { FlatList, ScrollView, View, StyleSheet, Image, Text, ImageBackground, Button, Pressable } from "react-native";

const iconImg = require("./../assets/img/icon.png");
const logoImg = require("./../assets/img/logo.png");
const backgroundImg = require("./../assets/img/background.png");

import { Colors,
        StyledContainer,
        InnerContainer,
        PageIcon,
        PageLogo,
        PageTitle,
        MainButton,
        ButtonText} 
        from '../components/styles'
const {backGreen} = Colors;

const Welcom = ({navigation}) => {
    return(
        <ImageBackground source={backgroundImg} style={{flex: 1, backgroundColor: backGreen}}>
        <StyledContainer>
            <InnerContainer>

                <PageTitle style={{marginTop: 100}}>Welcome to</PageTitle>

                <PageIcon resizeMode="cover" source={iconImg}></PageIcon>
                <PageLogo resizeMode="cover" source={logoImg}></PageLogo>

                <MainButton onPress={(values) => {
                     console.log("Go to login");
                     navigation.navigate("login")
                }}>
                    <ButtonText>Get started</ButtonText>
                </MainButton>
               
            </InnerContainer>
        </StyledContainer>
        </ImageBackground>
    );
}

export default Welcom;
  
     // <StatusBar style="light"/>

