import { NavLink } from "react-router-dom";

const Navbar = () => {


    return (<div className={ 'navbar' }>
        {/* simple color setup :: continue below for active className setup */ }
        {/* <NavLink to={ '/' } style={ ({ isActive }) => { */ }
        {/*     return { color: isActive ? 'pink' : 'blue' }; */ }
        {/* } }>Home</NavLink> */ }


        {/* this approach uses css classes to styles */}
        <NavLink to={ '/' } className={ ({ isActive }) => isActive ? 'link active' : 'link' }>Home</NavLink>
        <NavLink to={ 'about' } className={ ({ isActive }) => isActive ? 'link active' : 'link' }>About</NavLink>
        <NavLink to={ 'products' } className={ ({ isActive }) => isActive ? 'link active' : 'link' }>Products</NavLink>
        <NavLink to={ 'login' } className={ ({ isActive }) => isActive ? 'link active' : 'link' }>Login</NavLink>
    </div>)
}

export default Navbar

