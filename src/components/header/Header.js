import logo from '../../assets/img/netflix.webp';
import { TopMenu } from '../menu/TopMenu';
import "./Header.css";

export const Header = ()=>{

    return (
        <div>
            <div className='flex text-center'>
            <img className='logo' src={logo} alt="logo" />
            <h1>Bienvenido</h1>

            </div>
            <TopMenu />
        </div>
    )
}