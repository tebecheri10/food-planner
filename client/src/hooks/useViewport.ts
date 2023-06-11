import { useEffect, useState } from 'react'

export const useViewport = () =>{
    const [ viewPort, setViewport ] = useState<number>(0)

    const informWindowWidth = (e:any)=>{
        setViewport(e.target.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", informWindowWidth )
        return ()=> window.removeEventListener("resize", informWindowWidth )
    }, [])

    return {
        viewPort
    }
}