import { useState, useEffect, createContext, useContext } from "react";
const PlatosContext = createContext()
export default function PlatosProvider({ children }) {
    
    const [listaPlatos, setListaPlatos] = useState([])
    const [platoGuardado, setPlatoGuardado] = useState([])
    const [listaPlatosMenu, setListaPlatosMenu] = useState([])
    const [platosCounter, setPlatosCounter] = useState(0)
    const [veganosCounter, setVeganosCounter] = useState(0)
    const [noVeganosCounter, setNoVeganosCounter] = useState(0)
    const [precioFinal, setPrecioFinal] = useState(0)
    const [healthScoreFinal, setHealthScoreFinal] = useState(0)
    //e967e1646396460e9d32df8a39bc4b1b
    useEffect(() => {
        const mostrarPlatos = () => {
            // fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=e967e1646396460e9d32df8a39bc4b1b`)
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
    const GuardarPlato = (platoGuardado, vegano, precio, healthScore) => {
        if (platosCounter < 4) {
            if (vegano) {
                if (veganosCounter < 2) {
                    console.log(platoGuardado, vegano)
                    setPlatoGuardado([platoGuardado])
                    setListaPlatosMenu([...listaPlatosMenu, platoGuardado])
                    if (vegano) { setVeganosCounter(veganosCounter + 1) }
                    else (setNoVeganosCounter(noVeganosCounter + 1))
                    setPlatosCounter(platosCounter + 1)
                    setPrecioFinal(precioFinal + precio)
                    setHealthScoreFinal(healthScoreFinal + healthScore)
                }
                else (alert("Error. No se pueden añadir mas platos veganos"))
            }
            else if (noVeganosCounter < 2) {
                if (noVeganosCounter < 2) {
                    console.log(platoGuardado, vegano)
                    setPlatoGuardado([platoGuardado])
                    setListaPlatosMenu([...listaPlatosMenu, platoGuardado])
                    if (vegano) { setVeganosCounter(veganosCounter + 1) }
                    else (setNoVeganosCounter(noVeganosCounter + 1))
                    setPlatosCounter(platosCounter + 1)
                    setPrecioFinal(precioFinal + precio)
                    setHealthScoreFinal(healthScoreFinal + healthScore)

                }
                else ("Error. No se pueden añadir mas platos no veganos")
            }
            else (alert("Error. Deben haber dos platos veganos y dos platos no veganos"))

        }
        else (
            alert("no se pueden añadir más de 4 platos")
        )
    }
    const mostrarDetallePlato = () => {
        setPlatoMenu('a' + platoGuardado)
    }
    return (
        <PlatosContext.Provider value={{ listaPlatos, mostrarDetallePlato, listaPlatosMenu, GuardarPlato, platoGuardado, precioFinal, healthScoreFinal }}>
            {children}
        </PlatosContext.Provider>
    )
}
export function usePlatos() {
    return useContext(PlatosContext)
}