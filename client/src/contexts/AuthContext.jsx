import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const storeUser = (email, password, id=1, profilePic="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600") => {
    setCurrentUser({
      email: `${email}`,
      password: `${password}`,
      id: `${id}`,
      profilePic: `${profilePic}`
    });
    // setIsLoggedIn(true);
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser])

  return (
    <AuthContext.Provider value={{storeUser}} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider