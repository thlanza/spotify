import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg';
import { Link } from 'react-router-dom'

const Playlists = (props) => {
    const dataPlayLists = [
        {
            id: 101,
            category_id: 1,
            name: 'Foco',
            img: 'https://images.unsplash.com/photo-1597796071928-dbf542b1f8ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80',
            des: '#ForaBolsonaro'
        },
        {
            id: 102,
            category_id: 2,
            name: 'Seu humor',
            img: 'https://images.unsplash.com/photo-1591162689269-a3fcdab967e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80',
            des: 'Anarquismo já'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Trilha sonora da sua casa',
            img: 'https://images.unsplash.com/photo-1597796071942-0e14cb1a634f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1017&q=80',
            des: 'Revolução Popular'
        },
        {
            id: 104,
            category_id: 4,
            name: 'Detone este domingo',
            img: 'https://images.unsplash.com/photo-1598368925344-3cc3fb03f710?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1833&q=80',
            des: 'Desobjetificação'
        },
        {
            id: 105,
            category_id: 1,
            name: 'Foco',
            img: 'https://images.unsplash.com/photo-1598316942172-787d747ab9ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            des: 'High Technology'
        },
        {
            id: 106,
            category_id: 3,
            name: 'Trilha sonora da sua casa',
            img: 'https://images.unsplash.com/photo-1585130640692-cf130195ca1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
            des: 'Ultra Robots'
        },
        {
            id: 107,
            category_id: 3,
            name: 'Trilha sonora da sua casa',
            img: 'https://images.unsplash.com/photo-1580005197212-3ac705265ee4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
            des: 'Escuridão'
        },
    ]

    const matchedPlayLists = dataPlayLists.filter(playlist => playlist.category_id === props.category_id);
    
                return (
                    <div className="cardsWrapInner">
                        {matchedPlayLists.map((playlist, id) => (
                                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/playlist/` + playlist.id }>
                                 <div className="card" key={id}>
                                 <div className="cardImage">
                                     <img src={playlist.img}
                                     alt="Pic1"/>
                                 </div>
                                 <div className="cardContent">
                                     <h3>{playlist.name}</h3>
                                     <span>{playlist.des}</span>
                                 </div>
                                 <span className="playIcon">
                                     <PlayIcon />
                                 </span>
                             </div>
                             </Link>
                        ))}
                
             
                
                </div>

    )
}

export default Playlists;