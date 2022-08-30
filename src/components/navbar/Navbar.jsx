import React from 'react'

// 6. Import Context-nya
import { AppContext } from '../../context/AppContext'
import {
    Link
} from 'react-router-dom'

const Navbar = () => {

    // 7. definisikan variable menggunkan const lalu assign dengan menggunakan library React.useContext(namacontext)
    const context = React.useContext(AppContext)

    return (
        <>  
            Navbar {context.theme}
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/gallery"}>Gallery</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar
