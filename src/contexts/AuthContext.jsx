import React, { useEffect, useState, createContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../config/firebase'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [globalLoading, setGlobalLoading] = useState(true)
  const [currentPath, setCurrentPath] = useState('')
  const location = useLocation()
  const [user, setUser] = useState({
    uid: '',
  })

  useEffect(() => {
    setCurrentPath(location.pathname)
  }, [location])

  useEffect(() => {
    firebaseAuth.onAuthStateChanged(result => {
      if (result) {
        if (result.uid !== user.uid) {
          setUser(result)
          setGlobalLoading(false)

          if (currentPath.match(/(auth\/signin|auth\/signup)/)) {
            navigate('/')
          }
        } else {
          setGlobalLoading(false)
        }
      } else {
        setGlobalLoading(false)
      }
    })
  })

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        globalLoading,
        setGlobalLoading,
        currentPath,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer
export { AuthContext, AuthProvider, AuthConsumer }