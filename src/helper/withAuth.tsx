import { ComponentType } from 'react';
import Login from '../pages/login';

const withAuth = (Component: ComponentType) => {
     const user = localStorage.getItem('user');
     return (props: any) => {
          if (user) {
               return <Component {...props} />;
          }
          return <Login />;
     };
};
export default withAuth;
