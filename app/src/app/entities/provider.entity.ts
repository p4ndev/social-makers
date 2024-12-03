type ProviderEagerResponse = {
    secure_url : string
}

type ProviderResponse = {
    asset_id    : string,
    secure_url  : string,
    eager       : Array<ProviderEagerResponse>
};

export {
    ProviderEagerResponse,
    ProviderResponse
}