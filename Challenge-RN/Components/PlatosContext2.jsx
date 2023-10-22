// import { useState, useEffect, createContext } from "react";

// const platosContext = createContext()

// const carritoProvider = ({ children }) => {
//     const [menu, setMenu] = useState([])
//     const [veganos, setVeganos] = useState(0)
//     const [not, setNot] = useState(0)
//     const [plato, setPlato] = useState()
//     const [listaPlatos, setListaPlatos] = useState([])

//     useEffect(() => {
//         const mostrarPlatos = () => {
//             fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)
//                 // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f19d2588061a428fbf8602627a07fde4`)

//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data.results)
//                     setListaPlatos(data.results)
//                 });
//         }
//         const navigation = useNavigation();
//     });

// mostrarPlatos();
//         }, []);

// const verificar = (plato) => {
//     if (plato.vegan && veganos <= 2) {
//         setVeganos(veganos++)
//         setMenu(...menu, plato)
//     }
//     else if (!plato.vegan && not <= 2) {
//         setNot(not++)
//         setMenu(...menu, plato)
//     }
//     else {
//         alert("No se pueden agregar más platos")
//     }
// }


// return (
//     <carritoContext.Provider value={[verificar, menu, plato, setPlato, mostrarPlatos]}>
//         {children}
//     </carritoContext.Provider>
// );

// export default carritoProvider;

// export function usePlatos() {
//     return useContext(platosContext)
// }

// useEffect(() => {
//     async function fetchPokemonData() {
//         try {
//             const response = await axios.get('https://pokeapi.co/api/v2/pokemon/skitty');
//             setPokemonData(response.data);
//         } catch (error) {
//             console.error('Error fetching Pokemon data:', error);
//         }
//     }

//     fetchPokemonData();
// }, []);