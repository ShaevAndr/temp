function createFilterString(filters) {
    var result = '';
    var _loop_1 = function (filter) {
        Object.keys(filter).map(function (key) { return result += "&".concat(key, "=").concat(filter[key]); });
    };
    for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
        var filter = filters_1[_i];
        _loop_1(filter);
    }
    return result;
}
function getQueryString(subdomain, entity, otherParams, page, limit) {
    if (page === void 0) { page = 1; }
    if (limit === void 0) { limit = 250; }
    return "".concat(subdomain, ".amocrm.ru/api/v4/").concat(entity, "?page=").concat(page, "&limit=").concat(limit).concat(otherParams);
}
function getCustomFields(subdomain, params) {
    var _a;
    var filters = ((_a = params.filters) === null || _a === void 0 ? void 0 : _a.length) ? createFilterString(params.filters) : '';
    var page = params.page ? params.page : 1;
    var limit = params.limit ? params.limit : 250;
    var queryString = getQueryString(subdomain, 'leads/custom_fields', filters, page, limit);
    // const res = fetch(queryString).then(data => data.json())
    return queryString;
}
// function decorator(callback:()=>T, subdomain: string, params?: Params):T{
//     let page = 1
//     const limit = params?.limit || 250
//     callback(subdomain)
// }
console.log(getCustomFields('keypro', { filters: [{ 'filter[type][0]': 'text' }] }));
