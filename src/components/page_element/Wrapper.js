import React, { useState, useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, RefreshControl, StyleSheet } from "react-native";

const wrapper_style = StyleSheet.create({
    main: {
        flex: 1,
        width: "100%",
        backgroundColor: "#fafafa"
    },
    scroll: {
        paddingVertical: 20,
        width: "100%"
    }
});

export default function Wrapper({children, onRefresh}) {
    [refreshing, setRefreshing] = useState(false);

    function getResheshElement() {
        if (onRefresh != undefined) {
            return (<RefreshControl
                refreshing={refreshing}
                onRefresh={refreshFunction}>
            </RefreshControl>);
        }

        return undefined;
    }

    const refreshFunction = useCallback(async () => {
        setRefreshing(true);
        await onRefresh();
        setRefreshing(false);
    }, [])

    return (
        <SafeAreaView style={wrapper_style.main}>
            <ScrollView
                style={wrapper_style.scroll}
                overScrollMode="never"
                refreshControl={getResheshElement()}
            >
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}