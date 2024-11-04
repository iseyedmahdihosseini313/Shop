import './mainLayoutStyle.css';
import IMainLayout from './mainLayoutTypes';
const MainLayout = ({ children }: IMainLayout) => {
     return <div className="mainLayout">{children}</div>;
};

export default MainLayout;
