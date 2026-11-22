import type { InertiaLinkProps } from '@inertiajs/vue3';

export type SimplePagination<T> = {
    current_page: number;
    current_page_url: NonNullable<InertiaLinkProps['href']>;
    data: Array<T>;
    first_page_url: NonNullable<InertiaLinkProps['href']>;
    from?: number;
    next_page_url?: InertiaLinkProps['href'];
    path?: InertiaLinkProps['href'];
    per_page?: number;
    prev_page_url?: InertiaLinkProps['href'];
    to?: number;
};

export type Pagination<T> = {
    current_page: number;
    data: Array<T>;
    first_page_url?: InertiaLinkProps['href'];
    from?: number;
    last_page: number;
    last_page_url?: InertiaLinkProps['href'];
    links: Array<PaginationLink>;
    next_page_url?: InertiaLinkProps['href'];
    path?: InertiaLinkProps['href'];
    per_page?: number;
    prev_page_url?: InertiaLinkProps['href'];
    to?: number;
    total?: number;
};

export type PaginationLink = {
    active: boolean;
    label: number;
    page: number;
    url: NonNullable<InertiaLinkProps>['href'];
};
