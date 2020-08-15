import { serve } from 'https://deno.land/std/http/server.ts'
import { createReportFromFile } from './services/ReportCreator.ts'
const s = serve({ port: 8000 })
console.log('http://localhost:8000/')
for await (const req of s) {
  req.respond({ body: JSON.stringify(createReportFromFile("")) })
}