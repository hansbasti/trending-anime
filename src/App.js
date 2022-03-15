import React from "react"
import Header from "./Header"
import Anime from "./Anime"
import Footer from "./Footer"
import "./index.css"
export default function App (){
    const [trendingAnime, setTrendingAnime]=React.useState([])
    const [currentID, setCurrentID] = React.useState(trendingAnime.id)
    const [color,setColor] = React.useState("")
    console.log(currentID)
  
    function toggleID (id){
        setCurrentID(prevCurrentID => {
            return  prevCurrentID=id
        })
        setColor(`rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        )

    }

    React.useEffect(()=> {
        fetch ("https://kitsu.io/api/edge/trending/anime/")
            .then (res => res.json())
            .then (trendingAnimeData => setTrendingAnime(trendingAnimeData.data))
    },[])
    const animeList = trendingAnime.map(items => {
        return (
            <Anime
                id={items.id}
                toggleFunction={toggleID} 
                key={items.id}
                {...items}
                currentID={currentID}
                color={color}
            />
        )
    })
    return (
        <div>
            <Header />
            <div className="anime--list">
                {animeList}
            </div>
            
            {/* <pre>{JSON.stringify(trendingAnime, null, 3)}</pre> */}
            <Footer />
        </div>
    )
}