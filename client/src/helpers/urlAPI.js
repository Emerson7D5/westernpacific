export function getServerUrl() {
    const isDevelopment = process.env.NODE_ENV === 'production'
    return isDevelopment ? 'https://westernpacific.azurewebsites.net/' : 'https://westernpacific.azurewebsites.net/'
}
