import { useState, useEffect, createContext, useContext } from "react";
const PlatosContext = createContext()
export default function PlatosProvider ({children}){
    // const [menu, setMenu] = useState([])
    // const [veganos, setVeganos] = useState(0)
    // const [not, setNot] = useState(0)
    // const [plato, setPlato] = useState()
    const [listaPlatos, setListaPlatos] = useState([])
    const [listaPlatosMenu, setListaPlatosMenu] = useState([])
         useEffect(() => {
        const mostrarPlatos = () => {
            fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=911c33c63d2a4e72bb77d18c1b2b6bc3`)
                // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=f19d2588061a428fbf8602627a07fde4`)

                .then(res => res.json())
                .then(data => {
                    console.log(data.results)
                    setListaPlatos(data.results)
                });
        }
        mostrarPlatos()

        
    }, []);
    
    const mostrarDetallePlato = (props) =>{
        console.log("aaa")
        setListaPlatosMenu({props})
    }
    return(
        <PlatosContext.Provider value = {{listaPlatos, mostrarDetallePlato, listaPlatosMenu}}>
            {children}
        </PlatosContext.Provider>
    )
}
export  function usePlatos(){
    return useContext(PlatosContext)
}