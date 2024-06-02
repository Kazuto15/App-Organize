import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen")
const splashStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e'
    },
    logo: {
        position: 'absolute',
        left: width * 0.30,
        top: height * 0.35,
        width: width * 0.60,
        height: height *0.30,
    }, 
});
export default splashStyle;