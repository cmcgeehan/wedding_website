"use client"

import { useState, useEffect } from "react"

const AUTH_KEY = "wedding-auth"

interface AuthState {
  isAuthenticated: boolean
  guestName: string | null
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    guestName: null,
  })

  useEffect(() => {
    // Check for existing authentication on mount
    const stored = localStorage.getItem(AUTH_KEY)
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setAuthState({
          isAuthenticated: true,
          guestName: parsed.guestName,
        })
      } catch {
        // Invalid stored data, clear it
        localStorage.removeItem(AUTH_KEY)
      }
    }
  }, [])

  const authenticate = (guestName: string) => {
    const authData = { guestName, timestamp: Date.now() }
    localStorage.setItem(AUTH_KEY, JSON.stringify(authData))
    setAuthState({
      isAuthenticated: true,
      guestName,
    })
  }

  const logout = () => {
    localStorage.removeItem(AUTH_KEY)
    setAuthState({
      isAuthenticated: false,
      guestName: null,
    })
  }

  return {
    ...authState,
    authenticate,
    logout,
  }
} 