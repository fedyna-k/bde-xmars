import React from "react";
import { Pressable, Image, Text, StyleSheet } from "react-native";

const images = {
    "icon.png": require("../../../assets/images/icon.png")
};
const IMAGE_SIZE = 200;

const imagelink_style = StyleSheet.create({
    wrapper: {
        margin: 10,
        width: IMAGE_SIZE + 20,
        alignItems: "center"
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE
    },
    text: {
        fontFamily: "DowntempoBold",
        textAlign: "center",
        fontSize: 16,
        margin: 5
    }
});

export default function ImageLink({description, image, pageSetter, link}) {
    function changeSelected() {
        pageSetter(link);
    }

    return (
        <Pressable style={imagelink_style.wrapper} onPress={changeSelected}>
            <Image source={images[image]} style={imagelink_style.image}></Image>
            <Text style={imagelink_style.text}>{description}</Text>
        </Pressable>
    );
}