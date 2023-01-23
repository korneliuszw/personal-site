import GhostClient from '@tryghost/content-api'
export const ghostClient = new GhostClient({
    url: import.meta.env.CONTENT_API_URL,
    key: import.meta.env.CONTENT_API_KEY,
    version: 'v5'
})