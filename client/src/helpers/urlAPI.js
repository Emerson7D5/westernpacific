export function getServerUrl() {
    const isDevelopment = process.env.NODE_ENV === 'development'
    return isDevelopment ? 'https://westernpacific.azurewebsites.net/' : 'https://westernpacific.azurewebsites.net/'
}
