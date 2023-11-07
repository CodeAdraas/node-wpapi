declare module 'wpapi' {
    interface Options {
        endpoint: string;
        username?: string;
        password?: string;
        nonce?: string;
        transport?: Transport;
        routes?: Routes;
    }
    type Transport = Record<string, any>
    type Credentials = {
        username: string;
        password: string;
        nonce?: string;
    }
    type HeadersDict = Record<string, string>
    type RouteOptions = Record<string, any>
    type Routes = Record<string, any>
    interface EndpointHandler {
        param(name: string, value: any): EndpointHandler;
    }
    interface WPAPI extends EndpointHandler {
        constructor(options: Options): WPAPI;
        transport(transport: Transport): WPAPI;
        url(url: string): any;
        root(relativePath: string): any;
        setHeaders(headers: string | HeadersDict): WPAPI;
        auth(credentials: Credentials): WPAPI;
        registerRoute(namespace: string, restBase: string, options: RouteOptions): WPAPI;
        bootstrap(routes: Routes): any;
        namespace(namespace: string): any;
        site(endpoint: string, routes: Routes[]): WPAPI;
        discover(url: string): Promise<WPAPI>;
    }
    var defaultExport: WPAPI
    export default defaultExport;
}