import React from 'react';
import Playlists from './Playlists';

const Categories = () => {

    const dataCategories = [
        {
            id: 1,
            name: 'Foco',
            tagline: 'Música para ajudar você a concentrar'
        },
        {
            id: 2,
            name: 'Seu humor',
            tagline: 'Playlists que se encaixam com o seu humor'
        },
        {
            id: 3,
            name: 'Trilha sonora da sua casa',
            tagline: ''
        },
        {
            id: 4,
            name: 'Detone neste Domingo...',
            tagline: ''
        }
    ]
    return (
        <div className="mainInner">
            {dataCategories.map((category, id) => (
                            <div className="cardsWrap" key={id}>
                            <h2>{category.name}</h2>
                            {/* <span className="seeAll">VER TUDO</span> */}
                            <p className="subText">{category.tagline}</p>
                            <Playlists category_id={category.id} />

                            </div>
            ))}

        </div>
        
        
 
    )
}

export default Categories;





















           {/* <div className="cardsWrap">
                <h1>Unicamente seu</h1>
                    <div className="card">
                        <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1506564461966-4107c88f6d29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1015&q=80" 
                            alt="Pic1"/>
                        </div>
                        <div className="cardContent">
                            <h3>Musicas curtidas</h3>
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                </div> */}