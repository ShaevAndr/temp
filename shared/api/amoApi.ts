import queryString from "query-string"
import { CustomField, CustomFieldsResponse } from "./types/fields.types"
import { Lead, LeadsTypeResponse } from "./types/leads.type"

type RequestParams = {
    page?: number,
    limit?: number,
    filters?: string[],
}


type CustomFieldNames = {
    [key:string]:string[]
}

function getQueryString(entity: string, params:RequestParams): string {
    const queryParams = queryString.stringify(params, {arrayFormat:"index"})
    return `api/v4/${entity}?page=${queryParams}`
}

function getCustomFieldNames (fields:CustomField[]): CustomFieldNames{
    const names = fields.map(field=>field.name)
    const type = fields[0].type
    return {[type]:names} 
}

async function getCustomFields(params: RequestParams): Promise<CustomField[]|[]> {
    try {
        const queryString = getQueryString('leads/custom_fields', params)
        const response:CustomFieldsResponse= await fetch(queryString).then(data => data.json())
        const customFields = [...response._embedded.custom_fields]
        return customFields
    } catch (err) {
        return []
    }

}

// function decorator(callback:()=>T, subdomain: string, params?: Params):T{
//     let page = 1
//     const limit = params?.limit || 250
//     callback(subdomain)

// }

async function getDeals(params:RequestParams):Promise<Lead[]|[]> {
    try {
        const queryString = getQueryString('leads/', params)
        const response:LeadsTypeResponse= await fetch(queryString).then(data => data.json())
        const leads = [...response._embedded.leads]
        return leads
    } catch (err) {
        return []
    }
}