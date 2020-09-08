const ADD_FEATURE = 'ADD_FEATURE'
const RETURN_PRICE = 'RETURN_PRICE'

export const addFeature = (feature) => {
  return {
    type: ADD_FEATURE,
    payload: feature
  }
}