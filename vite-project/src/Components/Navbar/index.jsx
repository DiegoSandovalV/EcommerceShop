import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeStyle = 'underline font-bold'
    

    return (
        <nav className='flex justify-between items-center fixed z-10 w-full px-14 py-2 text-xl '>

       

             {/* Left side */}

            <ul className='flex items-center gap-5'>
               <li className=''>
                    <NavLink
                    to = '/'>
                        
                        Icon
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = '/'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        All
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/clothes'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    
                    to = '/electronics'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        
                        Electronics
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/furnitures'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to = '/toys'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/others'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li> 
            </ul>


            {/* Right side */}

            <ul className='flex items-center gap-5'
            >
        
                <li>
                    <NavLink
                    to = '/myorders'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/myaccount'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/signin'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li> 
                <li>
                    <NavLink
                    to = '/shoppingcart'
                    className ={({ isActive }) => isActive ? activeStyle : undefined}>
                        🛒
                    </NavLink>
                </li>
                
            </ul>
        </nav>
    )

}

export default Navbar;