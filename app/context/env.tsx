import React, { useContext, useEffect, useMemo, useState } from 'react'

export interface Env {
  isProd: boolean
  setEnv?: Function
}

export const defaultEnv = {
  isProd: true,
}

const EnvContext = React.createContext<Env>(defaultEnv)

export function useEnv() {
  const context = useContext(EnvContext)

  if (!context) {
    throw new Error(
      'Cart must have a provider enabled to use.  Please add the provider higher in the tree.'
    )
  }

  return context
}

const EnvContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [env, setEnv] = useState<Env>(defaultEnv)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.host !== 'pixelperfectartshop.com') {
        setEnv({ isProd: false })
      }
    }
  }, [])

  const envValue = useMemo(() => {
    return env
  }, [env])

  return (
    <EnvContext.Provider value={{ ...envValue, setEnv }}>
      {children}
    </EnvContext.Provider>
  )
}

export { EnvContext, EnvContextProvider }
