
import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
// import useFirebase from '../Hooks/useFirebase';


export const AuthContext = createContext();



const AuthProvider = ({ children }) => {
    const AllContext = useFirebase();

   
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;