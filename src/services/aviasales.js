export default class ServiseAviasales {
    _baseUrl = 'https://aviasales-test-api.kata.academy'
  
    getSearchId = async () => {
      const res = await fetch(`${this._baseUrl}/search`)
      if (!res.ok) {
        throw new Error(`Error, status ${res.status}`)
      }
      const body = await res.json()
      return body.searchId
    }
  
    getTickets = async (searchId) => {
      const res = await fetch(`${this._baseUrl}/tickets?searchId=${searchId}`)
      if (!res.ok) {
        return false
      }
      const body = await res.json()
      return body
    }
  }
  
  export const AviaSalesService = new ServiseAviasales()