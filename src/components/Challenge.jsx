import { useRef, useState } from "react"
import ResultModal from "./ResultModal"

const Challenge = ({level,targetTime}) =>{
    const [timerStarted, setTimerStarted] = useState(false) 
    const [remainingTime,setRemainingTime] = useState(targetTime*1000)

    const timer = useRef()
    const dialog = useRef()


    const ResetRemainingTime = () =>{
        setRemainingTime(targetTime*1000)
    }

    if(remainingTime <= 0){
        clearInterval(timer.current)
        dialog.current.open()
    }

    const handleStart = () =>{
       timer.current = setInterval(()=>{
            setRemainingTime((prevRemainigTime)=> {
                return prevRemainigTime-10})
            
       },10)
       setTimerStarted(true)
    }

    const handleStop  = () =>{
        dialog.current.open()
        setTimerStarted(false)
        clearInterval(timer.current)

    }

    return(
        <>
            <ResultModal targetTime={targetTime} result={ remainingTime>0?"Won":"Loss"} ref={dialog} remainingTime={remainingTime} resetTimer={ResetRemainingTime}/>
            <div className="challenge">
                <h2>{level}</h2>
                <p className="challenge-time"> {targetTime} Second{targetTime>1?"s":''}</p>
                <button type="button" onClick={timerStarted?handleStop:handleStart}>{timerStarted?"Stop":"Start"} Challenge</button>
                <p className={timerStarted?"active":""}>{timerStarted? "Timer is running": "Timer Inactive"}</p>
            </div>
        </>
        
    )
}

export default Challenge