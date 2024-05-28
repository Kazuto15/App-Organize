import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProfileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        position: "relative",
        width: width * 1,
        height: height * 1,
        paddingTop: '10%'
    },
    backgroundImage: {
        flex: 1,
        width: width * 1,
        height: height * 1,
    },
    top: {
        width: width * 1,
        paddingLeft: '5%',
        height: height * 0.05,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#000000',
        // backgroundImage: '../assets/fundos/profile-top.png'
    },

    topImage: {
        width: width * 1,
        height: height * 0.05,
        position: 'absolute',
        backdropfilter: 'blur(5),',
        zIndex: 1,
    },
    voltar: {
        position: 'absolute',
        left: '5%',
        display: 'flex',
        flexDirection: 'row',
        height: height * 0.05,
        width: width * 0.4,
        alignItems: 'center',
        zIndex: 999,
    },
    arrow: {
        color: '#fff',
        fontSize: 30,
        marginTop: -10
    },
    titleScreen: {
        color: '#fff',
        fontSize: 22,
    },
    img: {
        width: width * 1,
        height: height * 0.3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    cardImg: {
        width: width * 0.4,
        height: height * 0.2,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#000',
    },
    infos: {
        width: width * 1,
        height: height * 0.8,
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
    }
});

export default ProfileStyle;
