/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { Pet } from '../models/Pet';
import type { Pets } from '../models/Pets';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PetsService {

    /**
     * List all pets
     * @param limit How many items to return at one time (max 100)
     * @returns Pets A paged array of pets
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static listPets(
        limit?: number,
    ): CancelablePromise<Pets | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pets',
            query: {
                'limit': limit,
            },
        });
    }

    /**
     * Create a pet
     * @returns Error unexpected error
     * @returns any Null response
     * @throws ApiError
     */
    public static createPets(): CancelablePromise<Error | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/pets',
        });
    }

    /**
     * Info for a specific pet
     * @param petId The id of the pet to retrieve
     * @returns Pet Expected response to a valid request
     * @returns Error unexpected error
     * @throws ApiError
     */
    public static showPetById(
        petId: string,
    ): CancelablePromise<Pet | Error> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pets/{petId}',
            path: {
                'petId': petId,
            },
        });
    }

}
