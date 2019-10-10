import React from 'react'

export default function HomeNews(props) {

  return (

    <div className="newsBox">
      <img
        src={props.src}
        className="homeNewsImage"
      />
      <p className="homeNewsTitle">
        {props.title}
      </p>
      <p className="homeNewsDescription">
        {props.description}
      </p>
    </div>

  )
}