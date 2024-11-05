import { createContext, ReactNode, useEffect, useState } from 'react';
import { IContextOutProps, ISettings, IState } from './mainContext';
import { IUser } from '../../types/user';

export const context = createContext<IContextOutProps>({} as IContextOutProps);

const MainContext = ({ children }: { children: ReactNode }) => {
     const [state, setState] = useState<IState>({
          user: {} as IUser,
          settings: { language: 'en', theme: 'dark' } as ISettings,
     } as IState);

     useEffect(() => {
          const data = { ...state };
          const user = localStorage.getItem('user');
          if (user) {
               data.user = JSON.parse(user);
          }
          const settings = localStorage.getItem('settings');
          if (settings) {
               data.settings = JSON.parse(settings);
          }
          setState(data);
     }, []);
     const isAuthenticated = () => !!state.user;

     const dispatch = (key: string, value: any, store = false) => {
          setState((prev) => {
               const newState = { ...prev };
               newState[key as keyof IState] = value;
               if (store) {
                    localStorage.setItem(key, JSON.stringify(value));
               }
               return newState;
          });
     };

     return (
          <context.Provider
               value={{
                    ...state,
                    dispatch,
                    isAuthenticated,
               }}
          >
               {children}
          </context.Provider>
     );
};

export default MainContext;
