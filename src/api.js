let BASE = 'https://api.b7web.com.br/devsfood/api'

export default {
  getCategories: async () => {
    // GET /categories
    const res = await fetch(BASE + '/categories')
    const json = await res.json()

    return json
  },
  getProducts: async (category, page, search) => {
    // GET /products ([search, page , category])

    let fields = {}

    category !== 0 && (fields.category = category)
    page > 0 && (fields.page = page)
    search !== '' && (fields.search = search)

    let qs = new URLSearchParams(fields).toString()

    const res = await fetch(BASE + '/products?' + qs)
    const json = await res.json()

    return json
  },
}
