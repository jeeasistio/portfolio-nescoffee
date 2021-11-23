import { connection, connect } from 'mongoose'

export const middleware = () => {
  if (connection.readyState >= 1) return

  connect(process.env.MONGO_URI)
}
