// Code your solution in this file!

function distanceFromHqInBlocks(street) {
  let hq = 42 
  return Math.abs(42 - street)
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(first, second) {
  let blocks = second - first
  return Math.abs(blocks) * 264
}

function calculatesFarePrice(first, second) {
  let distance = distanceTravelledInFeet(first, second)
  if (400 < distance && distance < 2000) {
    
  }
}