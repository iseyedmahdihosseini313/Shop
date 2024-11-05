import { IUser } from '../../types/user';

export interface IContextOutProps {
     user: IUser;
     settings: ISettings;
     isAuthenticated: () => boolean;
     dispatch: (key: string, value: any, store?: boolean) => void;
}
export interface IState {
     user: IUser;
     settings: ISettings;
}
export interface ISettings {
     theme: 'dark' | 'light';
     language: 'en' | 'fr' | 'sv' | 'tr' | 'pl' | 'es' | 'de' | 'it' | 'ru';
}
