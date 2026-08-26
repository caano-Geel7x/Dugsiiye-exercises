import react, {useState, useEffect} from 'react'

  const Exercise8 = () => {
        const [time , setTime] = useState(0)
        const [isrunning , setIsRunning] = useState (false)
        const [inputTime, setInputTime] = useState(0);

        useEffect(() => {
            let timerId;
            if(isrunning){
             timerId = setInterval ( () => {
                setTime( (prev) =>{if(prev <=1){
                  setIsRunning(false)
                  return 0;
                }
                return prev -1
                 
             })
                },1000);
            }

                 return() => clearInterval(timerId)
                    },[isrunning]);

             const handleStart = () => {
               setTime(inputTime); 
               setIsRunning(true);
              };
             const handleStop = () => setIsRunning(false);
              const handleReset = () => {
              setIsRunning(false);
                setTime(inputTime); 
         };
        
        return (
               <div>
                  <h2>countdown time</h2>
                 
                  <p>set Time{inputTime} (seconds):</p>
                  <input
                      type="text" 
                      value={inputTime} 
                      onChange={(e)=>{setInputTime(e.target.value)}} 
                   />
                    <p>time Left :{time} seconds</p>
                     <button onClick={handleStart} disabled={isrunning|| inputTime ===0}>start</button>
                  <button onClick={handleStop}disabled={!isrunning || inputTime ===0}>stop</button>
                  <button onClick={handleReset} >reset</button>
               </div>
        )
        

};


export default Exercise8;