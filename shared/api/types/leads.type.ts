export type LeadsTypeResponse = {
    _page:     number;
    _links:    Links;
    _embedded: LeadsEmbedded;
}

type LeadsEmbedded = {
    leads: Lead[];
}

export type Lead = {
    id:                   number;
    name:                 string;
    price:                number;
    responsible_user_id:  number;
    group_id:             number;
    status_id:            number;
    pipeline_id:          number;
    loss_reason_id:       null;
    created_by:           number;
    updated_by:           number;
    created_at:           number;
    updated_at:           number;
    closed_at:            number | null;
    closest_task_at:      number | null;
    is_deleted:           boolean;
    custom_fields_values: null;
    score:                number | null;
    account_id:           number;
    labor_cost:           number;
    is_price_computed:    boolean;
    _links:               Links;
    _embedded:            LeadEmbedded;
}

type LeadEmbedded = {
    tags:      Tag[];
    companies: Company[];
}

type Company = {
    id:     number;
    _links: Links;
}

type Links = {
    self: Self;
}

type Self = {
    href: string;
}

type Tag = {
    id:    number;
    name:  string;
    color: null | string;
}
