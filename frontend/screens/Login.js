import {React, useState, useEffect, useContext} from "react";
import { Modal, FlatList, ScrollView, View, StyleSheet, Image, Text, ImageBackground, Button, Pressable } from "react-native";
import {Formik} from 'formik'
import { Icon } from 'react-native-elements'
const iconImg = require("./../assets/img/icon.png");
const logoImg = require("./../assets/img/logo.png");
const backgroundImg = require("./../assets/img/background.png");
import AuthContext from "../components/AuthContext";

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
        CloseButton,
        BORDER_SIZE,
        ICON_SIZE,
        MsgBox} 
        from './../components/styles'

const {backGreen, white, lightWhite, gray, brown} = Colors;

import {Octicons} from '@expo/vector-icons';


const Login = ({navigation}) => {
    [isModalSignUpVisible, setIsModalSignUpVisible] = useState(false);
    const authContext = useContext(AuthContext);
    const [answer, setAnswer] = useState(null);

    const handleSignup = async (values) => {
        try {
            if (values.password != values.repeatPassword) {
                setAnswer('Пароли должны быть одинаковыми')
            } else {
                const response = await fetch('http://127.0.0.1:8000/api/signup', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                  });
                
                  if (response.ok) {
                    console.log('Пользователь успешно добавлен');
                    setIsModalSignUpVisible(false); // Закрыть модальное окно после успешного добавления
                    //fetchAutos();
                    setAnswer(null);
                  } else {
                    setAnswer('Пользователь с таким логином или почтой уже существует');
                    //console.error('Ошибка при добавлении пользователя');
                  }
            }
        
        } catch (error) {
          console.error('Ошибка при отправке запроса:', error);
        }
      };
      
      const handleLogin = async (values) => {
        try {
              const response = await fetch('http://127.0.0.1:8000/api/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                  });
                
                  if (response.ok) {
                    const userData = await response.json();

                    //console.log('Пользователь успешно вошел:', userData);
                    authContext.login(userData);
                    //authContext.login(userData);
                    //fetchAutos();
                    navigation.navigate("main")

                  } else {
                    setAnswer('Логин или пароль неверны');
                    //console.error('Ошибка при добавлении пользователя');
                  }
        
        } catch (error) {
          console.error('Ошибка при отправке запроса:', error);
        }
      };

      
    return(
        <ImageBackground source={backgroundImg} style={{flex: 1, backgroundColor: backGreen}}>
        <StyledContainer>
            <InnerContainer>

                <PageLogo resizeMode="cover" source={logoImg}></PageLogo>
                
                <Formik 
                    initialValues={{login_or_email: '', password: ''}}
                    onSubmit={(values) => {
                        //console.log(values);
                        handleLogin(values);
                }}>

                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput 
                            placeholder="Login or email"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('login_or_email')}
                            onBlur={handleBlur('login_or_email')}
                            value={values.login_or_email}
                        />

                         <MyTextInput 
                            placeholder="Password"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={true}
                        />
                          {answer && (    
                                    <>
                                    <MsgBox>{answer}</MsgBox>
                                    </>
                                    )}
                                   
                        <MainButton onPress={handleSubmit}> 
                            <ButtonText>Log in</ButtonText>
                        </MainButton>
                        <TextWrapper style={{marginTop: 5}}>
                            <SubText>Don't have account?</SubText>
                            <SubLink onPress={() => {
                                setAnswer(null);
                                setIsModalSignUpVisible(true);
                            }}><SubLinkText>Sign Up!</SubLinkText>
                            </SubLink></TextWrapper>
                    </StyledFormArea>
                )}
                </Formik>

                <Modal visible={isModalSignUpVisible} 
                       onRequestClose={() => { setIsModalSignUpVisible(false)}}
                       animationType="slide"
                       presentationStyle="pageSheet">
                    <ImageBackground source={backgroundImg} style={{flex: 1, backgroundColor: backGreen}}>
                    <StyledContainer>
                        <InnerContainer>
                        <CloseButton
                            onPress={() => {
                                setIsModalSignUpVisible(!isModalSignUpVisible)
                                setAnswer(null)
                            }}
                        >
                            <Icon name={'close'} size={ICON_SIZE} color={brown} />
                        </CloseButton>
                            <PageTitle>Create an account</PageTitle>
                
                            <Formik 
                                initialValues={{login_or_email: '', password: '', repeatPassword: ''}}
                                onSubmit={(values) => {
                                    console.log(values);
                                    //setIsModalSignUpVisible(false);
                                    handleSignup(values);
                            }}>

                            {({handleChange, handleBlur, handleSubmit, values}) => (
                                <StyledFormArea>
                                    <MyTextInput 
                                        placeholder="Login or email"
                                        placeholderTextColor={gray}
                                        onChangeText={handleChange('login_or_email')}
                                        onBlur={handleBlur('login_or_email')}
                                        value={values.login_or_email}
                                    />

                                    <MyTextInput 
                                        placeholder="Password"
                                        placeholderTextColor={gray}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={true}
                                    />
                                    <MyTextInput 
                                        placeholder="Repeat password"
                                        placeholderTextColor={gray}
                                        onChangeText={handleChange('repeatPassword')}
                                        onBlur={handleBlur('repeatPassword')}
                                        value={values.repeatPassword}
                                        secureTextEntry={true}
                                    />
                                    {answer && (    
                                    <>
                                    <MsgBox>{answer}</MsgBox>
                                    </>
                                    )}
                                   
                                    <MainButton onPress={handleSubmit}> 
                                        <ButtonText>Sign up</ButtonText>
                                    </MainButton>
                                
                                </StyledFormArea>
                            )}
                </Formik>
                </InnerContainer>
                </StyledContainer>
                </ImageBackground>
                </Modal>
            </InnerContainer>
        </StyledContainer>
        </ImageBackground>
    );
}

const MyTextInput = ({label, icon, ...props}) => {
    return (
    <View>
        <Octicons name={icon} size={30} color={white}/>
        <StyledTextInput {...props} />
    </View>);
};

export default Login;
  
     // <StatusBar style="light"/>

