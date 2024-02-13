import React, {useRef, useEffect, useState, useContext} from 'react';

import {Modal, FlatList, ScrollView, View, StyleSheet, Image, Text, ImageBackground, Button, Pressable } from "react-native";
import {Formik} from 'formik'
import { Dropdown } from 'react-native-element-dropdown';

import AntDesign from '@expo/vector-icons/AntDesign';

import AuthContext from '../components/AuthContext';

const logoImg = require("./../assets/img/logo.png");
const addImg = require("./../assets/img/add.png");
const removeImg = require("./../assets/img/remove.png");
const backgroundImg = require("./../assets/img/background.png");
const statIcon = require("./../assets/img/stat.png");
const timeIcon = require("./../assets/img/time.png");
const recurentIcon = require("./../assets/img/recurent.png");
const personIcon = require("./../assets/img/person.png");
const calendarIcon = require("./../assets/img/calendar.png");

import { Icon } from 'react-native-elements'

import { Colors,
        StyledContainer,
        MainPageInnerContainer,
        PageIcon,
        PageLogo,
        PageTitle,
        MainButton,
        ButtonText,
        WhiteRec,
        MainPageMonth,
        TitlesWrapper,
        MainPageTitles,
        TextWrapper,
        TitlesView,
        MainPageCount,
        MainPageIcon,
        Line,
        MainPageExpenseButton,
        MainPageIncomeButton,
        MainPageButtonsWrapper,
        BottomMenu,
        BottomMenuButton,
        BottomMenuIcon,
        ModalView,
        ModalBudgetButton,
        ModalBudgetButtonText,
        StyledFormArea,
        LeftIconDot,
        StyledInputLabel,
        StyledTextInput,
        ModalExpenseView,
        ModalIncomeView,
        CloseButton,
        ICON_SIZE,
        BORDER_SIZE,
        DropDownView} 
        from '../components/styles'

const {backGreen, brown, gray, black, white, milkWhite} = Colors;

import {Octicons} from '@expo/vector-icons';


const Main = ({navigation}) => {
    const [isModalBudgetVisible, setIsModalBudgetVisible] = useState(false);
    const [isModalExpenseVisible, setIsModalExpenseVisible] = useState(false);
    const [isModalIncomeVisible, setIsModalIncomeVisible] = useState(false);
    const [value, setValue] = useState(null);
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Currnt Year

        setCurrentDate(
          year + '-' + month + '-' + date
        );
      }, []);

    const authContext = useContext(AuthContext);
     // Теперь authContext.user содержит данные о текущем пользователе
    const userId = authContext.user ? authContext.user.id : null;
    console.log("айди пользователя который сейчас вошел " + userId);

    const DropdownComponent = ({setFieldValue}) => {
    const [isFocus, setIsFocus] = useState(false);
    
        const data = [
            { label: 'Education', value: 'Education' },
            { label: 'Food', value: 'Food' },
            { label: 'Rent', value: 'Rent' },
            { label: 'Other', value: 'Other' },
          ];
    
        return (
          <DropDownView>
            <StyledInputLabel>Select category</StyledInputLabel>
            <Dropdown
              style={[styles.dropdown, isFocus && { borderColor: 'black' }]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={data}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select category' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
                console.log(value);
                setFieldValue("category", item.value);
              }}
            />
          </DropDownView>
        );
      };

      const handleNewExpense = async (values) => {
        try {
              const response = await fetch('http://127.0.0.1:8000/api/new_expense', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                  });
                
                  if (response.ok) {
                    const userData = await response.json();


                    //authContext.login(userData);
                    
                    //fetchAutos();

                    setIsModalExpenseVisible(!isModalExpenseVisible)

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
            <MainPageInnerContainer>
                <WhiteRec></WhiteRec>
                <TextWrapper style={{marginBottom: 40}}>
                     <PageTitle style={{color: '#564734'}}>Total</PageTitle>
                    <MainPageMonth>Dec</MainPageMonth>
                </TextWrapper>
                
               <TitlesWrapper style={{marginBottom: 30}}>
                <TitlesView>
                    <MainPageTitles>Expense</MainPageTitles>
                </TitlesView>
              
                <TitlesView>
                    <MainPageTitles>Income</MainPageTitles>
                </TitlesView>
               </TitlesWrapper>

               <TitlesWrapper>
                <MainPageCount>47 000 ₽</MainPageCount>
                <MainPageCount>800 ₽</MainPageCount>
               </TitlesWrapper>
               
               <TitlesWrapper style={{marginBottom: 62,marginTop: 20}}>
                <MainPageIcon source={removeImg}></MainPageIcon>
                <MainPageIcon source={addImg}></MainPageIcon>
               </TitlesWrapper>
               
                <PageLogo style={{marginBottom: 60}} resizeMode="cover" source={logoImg}></PageLogo>
                <Line/>
                <MainButton onPress={(values) => {
                     console.log("Set budget");
                     setIsModalBudgetVisible(true);
                     //navigation.navigate("login")
                }}>
                    <ButtonText>Set budget</ButtonText>
                </MainButton>

                <MainPageButtonsWrapper>
                <MainPageExpenseButton  onPress={(values) => {
                     console.log("New expense");
                     setIsModalExpenseVisible(true);
                }}>
                    <ButtonText style={{color: 'white'}}>New Expense</ButtonText>
                </MainPageExpenseButton>
                <MainPageIncomeButton onPress={(values) => {
                     console.log("New expense");
                     setIsModalIncomeVisible(true);
                }}>
                    <ButtonText style={{color: 'white'}}>New Income</ButtonText>
                </MainPageIncomeButton>
                </MainPageButtonsWrapper>

                <BottomMenu>
                   
                    <BottomMenuButton onPress={() => {
                        console.log("Go to history")
                        navigation.navigate("history")
                    }}>
                        <BottomMenuIcon source={timeIcon}/>
                    </BottomMenuButton>
                    <BottomMenuButton onPress={() => {
                        console.log("Go to statistics")
                        navigation.navigate("statistics")
                    }}>
                        <BottomMenuIcon style={{ width: 50, height: 50, top: -15}}source={statIcon}/>
                    </BottomMenuButton>
                    <BottomMenuButton onPress={() => {
                        console.log("Go to Regular");
                        navigation.navigate("regular");
                    }}>
                        <BottomMenuIcon source={recurentIcon}/>
                    </BottomMenuButton>
                    <BottomMenuButton onPress={() => {
                        console.log("Go to Profile");
                        navigation.navigate("profile");
                    }}>
                        <BottomMenuIcon source={personIcon}/>
                    </BottomMenuButton>
                </BottomMenu>

                <Modal visible={isModalBudgetVisible} 
                       onRequestClose={() => { setIsModalBudgetVisible(false)}}
                       animationType="slide"
                       presentationStyle="pageSheet">
                    <ModalView>
                    <CloseButton
                            onPress={() => {
                                setIsModalBudgetVisible(!isModalBudgetVisible)
                            }}
                        >
                            <Icon name={'close'} size={ICON_SIZE} color={brown} />
                        </CloseButton>
                    <PageTitle style={{color: '#564734', marginBottom: '20%'}}>Budget</PageTitle>
                    <Formik
                     initialValues={{value: ''}}
                     onSubmit={(values) => {
                        console.log(values);
                        //handleDeleteAuto(values);
                        setIsModalBudgetVisible(false);
                        }}
                    >
        
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                        
                        <StyledFormArea>

                         <MyTextInput 
                            label="Enter sum"
                            icon="dot-fill"
                            placeholder="1"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('value')}
                            onBlur={handleBlur('value')}
                            value={values.value}
                        />
                       <ModalBudgetButton onPress={handleSubmit}>
                        <ModalBudgetButtonText>Close</ModalBudgetButtonText>
                    </ModalBudgetButton>

                    </StyledFormArea>
                        )}
                    </Formik>
                   
                    </ModalView>
                </Modal>

                <Modal visible={isModalExpenseVisible} 
                       onRequestClose={() => { setIsModalExpenseVisible(false)}}
                       animationType="slide"
                       presentationStyle="pageSheet">
                    <ModalExpenseView>
                    <CloseButton
                            onPress={() => {
                                setIsModalExpenseVisible(!isModalExpenseVisible)
                            }}
                        >
                            <Icon name={'close'} size={ICON_SIZE} color={brown} />
                        </CloseButton>
                    <PageTitle style={{color: '#FFF', marginBottom: '20%'}}>New Expense</PageTitle>

                    <Formik
                     initialValues={{user_id: userId, value: '',  category: '', type:'expense', date: currentDate}}
                     onSubmit={(values) => {
                        console.log(values);
                        handleNewExpense(values);
                        }}
                    >
        
                        {({handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
                        
                        <StyledFormArea>
                       <DropdownComponent
                            setFieldValue={setFieldValue}
                        
                         />
                        <MyTextInput 
                            label="Enter value"
                            icon="dot-fill"
                            placeholder="1"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('value')}
                            onBlur={handleBlur('value')}
                            value={values.value}
                            textColor={white}
                            labelTextColor={white}
                        />
                       <ModalBudgetButton onPress={handleSubmit}>
                        <ModalBudgetButtonText style={{color: white}}>Submit</ModalBudgetButtonText>
                    </ModalBudgetButton>

                    </StyledFormArea>
                        )}
                    </Formik>
                   
                    </ModalExpenseView>
                </Modal>

                <Modal visible={isModalIncomeVisible} 
                       onRequestClose={() => { setIsModalIncomeVisible(false)}}
                       animationType="slide"
                       presentationStyle="pageSheet">
                    <ModalIncomeView>
                    <CloseButton
                            onPress={() => {
                                setIsModalIncomeVisible(!isModalIncomeVisible)
                            }}
                        >
                            <Icon name={'close'} size={ICON_SIZE} color={brown} />
                        </CloseButton>
                    <PageTitle style={{color: '#FFF', marginBottom: '20%'}}>New Income</PageTitle>
                    <Formik
                     initialValues={{value: '', category: '', type: 'income'}}
                     onSubmit={(values) => {
                        console.log(values);
                        //handleDeleteAuto(values);
                        setIsModalIncomeVisible(false);
                        }}
                    >
        
                        {({handleChange, handleBlur, handleSubmit, values, setFieldValue}) => (
                        
                        <StyledFormArea>

                        <DropdownComponent
                            setFieldValue={setFieldValue}
                        
                         />
                        <MyTextInput 
                            label="Enter sum"
                            icon="dot-fill"
                            placeholder="1"
                            placeholderTextColor={gray}
                            onChangeText={handleChange('value')}
                            onBlur={handleBlur('value')}
                            value={values.value}
                            textColor={white}
                            labelTextColor={white}
                        />
                       <ModalBudgetButton onPress={handleSubmit}>
                        <ModalBudgetButtonText style={{color: white}}>Submit</ModalBudgetButtonText>
                    </ModalBudgetButton>

                    </StyledFormArea>
                        )}
                    </Formik>
                   
                    </ModalIncomeView>
                </Modal>
            </MainPageInnerContainer>
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
export default Main;
  
     // <StatusBar style="light"/>


  const styles = StyleSheet.create({
    dropdown: {
      height: 40,
      borderColor: 'white',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
      marginTop: 10,
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'white',
    },
    selectedTextStyle: {
      fontSize: 16,
      color: 'white'
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });