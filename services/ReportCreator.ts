
import {ReportResult} from '../models/ReportResult.ts'
export function createReportFromFile(filePath:String) : ReportResult{
    return {time: new Date(), totalCredit:1000} as ReportResult
}