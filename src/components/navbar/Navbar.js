import { StyleSheet, View } from 'react-native';
import NavbarButton from "./NavbarButton";

const navbar_style = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        borderTopColor: "#ccc",
        borderTopWidth: StyleSheet.hairlineWidth
    }
})

export default function Navbar({current, pageSetter}) {
    return (
        <View style={navbar_style.container}>
            <NavbarButton
                name="home"
                text="Accueil"
                selected={current == "home"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="calendar"
                text="EDT"
                selected={current == "calendar"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="images"
                text="Photos"
                selected={current == "images"}
                stateSetter={pageSetter}
            ></NavbarButton>
            <NavbarButton
                name="open-book"
                text="Annales"
                selected={current == "open-book"}
                stateSetter={pageSetter}
            ></NavbarButton>
        </View>
    );
}