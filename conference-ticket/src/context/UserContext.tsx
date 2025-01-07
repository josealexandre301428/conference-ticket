"use client"

import { createContext, useState } from 'react';

interface User {
    username: string;
    email: string;
    github: string;
    avatar: File;
}

interface UserContextType {
  user: {
    username: string;
    email: string;
    github: string;
    avatar: File;
  } | null;

  login: (user: User) => void;
}

const UserContext = createContext<UserContextType>({
  user: null,
  login: () => { }
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user);
  };


  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };