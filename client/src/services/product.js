import api from './apiConfig'

export const getProducts = async () => {
  try {
    const response = await api.get("/products")
    return response.data
  } catch (error) {
    throw error
  }
}

export const getProduct = async id => {
  try {
    const response = await api.get(`/products/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const createProduct = async product => {
  try {
    const response = await api.post('/products', product)
    return response.data
  } catch (error) {
    throw error
  }
}

export const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/products/${id}`, product)
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteProduct = async id => {
  try {
    const response = await api.delete(`/products/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getNewArrivals = async () => {
  try {
    const response = await api.get('/search/newarrivals')
    return response.data
  } catch (error) {
    throw error
  }
}

export const getSearchProducts = async (term) => {
  try {
    const response = await api.get(`searching/${term}`)
    return response.data
  } catch (error) {
    throw error
  }
}