import React from "react";
import { FlatList, ScrollView, View, StyleSheet, Image, Text, ImageBackground, Button, Pressable } from "react-native";
import {Formik} from 'formik'
const iconImg = require("./../assets/img/icon.png");
const logoImg = require("./../assets/img/logo.png");
const backgroundImg = require("./../assets/img/background.png");

const  cardIcon= require("./../assets/img/history/card.png");
const  foodIcon= require("./../assets/img/history/food.png");
const  hobbieIcon= require("./../assets/img/history/hobbie.png");
const  rentIcon= require("./../assets/img/history/rent.png");

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
        RegularWrap,
        HistoryIcon,
        HistoryIconWrap,
        HistoryTrancData
        } 
        from './../components/styles'
 
const {backGreen, white, lightWhite, gray, highGreen} = Colors;

import {Octicons} from '@expo/vector-icons';


const History = ({navigation}) => {
    return(
        <ImageBackground source={backgroundImg} style={{flex: 1, backgroundColor: backGreen}}>
        <StyledContainer>
            <InnerContainer>
            <PageTitle>History</PageTitle>
            <RegularWrap>

                <RegularItem>
                    <HistoryIconWrap>
                        <HistoryIcon source={cardIcon}/>
                    </HistoryIconWrap> 
                    <View>
                       <RegularItemName>Debts</RegularItemName>
                       <HistoryTrancData style={{marginTop: 5}}>14.05.23</HistoryTrancData>

                    </View>
                    

                    <RegularItemCost>300 ₽</RegularItemCost>
                </RegularItem>

                <RegularItem>
                <HistoryIconWrap>
                    <HistoryIcon source={foodIcon}/>
                    </HistoryIconWrap>
                

                    <View>
                       <RegularItemName>Food</RegularItemName>
                       <HistoryTrancData style={{marginTop: 5}}>14.05.23</HistoryTrancData>

                    </View>

                    <RegularItemCost>300 ₽</RegularItemCost>
                </RegularItem>

                <RegularItem>
                    <HistoryIconWrap>
                        <HistoryIcon source={hobbieIcon}/>
                    </HistoryIconWrap>
                

                    <View>
                       <RegularItemName>Hobbie</RegularItemName>
                       <HistoryTrancData style={{marginTop: 5}}>14.05.23</HistoryTrancData>

                    </View>

                    <RegularItemCost>300 ₽</RegularItemCost>
                </RegularItem>


                <RegularItem>
                    <HistoryIconWrap><HistoryIcon source={rentIcon}/></HistoryIconWrap>
                

                    <View>
                       <RegularItemName>Rent</RegularItemName>
                       <HistoryTrancData style={{marginTop: 5}}>14.05.23</HistoryTrancData>

                    </View>

                    <RegularItemCost>300 ₽</RegularItemCost>
                </RegularItem>

             
            </RegularWrap>

            <MainButton onPress={ () => {
                navigation.navigate("statistics")
            }}> 
                <ButtonText>View Statistics</ButtonText>
            </MainButton>

         
            </InnerContainer>
        </StyledContainer>
        </ImageBackground>
    ); 
}

export default History;
  
     // <StatusBar style="light"/>

