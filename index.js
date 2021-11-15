const config = {
    "alcyone": "v3.3.0",
    "itn": "v3.3.0",
    "testnet": "v4.0.0",
    "mainnet": "v4.0.0",

    "pme": "develop",
    "pmf": "v3.3.0",
    "dev": "develop"
}

const baseURL = 'https://raw.githubusercontent.com/PolymathNetwork/Polymesh/';
const schemaPath = '/polymesh_schema.json';
const statusCode = 302;

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
    const url = new URL(request.url);
    const requestedTarget = url.pathname.split('/')[1];
    const target = config[requestedTarget] || requestedTarget || "alcyone";
    const destinationURL = baseURL + target + schemaPath;

    return Response.redirect(destinationURL, statusCode);
}
