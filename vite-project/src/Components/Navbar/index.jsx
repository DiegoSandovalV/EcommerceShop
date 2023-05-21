import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeStyle = 'underline font-bold'
    

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full px-2 py-2 text-small'>

             {/* Left side */}

            <ul className='flex items-center gap-3'>
               <li className=''>
                    <NavLink
                    to = '/'>
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = '/'
                    style = {({ isActive }) => isActive ? {activeStyle} : undefined
                }>
                        All
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/clothes'>
                        Clothes
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/electronics'>
                        Electronics
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/furnitures'>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = '/toys'>
                        Toys
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/others'>
                        Others
                    </NavLink>
                </li> 
            </ul>


            {/* Right side */}

            <ul className='flex items-center gap-3'>
               <li>
                    <NavLink>
                        Email@gmail.com
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = '/myorders'>
                        My Orders
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/myaccount'>
                        My Account
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/signin'>
                        Sign In
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/furnitures'>
                        🛒
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )

}

export default Navbar;