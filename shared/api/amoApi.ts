type RequestParams = {
    page?: number,
    limit?: number,
    filters?: string[],
}

function createFilterString(filters: Filters[]): string {
    let result = ''
    for (let filter of filters) {
        Object.keys(filter).map(key => result += `&${key}=${filter[key]}`)
    }
    return result
}

function getQueryString(entity: string, otherParams: string, page: number = 1, limit: number = 250): string {
    return `api/v4/${entity}?page=${page}&limit=${limit}${otherParams}`
}

function getCustomFields(params: RequestParams): string {
    const filters = params.filters?.length ? createFilterString(params.filters) : ''
    let page = params.page ? params.page : 1
    const limit = params.limit ? params.limit : 250
    const queryString = getQueryString('leads/custom_fields', filters, page, limit)
    // const res = fetch(queryString).then(data => data.json())
    return queryString

}

// function decorator(callback:()=>T, subdomain: string, params?: Params):T{
//     let page = 1
//     const limit = params?.limit || 250
//     callback(subdomain)

// }
console.log(getCustomFields(
    { filters: [{ 'filter[type][0]': 'text' }] },
))