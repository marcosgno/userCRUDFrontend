import { SpringSort } from './spring-sort';

export class SpringListResponse<T> {

    size: number;
    number: number;
    last: boolean;
    first: boolean;
    totalPages: number;
    totalElements: bigint;
    sort: SpringSort;

    content: T[];
}
