export class ReportResult {
    time :Date;
    totalCredit: Number;
    
    constructor(time:Date, totalCredit:Number) {
        this.time = time;
        this.totalCredit = totalCredit
    }
}