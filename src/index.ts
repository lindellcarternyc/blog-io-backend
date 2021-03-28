/**
 * Required External Modules
 */
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

dotenv.config()
/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1)
}

const PORT = parseInt(process.env.PORT)

const app = express()

/**
 *  App Configuration
 */

app.use(helmet())
app.use(cors())
app.use(express.json())

/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`[server]: Listening on port: ${PORT}`)
})