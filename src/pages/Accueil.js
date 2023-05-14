import { Text, StyleSheet, Image } from "react-native";

import Wrapper from "../components/page_element/Wrapper";
import Category from "../components/page_element/Category";

const accueil_style = StyleSheet.create({
    title: {
        fontFamily: "PolyFontBold",
        fontSize: 50,
        padding: 20
    }
})

const items = [
    {
        link: "menu",
        image: "icon.png",
        description: "Élément 1"
    },
    {
        link: "menu",
        image: "icon.png",
        description: "Élément 2"
    },
    {
        link: "menu",
        image: "icon.png",
        description: "Élément 3"
    },
    {
        link: "menu",
        image: "icon.png",
        description: "Élément 4"
    }
];

export default function Accueil({pageSetter}) {
    return (
        <Wrapper>
            <Text style={accueil_style.title}>Bienvenue XMarsien !</Text>

            <Category
                title="Annonces"
                subtitle="Écoute ce que ton BDE a à te dire"
                pageSetter={pageSetter}
                items={items}></Category>

            <Category
                title="Évènements à venir"
                subtitle="Viens participer à des soirées et activités incroyables"
                pageSetter={pageSetter}
                items={items}></Category>

            <Category
                title="Mes billets"
                subtitle="T'as fait chauffer la carte"
                pageSetter={pageSetter}
                items={items}></Category>

            <Category
                title="Clubs du BDE"
                subtitle="Fais partie de la vie de l'école de façon active"
                pageSetter={pageSetter}
                items={items}></Category>

        </Wrapper>
    );
}