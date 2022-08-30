import React from 'react'
import { AppContext } from '../../context/AppContext'

const Home = () => {

    const context = React.useContext(AppContext)

    return (
        <div>
            Home {context.theme}
        </div>
    )
}

export default Home
