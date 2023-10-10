declare module 'wpapi' {
    interface Options {
        endpoint: string;
        username?: string;
        password?: string;
        nonce?: string;
        transport?: Transport;
        routes?: Routes;
    };
    type Transport = Record<string, any>;
    type Credentials = {
        username: string;
        password: string;
        nonce?: string;
    };
    type HeadersDict = Record<string, string>;
    type RouteOptions = Record<string, any>;
    type Routes = Record<string, any>;
    interface WPRequest {
        [x: string]: any;
    };
    interface EndpointHandler {
        [routeOrAction: string]: WPRequest;
    };
    export interface WPAPI extends EndpointHandler {
        constructor(options: Options): WPAPI;
        transport(transport: Transport): WPAPI;
        url(url: string): WPRequest;
        root(relativePath: string): WPRequest;
        setHeaders(headers: string | HeadersDict): WPAPI;
        auth(credentials: Credentials): WPAPI;
        registerRoute(namespace: string, restBase: string, options: RouteOptions): WPAPI;
        bootstrap(routes: Routes): WPAPI;
        namespace(namespace: string): EndpointHandler;
        site(endpoint: string, routes: Route[]): WPAPI;
    };
};