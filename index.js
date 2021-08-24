const config = {
    "alcyone": "v3.2.0",
    "itn": "v3.1.1",

    "pme": "tooling",
    "pmf": "staging",
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
