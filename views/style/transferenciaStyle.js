import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const transferenciaStyle = StyleSheet.create({
    // container:{
    //     flex: 1,
    //     backgroundColor: '#6699',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // }


    container: {
        flex: 1,
        backgroundColor: "#1e1e1e",
    },
    top: {
        width: width * 1,
        paddingLeft: '5%',
        height: height * 0.1,
        position: 'absolute',
        top: 0,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    voltar: {
        position: 'absolute',
        left: '5%',
        flexDirection: 'row',
        height: height * 0.05,
        width: width * 0.4,
        alignItems: 'center',
        zIndex: 999,
    },
    arrow: {
        color: '#fff',
        fontSize: 30,
        marginTop: -10,
    },
    titleScreen: {
        color: '#fff',
        fontSize: 22,
    },

    modal:{
        flex: 1,
        backgroundColor: "#1e1e1e",
    },
    containerModal:{
        width: width * 1,
        height: height*0.5
    },
    titlesModal:{
        width: '100%',
        height: '15%',
        display: 'flex',
        justifyContent: 'space-around'
    },
    titleNone:{
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleActive:{
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#509'
    },
    titleTxt:{
        color: '#fff',
        fontSize: 12,
    },
    areaPix:{
        width: width*1,
        height: '85%',
        justifyContent: 'center',
        paddingTop: 20,
    },
    cardPix:{
        width: '80%',
        height: '40%',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    areaInputBusca:{
        width:'100%',
        height: '70%',
        padding: 20,
        alignItems: 'stretch',
    },
    areaButton:{
        width:'100%',
        height: '100%',
        padding: 5,
    }


})

export default transferenciaStyle;