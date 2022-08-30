import React from 'react'
import { AppContext } from '../../context/AppContext'

const Gallery = () => {

    const context = React.useContext(AppContext)

    return (
        <div>
            Gallery {context.theme}
        </div>
    )
}

export default Gallery
