import React, { useState, useEffect } from 'react'
import './PlanetInfo.css';

import data from './data/data';
import EarthImg from './assets/planet-earth.svg'
import EarthIntImg from './assets/planet-earth-internal.svg'
import MarsImg from './assets/planet-mars.svg'
import MarsIntImg from './assets/planet-mars-internal.svg'
import VenusImg from './assets/planet-venus.svg'
import VenusIntImg from './assets/planet-venus-internal.svg'
import UranusImg from './assets/planet-uranus.svg'
import UranusIntImg from './assets/planet-uranus-internal.svg'
import JupiterImg from './assets/planet-jupiter.svg'
import JupiterIntImg from './assets/planet-jupiter-internal.svg'
import SaturnImg from './assets/planet-saturn.svg'
import SaturnIntImg from './assets/planet-saturn-internal.svg'
import NeptuneImg from './assets/planet-neptune.svg'
import NeptuneIntImg from './assets/planet-neptune-internal.svg'
import MercuryImg from './assets/planet-mercury.svg'
import MercuryIntImg from './assets/planet-mercury-internal.svg'
import SourceIcon from './assets/icon-source.svg'

let planetImg = {
    earth: EarthImg,
    earthInt: EarthIntImg,
    mars: MarsImg,
    marsInt: MarsIntImg,
    jupiter: JupiterImg,
    jupiterInt: JupiterIntImg,
    venus: VenusImg,
    venusInt: VenusIntImg,
    saturn: SaturnImg,
    saturnInt: SaturnIntImg,
    uranus: UranusImg,
    uranusInt: UranusIntImg,
    neptune: NeptuneImg,
    neptuneInt: NeptuneIntImg,
    mercury: MercuryImg,
    mercuryInt: MercuryIntImg
  }

const PlanetInfo = ( { pageName }) => {

//variable to store planet data from data.js file
let planet = data.find(p => p["name"] === pageName);

let activeData = planet.overview

const [info, setInfo] = useState(activeData)
const [imgData, setImgData] = useState(planetImg[planet.name.toLowerCase()])
const [geoState, setGeoState] = useState('hideGeo')
const [srcMover, setSrcMover] = useState('src-static')
const [overBtn, setOverBtn] = useState('deactive-btn')
const [structureBtn, setStructureBtn] = useState('deactive-btn')
const [geoBtn, setGeoBtn] = useState('deactive-btn')

//useEffect hook that displays overview section of the selected planet and changes with routes

useEffect(() => {
  overviewHandler()
}, [pageName])

//function to display overview data
const overviewHandler = () => {
    setInfo(planet.overview)
    setInfo(planet.overview)
    setImgData(planetImg[planet.name.toLowerCase()])
    setGeoState('hideGeo')
    setSrcMover('src-static')
    setOverBtn('active-btn')
    setStructureBtn('deactive-btn')
    setGeoBtn('deactive-btn')
}

//function to display structure data
const structureHandler = () => {
  setInfo(planet.structure)

  setImgData(planetImg[planet.name.toLowerCase() + 'Int'])
  setGeoState('hideGeo')
  setSrcMover('src-static')
  setGeoBtn('deactive-btn')
  setOverBtn('deactive-btn')
  setStructureBtn('active-btn')

}

//function to display geological data
const geologyHandler = () => {
  setInfo(planet.geology)
  setGeoState('displayGeo')
  setSrcMover('src-mover')
  setGeoBtn('active-btn')
  setOverBtn('deactive-btn')
  setStructureBtn('deactive-btn')
}

return (
  <div className="planet">

{/* Buttons that show data in mobile view */}
<div className="btn-responsive"> 
<button className={`btn ${overBtn}`} onClick={overviewHandler}>OVERVIEW</button>
    <button className={`btn ${structureBtn}`} onClick={structureHandler}>STRUCTURE</button>
    <button className={`btn ${geoBtn}`} onClick={geologyHandler}>GEOLOGY</button>
    </div>
 <div className="wrapper"> 
      <div className="planet-image">
    <img className={`planet-image__src ${srcMover}`} src={imgData} alt={`${planet.name} image`} />
    <img className={`planet-image__geo ${geoState}`} src={`/images/geology-${planet.name.toLowerCase()}.png`}/>
    </div>

    <div className="planet-info">
    <div className="planet-info__text">
    <h1 className="planet-name">{planet.name.toUpperCase()}</h1>
    <p className="planet-content">{info.content}</p>
    <span>
      Source: 
    <a className="planet-link" href={info.source} target="__target">Wikipedia <span><img src={SourceIcon} alt="" /></span></a>
    </span>
    </div>
    <div className="btn-container"> 
    <button className={`btn ${overBtn}`} onClick={overviewHandler}>OVERVIEW</button>
    <button className={`btn ${structureBtn}`} onClick={structureHandler}>STRUCTURE</button>
    <button className={`btn ${geoBtn}`} onClick={geologyHandler}>GEOLOGY</button>
    </div>
    </div>
</div> 
     <div className="planet-data">
      <div className="data-card">
        <p>ROTATION</p>
        <h2>{planet.rotation.toUpperCase()}</h2>
        </div>
        <div className="data-card">
        <p>REVOLUTION TIME</p>
        <h2>{planet.revolution.toUpperCase()}</h2>
        </div>
        <div className="data-card">
        <p>RADIUS</p>
        <h2>{planet.radius.toUpperCase()}</h2>
        </div>
        <div className="data-card">
        <p>TEMPERATURE</p>
        <h2>{planet.temperature.toUpperCase()}</h2>
        </div>
    </div> 
  </div>
)}

export default PlanetInfo