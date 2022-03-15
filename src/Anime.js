import React from "react"

export default function Anime (props){

    const styles= {
        backgroundColor: props.currentID===props.id?props.color:"rgb(245, 242, 239)"
        
    }

    const textStyle={
        color:props.currentID===props.id?"white":"rgb(107, 105, 105)"
    }

    
    return (

        <div className="m--wrapper">
            <div className="anime--card--wrapper" style={styles} onClick={()=>props.toggleFunction(props.id)}>
                <div className="anime--info--container">
                    <img className="anime--image" src= {props.attributes.posterImage.original} />
                    <div className="anime--info">
                        <div className="title--div">
                            <h1 style={textStyle}>{props.attributes.titles.en}</h1>
                            <h3 style={textStyle}>{props.attributes.titles.en_jp}</h3>
                        </div>
                        
                        <div className="rank--details--div">
                            <h2 style={textStyle}>Synopsis</h2>
                            <div className="rank--right">
                                <p style={textStyle}><span>Rating Rank: </span> {props.attributes.ratingRank}</p>
                                <p style={textStyle}><span>Popularity Rank:</span> {props.attributes.popularityRank}</p>
                                <p style={textStyle}><span>Age Rating Guide:</span> {props.attributes.ageRatingGuide}</p>
                            </div>
                            
                        </div>
                        <p className="description " style={textStyle}>{props.attributes.synopsis}</p>
                    </div>
                </div>
                <div className="info--wrapper">
                    <div className="average--rating">
                        <p>Average Rating: {props.attributes.averageRating}</p>
                    </div>
                    <div className="info--container">
                        <div className="top--info">
                            <p style={textStyle}><span className="span--bold">Show type:</span>{props.attributes.subType}</p>
                            <p style={textStyle}><span className="span--bold">Episode Count:</span> {props.attributes.episodeCount}</p>
                            <p style={textStyle}><span className="span--bold">Japanese Title</span>{props.attributes.titles.ja_jp}</p>
                            <p style={textStyle}><span className="span--bold">Status:</span> {props.attributes.status}</p>
                        </div>
                        <div className="bottom--info">
                            <p style={textStyle}><span className="span--bold">Start Date:</span>{props.attributes.startDate}</p>
                            <p style={textStyle}><span className="span--bold">End Date:</span>{props.attributes.endDate}</p>
                            <p style={textStyle}><span className="span--bold">Age Rating</span>{props.attributes.ageRatingGuide}</p>
                            <p style={textStyle}><a  style={textStyle} className="trailer" href={`https://www.youtube.com/watch?v=${props.attributes.youtubeVideoId}`} target="_blank"><span className="span--bold">Watch Trailer</span ></a></p>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>

        
    )
}