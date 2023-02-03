import { faker } from '@faker-js/faker';
import { OrganizationType } from '../types';

/**
 * @description Creates single organization dump data
 * @return {OrganizationType}
 */
export const createOrganization = (): OrganizationType=>{
    return {
        id: faker.datatype.uuid(),
        name:faker.company.name(),
        image:faker.image.abstract(100, 100),
        tracking:{
            inUse: {
                internal: faker.datatype.number({ min:600, max: 800 }),
                external: faker.datatype.number({ min:600, max: 800 }),
            },
            assigned:faker.datatype.number({min:1000, max: 1200}),
        },
        protection:{
            inUse: {
                internal: faker.datatype.number({ min:10, max: 50 }),
                external: faker.datatype.number({ min:10, max: 100 }),
            },
            assigned:faker.datatype.number({min:300, max: 900 }),
        },
    }
}

/**
 * @description Creates random amount of dump organizations
 * @return {OrganizationType[]}
 */
export const createOrganizationList = ():OrganizationType[]=> {
    return faker.datatype.string().split('').map(_=>createOrganization());
}

/**
 * @description Searchs organizations with the given search name
 * @return {OrganizationType[]}
 */
export const searchOrganization = (name: string):OrganizationType[]=> {
    return faker.datatype.string().split('').map(_=>createOrganization());
}