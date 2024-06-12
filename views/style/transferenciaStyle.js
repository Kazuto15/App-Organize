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
    containerModal:{
        width: width * 1,
        height: height*1,
        // backgroundColor: '#090'
    },
    top: {
        paddingLeft: '5%',
        width: width * 1,
        height: height * 0.1,
        // position: '',
        zIndex: 1,
        top: 30,
        justifyContent: 'flex-end',
        // backgroundColor: '#900';
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
    
    titlesModal:{
        top: 30,
        width: '100%',
        height: '10%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: '#888'
    },
    titleNone:{
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5,
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleActive:{
        width: 'auto',
        paddingLeft: 5,
        paddingRight: 5,
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#509'
    },
    titleTxt:{
        color: '#fff',
        fontSize: 13,
    },
    areaPix:{
        width: width*1,
        height: '85%',
        alignItems: 'center',
        paddingTop: height*0.06,
    },
    cardPix:{
        width: '80%',
        height: '40%',
        backgroundColor: '#2a2a2ae1',
        borderRadius: 20,
    },
    areaInputBusca:{
        width:'100%',
        height: '70%',
        padding: 10,
        paddingTop: 30,
    },
    inputBusca:{
        backgroundColor: 'transparent',
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(126, 0, 230)',
        color: '#ff5',
        fontStyle:'italic',
        fontSize: 15,
        marginBottom: 10,
    },
    labelModal:{
        color: '#fff',
        fontSize: 16,
    },
    areaButton:{
        width:'100%',
        height: '100%',
        padding: 5,
        alignItems: 'center',
    },
    btnConfirmar:{
        width: '98%',
        height: '25%',
        backgroundColor: 'rgb(126, 0, 230)',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 15,
    },
    btnTxt:{
        color: "#fff",
        fontSize: 20,
    }


})

export default transferenciaStyle;