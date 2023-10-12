import { useState, useEffect, createContext } from "react";

const carritoContext = createContext()

const carritoProvider = ({ children }) => {
    const [menu, setMenu] = useState([])
    const [veganos, setVeganos] = useState(0)
    const [not, setNot] = useState(0)

    const verificar = (plato) => {
        if (plato.vegan && veganos <= 2) {
            setVeganos(veganos++)
            setMenu(plato)
        }
        else if (!plato.vegan && not <= 2) {
            setMenu(...menu, plato)
        }
        else {
            alert("No se pueden agregar más platos")
        }
    }

    return (
        <carritoContext.Provider value={verificar}>
            {children}
        </carritoContext.Provider>
    );
}

export default carritoProvider;