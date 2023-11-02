export type CustomFieldsResponse = {
    _total_items: number;
    _page:        number;
    _page_count:  number;
    _links:       Links;
    _embedded:    Embedded;
}

type Embedded = {
    custom_fields: CustomField[];
}

export type CustomField = {
    id:                number;
    name:              string;
    type:              Type;
    account_id:        number;
    code:              null | string;
    sort:              number;
    is_api_only:       boolean;
    enums:             Enum[] | null;
    group_id:          GroupID | null;
    required_statuses: any[];
    is_deletable:      boolean;
    is_predefined:     boolean;
    entity_type:       EntityType;
    tracking_callback: null;
    remind:            null;
    triggers:          any[];
    currency:          null;
    hidden_statuses:   any[];
    chained_lists:     null;
    _links:            Links;
}

type Links = {
    self: Self;
}

type Self = {
    href: string;
}

enum EntityType{
    Leads = "leads",
}

type Enum = {
    id:    number;
    value: string;
    sort:  number;
}

enum GroupID {
    Statistic = "statistic",
}

enum Type {
    Multiselect = "multiselect",
    TrackingData = "tracking_data",
    Select = 'select',
    Text = 'text',
    Data = 'data'
}