import queryString from "query-string"

type RequestParams = {
    page?: number,
    limit?: number,
    filters?: string[],
}

type CustomFields = {
    type: string,
    name: string
}

type CustomFieldNames = {
    [key:string]:string[]
}

function getQueryString(entity: string, params:RequestParams): string {
    const queryParams = queryString.stringify(params, {arrayFormat:"index"})
    return `api/v4/${entity}?page=${queryParams}`
}

function getCustomFieldNames (response:CustomFields[]): CustomFieldNames{
    const names = response.map(field=>field.name)
    const type = response[0].type
    return {[type]:names} 
}

async function getCustomFields(params: RequestParams): Promise<CustomFields[]|[]> {
    try {
        const queryString = getQueryString('leads/custom_fields', params)
        const response:CustomFields= await fetch(queryString).then(data => data.json())
        return getCustomFieldNames(response)
    } catch (err) {
        return []
    }

}

// function decorator(callback:()=>T, subdomain: string, params?: Params):T{
//     let page = 1
//     const limit = params?.limit || 250
//     callback(subdomain)

// }
console.log(getCustomFields(
    { filters: [{ 'filter[type][0]': 'text' }] },
))