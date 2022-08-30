import React from 'react'
import { AppContext } from '../../context/AppContext'

const Badge = () => {

    const context = React.useContext(AppContext)

    return (
        <>
            Badge {context.lang}
        </>
    )
}

export default Badge
