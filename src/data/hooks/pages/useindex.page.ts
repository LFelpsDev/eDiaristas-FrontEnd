import { useState } from "react";

export default function useIndex(){
  const [contador, setContador] = useState(5);

  return { 
    contador, setContador
  }
}
