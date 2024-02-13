import {React, useState, useEffect, useContext} from "react";
import {Dimensions, FlatList, ScrollView, View, StyleSheet, Image, Text, ImageBackground, Button, Pressable } from "react-native";
import {Formik} from 'formik'
import moment from 'moment';

const iconImg = require("./../assets/img/icon.png");
const logoImg = require("./../assets/img/logo.png");
const backgroundImg = require("./../assets/img/background.png");
const foodIcon =require("./../assets/img/stat/food.png")
const rentIcon =require("./../assets/img/stat/rent.png")
import { LineChart } from 'react-native-chart-kit';
import Swiper from 'react-native-swiper';

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
        RegularWra,
        StatBlock,
        StatInnerContainer,
        StatSwiperView,
        StatInfoBlock,
        SwiperTitle,
        StatBlockTitle,
        StatBlockCount,
        StatBlockTranc,
        StatBlockTrancIcon,
        StatBlockTrancData,
        StatBlockTrancCount,
        StatBlockTrancTitle
        } 
        from './../components/styles'

const {backGreen, white, lightWhite, gray} = Colors;

import {Octicons} from '@expo/vector-icons';

import AuthContext from "../components/AuthContext";

const Statistics = ({navigation}) => {
  const [expenses, setExpenses]  = useState([]);

  const authContext = useContext(AuthContext);
  // Теперь authContext.user содержит данные о текущем пользователе
  const userId = authContext.user ? authContext.user.id : null;
const Chart = ({ data, title }) => {
    //const screenWidth = Dimensions.get('window').width;
  
    return (
      <>
        <SwiperTitle>{title}</SwiperTitle>
        <LineChart
          data={data}
          width={380}
          height={320}
          yAxisLabel="₽"
          chartConfig={{
            backgroundGradientFrom: '#454545',
            backgroundGradientFromOpacity: 0.5,
            backgroundGradientTo: '#000000',
            backgroundGradientToOpacity: 1,

            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(210, 223, 255, ${opacity})`,
          }}
          //withHorizontalLines={false}
          //withVerticalLines={false}

          bezier
          style={{
            borderRadius: 0,

          }}
        />
      </>
    );
  };


  const incomeData = {
    labels: ['01-01', '01-02', '01-03','01-04'],
    datasets: [
      {
        data: [100, 10, 80, 220],
      },
    ],
  };
  const prepareChartData = (data) => {
    const labels = data.map((expense) => moment(expense.date).format('MM-DD'));
    const dataset = data.map((expense) => expense.value);
    return {
      labels,
      datasets: [
        {
          data: dataset,
        },
      ],
    };
  };
  
  const expenditureData = prepareChartData(expenses.filter((expense) => expense.type === 'expense'));
  
  const categoryIconMapping = {
    Food: require("./../assets/img/stat/food.png"),
    Rent: require("./../assets/img/stat/rent.png"),
    Education: require("./../assets/img/stat/education.png"),

  };

  const fetchExpenses = async (userID) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/get_expenses/${userId}`);
      
      if (response.ok) {
        const data = await response.json();
        setExpenses(data.expenses);
        console.log(expenses);
      } else {
        console.error('Ошибка получения данных:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке запроса:', error);
    }
  };
  useEffect(() => {
    // Загрузите данные при монтировании компонента
    fetchExpenses();
  }, [userId]); // Пустой массив зависимостей означает, что эффект будет выполнен только при монтировании компонента

    return(
        <ImageBackground source={backgroundImg} style={{flex: 1, backgroundColor: backGreen}}>
        <StyledContainer>
            <StatInnerContainer>
         
            <PageTitle>Statistics</PageTitle>
            <Swiper
                style={styles.wrapper}
                showsButtons={true}
                loop={false}
                paginationStyle={{ bottom: 10 }}
                buttonWrapperStyle={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0 }}
            >
                <StatSwiperView>
                {expenses.length > 0 ? (
              <>
                <Chart data={expenditureData} title="Expense" />
                <StatInfoBlock>
                  <StatBlockTitle>Total Expense</StatBlockTitle>
                  <StatBlockCount>47 000 ₽</StatBlockCount>
                </StatInfoBlock>
                <ScrollView style={{height: 250}}>

                <StatInfoBlock>

                  {expenses.map(expense => (
                    <StatBlockTranc key={expense.id}>
                      <View style={{marginRight: 25}}>
                        <StatBlockTrancIcon  source={categoryIconMapping[expense.category]}></StatBlockTrancIcon>
                      </View>
                      <View style={{width: 220}}>
                        <StatBlockTrancTitle>{expense.category}</StatBlockTrancTitle>
                        <StatBlockTrancData>{moment(expense.date).format('YYYY-MM-DD')}</StatBlockTrancData>
                      </View>
                      <StatBlockTrancCount>{expense.value}</StatBlockTrancCount>
                    </StatBlockTranc>
                  ))}
                </StatInfoBlock>
                </ScrollView>

              </>
            ) : (
              <Text>No expenses data available.</Text>
            )}
                </StatSwiperView>

                <StatSwiperView>
                {expenses.length > 0 ? (
              <>
                <Chart data={incomeData} title="Income" />
                <StatInfoBlock>
                  <StatBlockTitle>Total Income</StatBlockTitle>
                  <StatBlockCount>800 ₽</StatBlockCount>
                </StatInfoBlock>
                <ScrollView style={{height: 250}}>

                <StatInfoBlock>

                  {expenses.map(expense => (
                    <StatBlockTranc key={expense.id}>
                      <View style={{marginRight: 25}}>
                        <StatBlockTrancIcon  source={categoryIconMapping[expense.category]}></StatBlockTrancIcon>
                      </View>
                      <View style={{width: 220}}>
                        <StatBlockTrancTitle>{expense.category}</StatBlockTrancTitle>
                        <StatBlockTrancData>{moment(expense.date).format('YYYY-MM-DD')}</StatBlockTrancData>
                      </View>
                      <StatBlockTrancCount>{expense.value}</StatBlockTrancCount>
                    </StatBlockTranc>
                  ))}
                </StatInfoBlock>
                </ScrollView>

              </>
            ) : (
              <Text>No expenses data available.</Text>
            )}
                </StatSwiperView>
    
    </Swiper>
        
            </StatInnerContainer>
        </StyledContainer>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default Statistics;
  
     // <StatusBar style="light"/>

