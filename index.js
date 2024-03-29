const config = {
    "staging": "v6.0.0",
    "testnet": "v6.0.0",
    "mainnet": "v6.0.0",
    "dev": "develop"
}

const baseURL = 'https://raw.githubusercontent.com/PolymeshAssociation/Polymesh/';
const schemaPath = '/polymesh_schema.json';
const statusCode = 302;

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    const requestedTarget = url.pathname.split('/')[1];
    const target = config[requestedTarget] || requestedTarget || "mainnet";
    const destinationURL = baseURL + target + schemaPath;

    return Response.redirect(destinationURL, statusCode);
}
