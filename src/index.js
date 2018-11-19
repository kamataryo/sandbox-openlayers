import Map from 'ol/Map'
import View from 'ol/View'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'

const baseMap = new Tile({ source: new OSM() })
const worldView = new View({ center: [0, 0], zoom: 3 })

const map = new Map({
  target: 'map',
  layers: [baseMap],
  view: worldView
})
