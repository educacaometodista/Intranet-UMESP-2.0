import React from 'react'

export default function HomeNews(props) {

  return (

    <div className="newsBox">
      <img
        src={props.src}
        className="homeNewsImage"
        alt="Teste"
      />
      <p className="homeNewsTitle">
        {props.title}
      </p>
    </div>

  )
}
