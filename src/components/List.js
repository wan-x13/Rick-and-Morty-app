import Character from "./Character";
import { useEffect, useState } from "react";


const List = () => {
    const [characters , setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){

            try {

                const data = await fetch('https://rickandmortyapi.com/api/character')
                const {results} =  await data.json()

                setCharacters(results)
                setLoading(false);
                
            } catch (error) {
                console.log(error)
                
            }     
          
        }
        fetchData()
    // setLoading(false)
    //     fetch('https://rickandmortyapi.com/api/character')
    //     .then((response)=>response.json())
    //     .then(({results})=> setCharacters(results))
    //     .catch(err=> console.log(err))
       
    }, [characters.length])

    return (
        <div className="container">
                 <div className="row">
            <h2>Characters</h2>

            {loading ? (
                <div>
                    loading...
                </div>
            ): (
                characters.map((character )=> (
                    <Character
                    key={character.id}
                    name={character.name}
                    origin={character.origin}
                    image ={character.image} />

                ))
               
            )}
        </div>

        </div>
   
    );
};

export default List;