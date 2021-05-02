import { LatLng } from 'leaflet'
import Data from '../data/cities'

export const getUniqueItems = (arr, key) => {
  const items = []
  for (const item of arr) {
    const itemName = item[key]
    if (!isIncludes(items, key, itemName)) {
      items.push(item)
    }
  }
  console.log(items)
  return items
}
export const reAssign = (arr, item) => {
  for (const index in arr) {
    const arrItem = arr[index]

    if (item.distance < arrItem.distance) {
      console.log('item', item)
      console.log('arrItem.distance', arrItem.distance)
      console.log('newArr', arr)
      arr[index] = { ...item }
      break
    }
  }
  return arr
}
export function isIncludes(arr, key, itemName) {
  for (const item of arr) {
    if (item[key] === itemName) {
      return true
    }
  }

  return false
}

export function getLowestDistance(location, uniqueCities) {
  const { lat, lng } = location
  const latLng = new LatLng(lat, lng)
  let distances = []

  const lowestLocationCount = 3
  const uniqueCounties = getUniqueItems(Data, 'county')
  console.log('Data', Data)
  console.log('uniqueCounties', uniqueCounties)

  let i = 0
  for (; i < lowestLocationCount; i++) {
    const item = uniqueCounties[i]

    const distance = latLng.distanceTo({
      lat: item.centerLat,
      lng: item.centerLon,
    })
    distances.push({ ...item, distance })
  }
  for (; i < uniqueCities.length; i++) {
    const item = uniqueCities[i]
    const { centerLat, centerLon } = item
    const distance = latLng.distanceTo({
      lat: centerLat,
      lng: centerLon,
    })

    reAssign(distances, { ...item, distance })
  }

  return distances
}
