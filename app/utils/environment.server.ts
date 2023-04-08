function getClientEnv() {
  return {
    DIRECTUS_CMS_API_URL: process.env.DIRECTUS_CMS_API_URL,
  }
}

type ENV = ReturnType<typeof getClientEnv>

// entry.server sets this global value
// root.tsx injects it into the window
declare global {
  // eslint-disable-next-line
  var ENV: ENV
  interface Window {
    ENV: ENV
  }
}

export { getClientEnv }
