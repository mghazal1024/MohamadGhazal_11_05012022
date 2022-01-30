import React from 'react'
import './page404.scss'
import { Link } from 'react-router-dom'

class Page404 extends React.Component {
    render () {
        return (
            <section className='page-404__section'>
                <h1 className='large-heading'>404</h1>
                <h1>Oups! La page que vous demandez n'existe pas.</h1>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </section>
        )
    }
}

export default Page404