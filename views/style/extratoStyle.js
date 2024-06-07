import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ExtratoScreen = StyleSheet.create({
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
    scrollView: {
        width: width * 1,
        minHeight: height * 1,
        paddingTop: height * 0.11,
        // backgroundColor: '#509',
    },
    gradient: {
        top: height * 0.13,
        left: width * 0.05,
        width: width * 0.9,
        height: height *0.17,
        borderRadius: 20,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: "#fff",
        marginBottom:height * 0.12,
    },
    infoB: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoM: {
        width: '100%',
        marginTop: 10,
    },
    conta: {
        fontSize: 18,
        color: '#fff',
    },
    logo: {
        fontSize: 18,
        color: '#fff',
    },
    saldoText: {
        color: '#fff',
        fontSize: 14,
    },
    saldoMoney: {
        color: '#fff',
        fontSize: 25,
    },
    cards: {
        width: width * 1,
        top: height * 0.05,
        flexDirection: 'column-reverse',
        alignItems: 'center',
        paddingBottom: 60,
        // backgroundColor: '#082',
    },
    card: {
        width: width * 0.9,
        height: height * 0.2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        marginTop: height*0.01
    },
    tipo: {
        width: '100%',
        height: 0.04 * height, // Usando um valor numérico para altura
        paddingLeft: 20,
        justifyContent: 'flex-end',
    },
    tipoTxt: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    valorData: {
        width: '100%',
        height: 0.04 * height, // Usando um valor numérico para altura
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    valor: {
        width: '60%',
        paddingLeft: 20
    },
    valorTxt: {
        fontSize: 30,
        color: '#fff',
    },
    data: {
        width: '40%',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    dataTxt: {
        fontSize: 18,
        color: '#fff',
    },
    title:{
        paddingLeft: 20,
        paddingRight: 20,
    },
    titleTxt:{
        fontSize: 20,
        color: "#fff"
    },
    desc:{
        paddingLeft: 20,
        paddingRight: 20,
    },
    descTxt:{
        fontSize: 18,
        color: "#fff"
    }
});

export default ExtratoScreen;
