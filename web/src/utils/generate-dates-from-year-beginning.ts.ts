import dayjs from "dayjs";

export function generateDatesFromYearBeginning(){
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let comparteDate = firstDayOfTheYear

    while(comparteDate.isBefore(today)){
        dates.push(comparteDate.toDate())
        comparteDate = comparteDate.add(1,'day')
    }
    return dates
}