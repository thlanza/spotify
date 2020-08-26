import React from 'react';
import { useParams } from 'react-router-dom'

const PlaylistPage = () => {
    let {id} = useParams();
    return (
       <div className="playlistPage">
           <div className="mainInner">
           <div className="playlistPageInfo">
               <div className="playlistPageImage">
                   <img src="https://images.unsplash.com/photo-1597796071928-dbf542b1f8ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1082&q=80"
                   alt="pic" />
               </div>
         
           <h1>Title</h1>
           <p>Spotify</p>
           <button>Play</button>
           <div className="icons">
               <div className="iconsHeart">

               </div>
               <div className="iconsDots">
                   
               </div>
           </div>
           <p>Minimalismo, eletrônica, e música clássica moderna para se concentrar ouvindo.</p>
           </div>
           <div className="playlistPageSongs">
               <ul>
                   <li>Música um</li>
                   <li>Música dois</li>
                   <li>Música três</li>
                   <li>Música quatro</li>
                   <li>Música cinco</li>
               </ul>
           </div>
       </div>
    </div>
    )
}

export default PlaylistPage;