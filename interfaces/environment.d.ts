/* eslint-disable no-unused-vars */
type EnvKeys = 'MONGO_URI' | 'GOOGLE_USER' | 'GOOGLE_PASS' | 'ADMIN_USER'

type EnvTypes = Record<EnvKeys, string>

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvTypes {
      NODE_ENV: 'development' | 'production'
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
