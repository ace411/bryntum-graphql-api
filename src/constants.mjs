import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

/** @var string TEMP untracked registry directory */
export const TEMP = `${__dirname}/../tmp`

/** @var string TODOS untracked registry file  */
export const TODOS = `${TEMP}/todos.json`
