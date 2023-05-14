import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ImageLink from "./ImageLink";

const category_style = StyleSheet.create({
    main: {
        paddingVertical: 30,
        width: "100%"
    },
    title: {
        fontFamily: "PolyFontBold",
        fontSize: 30,
        paddingHorizontal: 20
    },
    subtitle: {
        fontFamily: "PolyFont",
        textTransform: "uppercase",
        fontSize: 13,
        paddingHorizontal: 20,
        color: "#888"
    }
});


export default function Category({title, subtitle, items, pageSetter}) {
    function createChild({item}) {
        return (<ImageLink
                image={item.image}
                link={item.link}
                description={item.description}
                pageSetter={pageSetter}
                key={item.description}
            ></ImageLink>);
    }

    return (
        <View style={category_style.main}>
            {(subtitle) ? (<Text style={category_style.subtitle}>{subtitle}</Text>) : undefined}
            <Text style={category_style.title}>{title}</Text>
            <FlatList
                horizontal={true}
                overScrollMode="never"
                showsHorizontalScrollIndicator={false}
                renderItem={createChild}
                data={items}>
            </FlatList>
        </View>
    );
}