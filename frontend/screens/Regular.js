import React from "react";
import { FlatList, ScrollView, View, StyleSheet, Image, Text, ImageBackground, Button, Pressable } from "react-native";
import {Formik} from 'formik'
const iconImg = require("./../assets/img/icon.png");
const logoImg = require("./../assets/img/logo.png");
const backgroundImg = require("./../assets/img/background.png");

const  netflixIcon= require("./../assets/img/regular/netflix.png");
const  yandexIcon = require("./../assets/img/regular/yandex.png");
const  spotifyIcon= require("./../assets/img/regular/spotify.png");
const  discordIcon = require("./../assets/img/regular/discord.png");
const  creditIcon= require("./../assets/img/regular/credit.png");
const  networkIcon = require("./../assets/img/regular/network.png");
const  wifiIcon = require("./../assets/img/regular/wifi.png");

import { Colors,
        StyledContainer,
        InnerContainer,
        PageIcon,
        PageLogo,
        PageTitle,
        MainButton,
        ButtonText,
        StyledFormArea,
        Line,
        StyledInputLabel,
        StyledTextInput,
        LeftIcon,
        SubText,
        SubLink,
        SubLinkText,
        TextWrapper,
        RegularItem,
        RegularItemCost,
        RegularItemIcon,
        RegularItemName,
        RegularWrap} 
        from './../components/styles'

const {backGreen, white, lightWhite, gray} = Colors;

import {Octicons} from '@expo/vector-icons';


const Regular = ({navigation}) => {
    return(
        <ImageBackground source={backgroundImg} style={{flex: 1, backgroundColor: backGreen}}>
        <StyledContainer>
            <InnerContainer>
            <PageTitle>Regular expense</PageTitle>
            <RegularWrap>

                <RegularItem>
                    <RegularItemIcon source={spotifyIcon}/>

                    <RegularItemName>Spotify</RegularItemName>

                    <RegularItemCost>300 ₽ / М</RegularItemCost>
                </RegularItem>

                <RegularItem>
                    <RegularItemIcon source={yandexIcon}/>

                    <RegularItemName>Yandex music</RegularItemName>

                    <RegularItemCost>300 ₽ / М</RegularItemCost>
                </RegularItem>

                <RegularItem>
                    <RegularItemIcon source={netflixIcon}/>

                    <RegularItemName>Netflix</RegularItemName>

                    <RegularItemCost>300 ₽ / М</RegularItemCost>
                </RegularItem>


                <RegularItem>
                    <RegularItemIcon source={discordIcon}/>

                    <RegularItemName>Discord nitro</RegularItemName>

                    <RegularItemCost>300 ₽ / М</RegularItemCost>
                </RegularItem>

                <RegularItem>
                    <RegularItemIcon source={creditIcon}/>

                    <RegularItemName>Credit</RegularItemName>

                    <RegularItemCost>300 ₽ / М</RegularItemCost>
                </RegularItem>

                <RegularItem>
                    <RegularItemIcon source={networkIcon}/>

                    <RegularItemName>Mobile network</RegularItemName>

                    <RegularItemCost>300 ₽ / М</RegularItemCost>
                </RegularItem>

                <RegularItem>
                    <RegularItemIcon source={wifiIcon}/>

                    <RegularItemName>Home wifi</RegularItemName>

                    <RegularItemCost>300 ₽ / М</RegularItemCost>
                </RegularItem>
            </RegularWrap>
            <MainButton> 
                <ButtonText>New regular expense</ButtonText>
            </MainButton>
            <MainButton> 
                <ButtonText>View Statistics</ButtonText>
            </MainButton>

         
            </InnerContainer>
        </StyledContainer>
        </ImageBackground>
    );
}

export default Regular;
  
     // <StatusBar style="light"/>

