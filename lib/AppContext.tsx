'use client'
import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  nickname?: string;
  // 필요한 유저 속성들을 추가하세요
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AppContext = createContext<AppContextType>({
  user: null,
  setUser: () => {}
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AppContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}