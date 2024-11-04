import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import MainContext from './context/mainContext/mainContext.tsx';
createRoot(document.getElementById('root')!).render(
     <MainContext>
          <App />
     </MainContext>
);
