import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning.ts"
import { HabitDay } from "./HabitDay"

const weekDays = ["D","S","T","Q","Q","S","S"]

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7 //18 semanas
const amountOfDays = minimumSummaryDatesSize - summaryDates.length

export function SummaryTable(){
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDays,i) => {
                    return(
                        <div key={`${weekDays}-${i}`} className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center">
                            {weekDays}
                        </div>
                    )
                } )}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3 py-2">
                {summaryDates.map(date => {
                    return <HabitDay key={date.toISOString()}/>
                })}
                {amountOfDays > 0 && Array.from({length: amountOfDays}).map((_,i) => {
                    return (
                    <div key={i} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"> </div>
                    )
                })}
            </div>
        </div>
    )
}