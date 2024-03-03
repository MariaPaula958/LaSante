import { Card } from "antd";
import React, { useState, useEffect } from "react";
import "./MyFirstComponent.scss";

export const MyFirstComponent = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const request_api = async () => {
        try {
            const url = "https://pokeapi.co/api/v2/pokemon/";
            const response = await fetch(url);
            const data = await response.json();
            const pokemonInfo = data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();
                return {
                    name: pokemonData.name,
                    abilities: pokemonData.abilities.map((ability) => ability.ability.name),
                    image: pokemonData.sprites.front_shiny
                };
            });
            // Espera a que se completen todas las promesas y actualiza el estado
            Promise.all(pokemonInfo).then((data) => setPokemonData(data));
        } catch (error) {
            console.error("Error al obtener los datos del API:", error);
        }
    };

    useEffect(() => {
        request_api();
    }, []);

    return (
        <>
            <h3>PokeAPI</h3>
            <div className="cards-content">
                {pokemonData.map((pokemon, index) => (
                    <Card
                        key={index}
                        className="card-style"
                        hoverable
                        title={pokemon.name}
                        extra={<a href="#">Más</a>}
                        size="small"
                        cover={<img src={pokemon.image} alt={pokemon.name} />}
                    >
                        <ul>
                            {pokemon.abilities.map((ability, i) => (
                                <li key={i}>{ability}</li>
                            ))}
                        </ul>
                    </Card>

                ))}
            </div>
        </>
    );
};
