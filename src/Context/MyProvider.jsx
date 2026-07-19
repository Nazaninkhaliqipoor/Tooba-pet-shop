import React, { useState } from "react";

export const MyContext=React.createContext()
const MyProvider = ({children}) => {
    const [user,setUser]=useState(null)
    return ( 
        
        <MyContext.Provider value={{user,setUser}}>
            {children}
        </MyContext.Provider>
        
     );
}
 
export default MyProvider;