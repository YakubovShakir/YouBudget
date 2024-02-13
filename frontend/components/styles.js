import styled from 'styled-components';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

//Высота статус бара
const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    white: '#ffffff',
    backGreen: '#272A15',
    lightWhite: '#D9D9D9',
    milkWhite: '#D2DFE6',
    black: '#000000',
    lightGreen: '#A8B055',
    gray: '#969696',
    lighestGreen: '#7DB208',
    brown: '#564734',
    expense: '#640007',
    income: '#3D5220',
    gold: '#FFEEB1',
    highGreen: '#51D289'
};

const { white, backGreen, lightWhite, black, lightGreen, lighestGreen, brown, milkWhite, expense, income, gold, gray, highGreen} = Colors;

export const MsgBox = styled.Text`
    margin-top: 5%;
    text-align: center;
    font-size: 12px;
    color: ${white};
`;

export const StyledContainer = styled.View`
    flex: 1;
    resize-mode: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const InnerContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const MainPageInnerContainer = styled.View`
    flex: 1;
    height: 100%;
    padding-top: 80px;
    align-items: center;
    resize-mode: contain;
`;

export const StyledFormArea = styled.View`
    width: 90%;
    justify-content: space-around;
`;

export const StyledTextInput = styled.TextInput`
    background-color: transparent; 
    color: ${white};
    padding-left:1px;
    padding-right: 55px;
    font-size: 16px;
    font-weight: bold;
    height: 35px;
    margin-vertical: 3px;
    margin-bottom: 5px;
    border: 2px;
    border-color: transparent;
    border-bottom-color: ${lightGreen};
`
 
export const StyledInputLabel = styled.Text`
    color: ${white};
    font-size: 15px;
    text-align: left;
    font-weight: bold;
`;

export const PageLogo = styled.Image`
    width: 290px;
    height: 35px;
`

export const PageTitle = styled.Text`
    color: ${white};
    font-size: 36px;
    font-weight: bold;
`

export const PageIcon = styled.Image`
    width: 200px;
    height: 200px;
`
export const MainButton = styled.TouchableOpacity`
    background-color: ${lightWhite};
    width: 225px;
    height: 45px;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: ${brown};
    font-size: 20px;
    text-align: center;
`

export const Line = styled.View`
    height: 2px;
    width: 40%;
    background-color: ${black};
    margin-vertical: 10px;
`;

export const LeftIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;  

export const TextWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: center;
`
export const SubText = styled.Text`
    color: ${white};
    margin-right: 3px;
`
export const SubLink = styled.TouchableOpacity`
`
export const SubLinkText = styled.Text`
    color: ${lighestGreen};
`

export const WhiteRec = styled.View`
    background-color: ${milkWhite};
    top: -30%;
    border-radius: 25px;
    width: 600px;
    height: 600px;
    position: absolute;
    transform: rotate(45deg);
`

export const MainPageMonth = styled.Text`
    color: ${brown};
    font-weight: bold;
`
export const MainPageTitles = styled.Text`
    color: ${brown};
    font-size: 25px;  
`
export const TitlesWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
`

export const TitlesView = styled.View`
    border: 5px;
    border-color: transparent;
    border-radius: 1px;
    border-bottom-color: ${white};
    padding-bottom: 20px;
`

export const MainPageCount = styled.Text`
    color: ${brown};
    font-size: 25px;
    font-weight: bold;
`

export const MainPageIcon = styled.Image`
    width: 55px;
    height: 55px;
`

export const MainPageButtonsWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
`
export const MainPageExpenseButton = styled.TouchableOpacity`
    background-color: ${expense};
    width: 50%;
    height: 60px;
    margin-top: 50px;
    left: -20px;
    justify-content: center;
    border-radius: 25px;
    padding-left: 10px;
`
export const MainPageIncomeButton = styled.TouchableOpacity`
    background-color: ${income};
    width: 50%;
    height: 60px;
    border-radius: 25px;
    right: -20px;
    margin-top: 50px;
    justify-content: center;
    padding-right: 10px;
`

export const BottomMenu = styled.View`
    flex-direction: row;
    padding-top: 25px;
    padding-left: 22px;
`

export const BottomMenuButton = styled.TouchableOpacity`
    width: 20%;
`

export const BottomMenuIcon = styled.Image`
    width: 40px;
    height: 40px;
`

export const RegularWrap = styled.View`
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    justify-content: space-between;
    height: 40%;
    margin-top: 25%;
    margin-bottom: 5%;
`

export const RegularItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const RegularItemIcon = styled.Image`
    width: 40px;
    height: 39px;

`

export const RegularItemName = styled.Text`
    color: ${white};
    font-size: 16px;
`

export const RegularItemCost = styled.Text`
    color: ${gold};
    font-size: 16px;
`



export const ProfileInfo = styled.View`
    margin-top: 20%;
    margin-bottom: 5%;

    flex-direction: column;
    justify-content: space-between;
    height: 20%;
    padding-left: 12%;

`

export const ProfileInfoBlock = styled.View`
    justify-content: center;
`
export const ProfileInfoTitle = styled.Text`
    color: ${white};
    font-weight: bold;
    font-size: 17px;
    margin-bottom: 5px;

`

export const ProfileInfoDescr = styled.Text`
    color: ${white};
    font-size: 15px;
`

export const ProfileInfoIcon = styled.Image`
    width: 30px;
    height: 30px;
    position: absolute;
    left: -30%;
`


export const ModalView = styled.View`
    flex: 1;
    background-color: ${milkWhite};
    padding: 60px;
    align-items: center;
`
export const ModalBudgetButton = styled.TouchableOpacity`
    background-color: ${brown};
    width: 250px;
    height: 45px;
    border-radius: 25px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    justify-content: center;
`
export const ModalBudgetButtonText = styled.Text`
    font-size: 20px;
    color: ${milkWhite};
    text-align: center;
`

export const LeftIconDot = styled.TouchableOpacity`
    left: -15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`;  


export const ModalExpenseView = styled.View`
    flex: 1;
    background-color: ${expense};
    padding: 60px;
    align-items: center;
`
export const ModalIncomeView = styled.View`
    flex: 1;
    background-color: ${income};
    padding: 60px;
    align-items: center;
`

export const ICON_SIZE = 45
export const BORDER_SIZE = 1

export const CloseButton = styled.TouchableOpacity`
    position:  absolute;
    top: 2%;
    right: 3%;
    background-color: ${milkWhite};
    width: ${ICON_SIZE + BORDER_SIZE}px;
    height: ${ICON_SIZE + BORDER_SIZE}px;
    border-radius: ${(ICON_SIZE + BORDER_SIZE) / 2}px;
    border-width: ${BORDER_SIZE}px;
`

export const HistoryIconWrap = styled.View`
    background-color: ${highGreen};
    padding: 10px;
    border-radius: 5%;
`
export const HistoryIcon = styled.Image`
    
`

export const HistoryTrancData = styled.Text`
color: ${white};
font-size: 12px;
`
export const StatBlock = styled.View`
`
export const StatInnerContainer = styled.View`
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 30px;
`

export const StatSwiperView = styled.View`
    align-items: center;
`

export const StatInfoBlock = styled.View`
    width: 100%;
`

export const SwiperTitle = styled.Text`
    font-weight: bold;
    color: ${milkWhite};
    text-align: center;
    margin-bottom: 5%;
    margin-top: 5%;
    font-size: 20px;
`

export const StatBlockTitle = styled.Text`
    font-weight: bold;
    color: ${milkWhite};
    text-align: center;
    margin-bottom: 4%;
    margin-top: 10%;
    font-size: 25px;
`
export const StatBlockCount =styled.Text`
    color: ${lightWhite};
    text-align: center;
    font-weight: bold;

    font-size: 20px;
`

export const StatBlockTranc = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: ${lightWhite};
    border-radius: 7%;
    padding: 10px;
    width: 350px;
    margin-top: 20px;
`
export const StatBlockTrancIcon = styled.Image`
    width: 30px;
    height: 30px;
`

export const StatBlockTrancTitle = styled.Text`
    font-size: 15px;
    color: ${black};
`
export const StatBlockTrancData = styled.Text`
    color: ${brown};
`
export const StatBlockTrancCount = styled.Text`
    color: ${black};
`

export const DropDownView = styled.View`
    background-color: transparent;
    margin-bottom: 20px;
`