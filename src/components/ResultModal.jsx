import { forwardRef, useImperativeHandle ,useRef} from "react"

const ResultModal = forwardRef(({result,targetTime,remainingTime,resetTimer},ref) =>{
    const dialog = useRef()
    const formattedRemainingTime = (remainingTime/1000).toFixed(2)
    const score = Math.round((1-formattedRemainingTime/targetTime)*100,2)

    
    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal()
                
            }
        }
    })

    return(
        <dialog className="result-modal" ref={dialog} onClose={resetTimer}>
            {  result==="Won"&&<h2>Your Score: {score}</h2>}
            <p>
                The Target time was 
                <strong>{" "+targetTime} second{targetTime>1?"s":""}</strong>
            </p>
            <p>
                You stopped the timer with <strong>{remainingTime/1000} seconds left</strong>
            </p>
            <form method="dialog">
                <button  type="submit">Close</button>
            </form>

        </dialog>
    )
})

export default ResultModal