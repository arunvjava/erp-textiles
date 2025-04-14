export interface PageableResponse<T> {
    status: number;
    respObj: PageModel<T>;
    message: string;
}

interface PageModel<T> {
    links: {
        rel: string;
        href: string;
    },
    content: T;
    page: {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    }
}