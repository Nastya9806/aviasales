export default class AviasalesApi {
  _baseUrl = 'https://aviasales-test-api.kata.academy'

  getSearchId = async () => {
    try {
      const res = await fetch(`${this._baseUrl}/search`)
      if (!res.ok) {
        throw new Error(`${res.status}`)
      }
      const body = await res.json()
      return body.searchId
    } catch (err) {
      throw new Error(err)
    }
  }

  getTickets = async (searchId) => {
    try {
      const res = await fetch(`${this._baseUrl}/tickets?searchId=${searchId}`)
      if (!res.ok) {
        return false
      }
      const body = await res.json()
      return body
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const Aviasales = new AviasalesApi()
