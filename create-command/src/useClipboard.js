import {useRef, useState} from 'react'

export function useClipboard () {
    const [isCopied, setIsCopied] = useState(false)

    const buttonText = isCopied ? "Copied" : "Copy" 
  
    const inputRef = useRef()
  
    const copy = async () => {
      await navigator.clipboard.writeText(inputRef.current.value);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false)
      }, 3000);
    }
    return {inputRef, copy, buttonText}
}

