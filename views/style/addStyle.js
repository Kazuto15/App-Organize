import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('screen')
const addStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e"
  },
  top: {
    width: width * 1,
    paddingLeft: '5%',
    height: height * 0.1,
    position: 'absolute',
    top: 0,
    zIndex: 1,
    backgroundColor: '#000000',
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: height*0.05,
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
  contFunction: {
    marginTop: height * 0.10
  },
  subt: {
    color: '#fff',
    fontSize: 24,
    marginHorizontal: 30,
  },
  TxInput: {
    marginHorizontal: 30,
    backgroundColor: "#FFF",
    height: height * 0.05,
    width: width * 0.85,
    borderRadius: 3
  },
  contBtn: {
    flex: 1,
    flexDirection: 'row',
    width: width * 1,
    justifyContent: "space-evenly",
    marginTop : height * 0.05
  },
  button: {
    paddingVertical: 10,
    borderWidth: 2,
    width: width * 0.30,
    borderRadius: 5,
    alignItems: 'center',

  },
  buttonReceita: {
    borderColor: '#20BD1D',
  },
  buttonDespesa: {
    borderColor: '#BD1D1D',
  },
  buttonActiveReceita: {
    backgroundColor: '#1E5006',
  },
  buttonActiveDespesa: {
    backgroundColor: '#681313',
  },
  buttonText: {
    fontSize: 16,
  },
  buttonTextReceita: {
    color: '#20BD1D',
  },
  buttonTextDespesa: {
    color: '#BD1D1D',
  },
  submit:{
    position:"absolute",
    top: height * 0.40,
    backgroundColor:"#6D37E0",
    paddingVertical:10,
    width: width *0.70,
    marginHorizontal: 60,
    borderRadius: 7,
  }
})
export default addStyle;