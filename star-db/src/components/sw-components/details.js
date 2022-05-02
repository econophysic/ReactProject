import React from 'react';
import {Record} from "../item-details/item-details";
import ItemDetails from "../item-details";
import {SwapiServiseConsumer} from "../swapi-service-context";


const PersonDetails = ({selectedPerson}) => {
    return (
        <SwapiServiseConsumer>
        {
            ({getPerson,getPersonImage}) => {
                return (
                    <ItemDetails
                        itemId={selectedPerson}
                        getData={getPerson}
                        getImageUrl={getPersonImage}
                    >
                        <Record field="gender" label="Gender"/>
                        <Record field="eyeColor" label="Eye Color"/>
                        <Record field="birthYear" label="Birth Year"/>
                    </ItemDetails>
                )
            }
    }
        </SwapiServiseConsumer>
    );
};

const PlanetDetails = ({selectedPlanet}) => {
    return(
       <SwapiServiseConsumer>
           {
               ({getPlanet, getPlanetImage})=>{
                   return(
                       <ItemDetails
                           itemId = {selectedPlanet}
                           getData = {getPlanet}
                           getImageUrl = { getPlanetImage }>

                           <Record field="climate" label="Climate"/>
                           <Record field="rotationPeriod" label="Rotation Period"/>
                           <Record field="terrain" label="Terrain"/>
                       </ItemDetails>
                   )
               }
           }
       </SwapiServiseConsumer>
    )
};

const StarshipDetails = ({selectedStarship}) => {
    return(
        <SwapiServiseConsumer>
            {
                ({getStarship,getStarshipImage})=>{
                    return(
                        <ItemDetails
                            itemId = {selectedStarship}
                            getData = {getStarship}
                            getImageUrl ={ getStarshipImage }
                            getStarshipImage ={getStarshipImage}>

                            <Record field="costInCredits" label="Cost"/>
                            <Record field="crew" label="Crew"/>
                            <Record field="length" label="Length"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiseConsumer>
    )
};

export {
    StarshipDetails,
    PlanetDetails,
    PersonDetails
}