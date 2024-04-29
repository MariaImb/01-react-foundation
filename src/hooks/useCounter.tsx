// custom hook es una funcion que regresa lo que necesitamos

import { useState } from "react"

interface Options {
    initialValue?: number
}
export const useCounter = ({initialValue = 0}: Options) => {
    const [count, setCount] = useState<number>(initialValue) // tipo generico

    const increaseBy = (value: number) => {
        const newValue = count + value

        if (newValue < 0) return
        setCount( count + value)
    }
  return {
    // properties
    count,

    // metodos
    increaseBy
  
  }

}
