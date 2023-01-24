import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'
import './styles/global.css'
//import { Habit } from "./components/Habit";


export function App() {
  return (
    //Div principal com scrren completo, div central com largura máxima para telas menores que 5xl, gap espacamento 16 entre da coluna flex
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-full max-w-5xl px-6 flex-col gap-8'> 
          <Header/>
          <SummaryTable />
      </div>
    </div>
     
  )
}
