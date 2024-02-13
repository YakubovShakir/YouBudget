import {React, useState, useEffect} from "react";
import {Modal, FlatList, ScrollView, View, StyleSheet, Image, Text, ImageBackground, Button, Pressable } from "react-native";
import {Formik} from 'formik'

const personImg = require("./../assets/img/profile/person.png");
const phoneImg = require("./../assets/img/profile/phone.png");
const mailImg = require("./../assets/img/profile/mail.png");
const avatarImg = require("./../assets/img/avatar.png");
const bellImg = require("./../assets/img/profile/bell.png");

const backgroundImg = require("./../assets/img/background.png");

import { Colors,
        StyledContainer,
        InnerContainer,
        PageIcon,
        PageLogo,
        PageTitle,
        MainButton,
        ButtonText,
        ProfileInfo,
        ProfileInfoTitle,
        ProfileLogo, 
        ProfileInfoBlock,
        ProfileInfoDescr,
        ProfileInfoIcon,
        ModalView,
        StyledFormArea,
        ModalBudgetButton,
        ModalBudgetButtonText,
        LeftIconDot,
        StyledInputLabel,
        StyledTextInput} 
        from '../components/styles'
const {backGreen, brown, gray, black, white, milkWhite} = Colors;
import {Octicons} from '@expo/vector-icons';

const Profile = ({navigation}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <ImageBackground source={backgroundImg} style={{flex: 1, backgroundColor: backGreen}}>
        <StyledContainer>
            <InnerContainer>

                <PageTitle>Profile</PageTitle>

              
                <ProfileInfo>

                    <ProfileInfoBlock>
                        <ProfileInfoIcon source={personImg}/>
                        <ProfileInfoTitle>Name</ProfileInfoTitle>
                        <ProfileInfoDescr>User 1</ProfileInfoDescr>
                    </ProfileInfoBlock>

                    <ProfileInfoBlock>
                    <ProfileInfoIcon/>
                    <ProfileInfoIcon source={phoneImg}/>
                    <ProfileInfoTitle>Phone no.</ProfileInfoTitle>
                    <ProfileInfoDescr>+79500354315</ProfileInfoDescr>
                    </ProfileInfoBlock>
                
                    <ProfileInfoBlock>
                    <ProfileInfoIcon/>
                    <ProfileInfoIcon style={{width: 35, height: 24}}source={mailImg}/>
                        <ProfileInfoTitle>E-mail</ProfileInfoTitle>
                        <ProfileInfoDescr>amyoung@random.com</ProfileInfoDescr>
                    </ProfileInfoBlock>

                </ProfileInfo>
                <MainButton onPress={(values) => {
                     console.log("Edit Profile");
                     setIsModalVisible(true); 
                    
                     //navigation.navigate("login")
                     //show
                }}>

                    <ButtonText >Edit Profile</ButtonText>
                </MainButton>
               
                <MainButton onPress={(values) => {
                     console.log("Go to login");
                     navigation.navigate("login")
                }}>
                    <ProfileInfoIcon style={{ left: -40}}source={bellImg}/>

                    <ButtonText>Notifications</ButtonText>
                </MainButton>
               
                <Modal visible={isModalVisible} 
                       onRequestClose={() => { setIsModalVisible(false)}}
                       animationType="slide"
                       presentationStyle="pageSheet">
                    <ModalView>
                    <PageTitle style={{color: '#564734', marginBottom: '20%'}}>Edit Profile</PageTitle>
                    <Formik
                     initialValues={{sum: ''}}
                     onSubmit={(values) => {
                        console.log(values);
                        //handleDeleteAuto(values);
                        setIsModalVisible(false);
                        }}
                    >
        
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        
                        <StyledFormArea>

                         <MyTextInput 
                            label="Enter Name"
                            icon="dot-fill"
                            placeholder="Username"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            style={{marginBottom: '20%'}}
                        />
                        <MyTextInput 
                            label="Enter Phone no."
                            icon="dot-fill"
                            placeholder="+7(***)-***-**-**"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            style={{marginBottom: '20%'}}

                        />
                         <MyTextInput 
                            label="Enter E-mail"
                            icon="dot-fill"
                            placeholder="example@mail.ru"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('mail')}
                            onBlur={handleBlur('mail')}
                            value={values.mail}
                        /> 
                       <ModalBudgetButton onPress={handleSubmit}>
                        <ModalBudgetButtonText>Close</ModalBudgetButtonText>
                    </ModalBudgetButton>

                    </StyledFormArea>
                        )}
                    </Formik>
                   
                    </ModalView>
                </Modal>

            </InnerContainer>
        </StyledContainer>
        </ImageBackground>
    );
}
const MyTextInput = ({label, labelTextColor, icon, textColor, ...props}) => {
    return (
    <View>
        <LeftIconDot>
            <Octicons name={icon} size={15} color="black"/>
        </LeftIconDot>
        <StyledInputLabel style={{color: labelTextColor}}>{label}</StyledInputLabel>
        <StyledTextInput  style={{color: textColor}} {...props} />
    </View>);
};
export default Profile;
  
     // <StatusBar style="light"/>

