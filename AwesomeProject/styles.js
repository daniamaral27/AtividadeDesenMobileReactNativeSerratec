import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native-web";

export const styles = StyleSheet.create({
    scrollContainter: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141414',
    },
    texto: {
        fontSize: 40,
        color: '#fff',
    },
    botao: {
        backgroundColor: "blue",
        borderRadius: 30,
        marginTop: 20,
        padding: 6,
    }
})