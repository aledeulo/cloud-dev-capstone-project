
const apiId = process.env.REACT_APP_API_ID
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  domain: process.env.REACT_APP_AUTH_DOMAIN,            // Auth0 domain
  clientId: process.env.REACT_APP_CLIENT_ID,          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
