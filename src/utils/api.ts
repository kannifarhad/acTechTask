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
                internal: faker.datatype.number({ min:500, max: 600 }),
                external: faker.datatype.number({ min:500, max: 600 }),
            },
            assigned:faker.datatype.number({min:1200, max: 1500}),
        },
        protection:{
            inUse: {
                internal: faker.datatype.number({ min:100, max: 150 }),
                external: faker.datatype.number({ min:100, max: 140 }),
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