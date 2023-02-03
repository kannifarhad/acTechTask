export type OrganizationLisenseInfo = {
    inUse: {
        internal:number,
        external:number
    },
    assigned:number
}

export type OrganizationType = {
    id: string,
    name:string,
    image:string,
    tracking:OrganizationLisenseInfo,
    protection:OrganizationLisenseInfo,
}