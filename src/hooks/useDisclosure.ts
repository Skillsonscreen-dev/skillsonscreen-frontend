import { useState } from "react";



const  useDisclosure = (initialVal: boolean = false) => {
    const [ isOpen, setIsOpen ] = useState(initialVal);

    const onOpen = () => {
        setIsOpen(true);
    }

    const onClose = () => {
        setIsOpen(false);
    }
  
    return { isOpen, onOpen, onClose };
  }

  export default useDisclosure;