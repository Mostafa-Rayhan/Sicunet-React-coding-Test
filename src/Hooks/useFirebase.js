import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
  
  } from "firebase/auth";


  import { useEffect, useState } from "react";
import initial from "../Pages/Firebase/firebase.init";
// import initial from "../Pages/Firebase/firebase.init";


  

initial()

  const useFirebase=()=>{
    const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false)
  const [buyer, setBuyer] = useState(false)

//   navbar toggle 
const [toggle,setToggle]=useState(false)
const handleClick=()=>{
    setToggle(false)
}

const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

//   register email and password 
const registerUser = (email, password, name,client, location, navigate) => {
    // sendUser(email)
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password, client)

      .then((userCredential) => {

        // const destination = location?.state?.from || '/'
        // navigate(destination)
        setError("");

        const newUser = { email, displayName: name,client };
        setUser(newUser)
        // save use to database 
        sendUser(email, name,client, 'POST');
        // send name to firebase after creation 
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => { })
          .catch((error) => { })
          const destination = location?.state?.from || '/'
          navigate(destination)
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));

  }

  //lOGIN WITW EMAIL AND PASSWORD COUSTM 
  const loginWithOwnEmailAndPass = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/'
        navigate(destination)
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));

  }

  // GOOGLE PROVIDER LOGIN
  const loginWithGoogle = (location, navigate) => {

    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        // save to database 
        sendUser(user.email, user.displayName, 'PUT')
        setError("")
        const destination = location?.state?.from || '/'
        navigate(destination)
      }).catch(error => setError(error.message))
      .finally(() => setIsLoading(false))

  };

  //LOG OUT USER METHOD
  const userLogOut = () => {
    setIsLoading(true)
    setToggle(false)
    signOut(auth)
      .then(() => {

      }).catch((error) => {
        setError(error.message)
      })
      .finally(() => setIsLoading(false));
  }


  // save user to database 
  const sendUser = (email, displayName,client,method) => {
    const user = { email, displayName,client };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user)
    })
    .then()
    
  }


  //OBSERVER USER STATE
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  // buyer CONDITIONAL DATALOAD
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setBuyer(data?.buyer)
      })
  }, [user.email])

//  admin role the database 
 useEffect(()=>{
  fetch(`http://localhost:5000/userLogin/${user.email}`)
  .then(res=>res.json())
  .then(data=>setAdmin(data?.admin))
},[user.email])

  return {
    user,
    loginWithGoogle,
    userLogOut,
    registerUser,
    isLoading,
    error,
    loginWithOwnEmailAndPass,
    toggle,
    setToggle,
    handleClick,
    admin,
    buyer
   
  }
  }

  export default useFirebase;
