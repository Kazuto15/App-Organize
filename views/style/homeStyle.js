import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const homeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        position:"relative",
        width: width * 1,
        height: height * 1,

    },
    user:{
        flexDirection: "row",
        justifyContent:"space-between",
        paddingLeft:width *0.05,
        paddingRight:width *0.05,
        paddingTop:height * 0.01,
    },
    gradient: {
        flex:1,
        position:"absolute",
        top: height *0.1,
        left: width *0.05,
        height: height * 0.15,
        width: width * 0.9,
        marginTop: 15,
        borderRadius: 20,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color:"#fff"
    },
    text:{
        color:"#fff",
        fontSize:15
    },
    infoB:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    infoM:{
        flex:1,
        justifyContent:"flex-start",
    },
    oper:{
        flex:1,
        position:'absolute',
        left: width * 0.1,
        top: height *0.3,
        width: width *0.8,
        flexDirection:'row',
        justifyContent:'space-evenly',
    },
    iconOpe:{
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#618FD3",
        width: 50,
        height:50,
        borderRadius:6,
    },
    extract:{
        position: "relative",
        top: height * 0.40,
        left: width * 0.05,
        width: width * 0.9,
        height: height * 0.20,
        backgroundColor: "#fff",
        marginBottom: 50,
        borderRadius: 6,
    },
    tabBar: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
    paddingHorizontal: 30,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  roundButton: {
    position: 'absolute',
    bottom: height * 0.03,
    left: width * 0.43,
    width: width *0.18,
    height: height *0.084,
    borderRadius: 35,
    backgroundColor: '#6200EE',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
  roundButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: - height *0.004,
  },
});
export default homeStyle;