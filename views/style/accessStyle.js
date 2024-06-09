import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')
const accessStyle = StyleSheet.create({
    container: {
        height: height * 1,
        width: width * 1,
    },
    gradient: {
        flex: 1,
        position: 'absolute',
        height: height * 1,
        width: width * 1,
        color: "#fff",
        
    },
    viewTop:{
        width: width * 1,
        height: height*0.6,
    },
    ViewButton:{
        width: width * 1,
        height: height*0.4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: height*0.05,
    },
    singIn:{
        width: width*0.8,
        height: height*0.06,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "#fff",
        borderWidth: 2,
        marginBottom: 15,
    },
    singUp:{
        width: width*0.8,
        height: height*0.06,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#9937C8",
    },
    singButtonColor:{
        color: '#FFF',
        fontSize: 20,
    },


    // modal

    modalContainer:{
        width: width*1,
        height: height*1,
        backgroundColor: "#0f0f0f40",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    areaCpf:{
        width: width*1,
        height: height*0.4,
        backgroundColor: "#0c0c0ce1",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    areaLabelModal:{
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    label:{
        color: '#fff',
        fontSize: 16,
        marginBottom: 20,
    },
    areaInputModal:{
        width: "100%",
        height: height*0.12,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom:20,
    },
    modalInput:{
        width: '100%',
        height: '60%',
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
    },
    avancarModal:{
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    avancarModalBtn:{
        width: "100%",
        height: height*0.06,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#9937C8",
    },

    
    cadastroArea:{
        width: width*1,
        height: height*0.65,
        backgroundColor: "#0c0c0ce1",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
    cadInputs:{
        width: "100%",
        height: 60,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 15,
    },
    labelInputCad:{
        color: '#fff',
        fontSize: 17,
    },
    inputCadastro:{
        borderWidth:1,
        borderColor: "#fff",
        borderRadius: 5,
        height: 40,
        color: "#fff",
        paddingLeft: 10,
        paddingRight: 10,
    },






    modalShow:{
        top: 0,
        width: width*1,
        height: height*1,
        backgroundColor: "#1e1e1e",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      carregamentoModal:{
        top: -height*0.05,
        width: width*0.15,
        height: height*0.1,
      },
})
export default accessStyle;