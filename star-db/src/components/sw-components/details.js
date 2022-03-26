import React from 'react';
import SwapiService from "../../services/swapi-services";
import joda from "../../img/joda.jpg";
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getStarshipImage,
    getPlanetImage,
    getPersonImage
} = swapiService;

const PersonDetails = ({selectedPerson,crushURL}) => {
    return (
        <ItemDetails
            itemId = {selectedPerson}
            getData = {getPerson}
            getImageUrl ={!crushURL ? getPersonImage : joda}

        >

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
            <Record field="birthYear" label="Birth Year"/>
        </ItemDetails>
    );
};

const PlanetDetails = ({selectedPlanet, crushURL}) => {
    return(
        <ItemDetails
            itemId = {selectedPlanet}
            getData = {getPlanet}
            getImageUrl = {!crushURL ? getPlanetImage : joda}>

            <Record field="climate" label="Climate"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="terrain" label="Terrain"/>
        </ItemDetails>
    )
};

const StarshipDetails = ({selectedStarship,crushURL}) => {
    return(
        <ItemDetails
            itemId = {selectedStarship}
            getData = {getStarship}
            getImageUrl ={!crushURL ? getStarshipImage : joda}
            getStarshipImage ={getStarshipImage}>

            <Record field="costInCredits" label="Cost"/>
            <Record field="crew" label="Crew"/>
            <Record field="length" label="Length"/>
        </ItemDetails>
    )
};

export {
    StarshipDetails,
    PlanetDetails,
    PersonDetails
}