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
