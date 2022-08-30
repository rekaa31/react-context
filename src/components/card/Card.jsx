import React from 'react'
import { AppContext } from '../../context/AppContext'

const Card = ({
    lang
}) => {

    const context = React.useContext(AppContext)

    return (
        <>
            {(context.lang === "en") || (lang === "en") ? "Card" : "Kartu"}
            {context.theme === "dark" ? "Dark Mode" : "Light Mode"}

        </>
    )
}

export default Card
