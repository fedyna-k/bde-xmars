import React from 'react';
import { StyleSheet, Text, Pressable, Image, Linking } from 'react-native';
import { SafeAreaView  } from 'react-native-safe-area-context';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const header_style = StyleSheet.create({
    container: {
        position: "relative",
        top: 0,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    link: {
        padding: 15
    },
    logo : {
        fontFamily: "PolyFontBold",
        fontSize: 28,
        marginLeft: 20,
        color: "#009CB4"
    }
})

export default function Header({pageSetter}) {
    return (
        <SafeAreaView style={header_style.container}>
            <Pressable onPress={() => Linking.openURL('instagram://user?username=bde_polytech_marseille')
  .catch(() => {
    Linking.openURL('https://www.instagram.com/bde_polytech_marseille');
  })
}>
                <Text style={header_style.logo}>BDE XMars</Text>
            </Pressable>

            <Pressable style={header_style.link}>
                <MaterialIcons name="person" size={28} />
            </Pressable>
        </SafeAreaView>
    );
}