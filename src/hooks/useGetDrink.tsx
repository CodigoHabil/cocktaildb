import { useEffect, useState } from "react";

export function useGetDrink(url: string, id: any){

  const [cocktail,setCocktail] = useState(null)
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(false)

  useEffect(() => {
      (
          async function(){
              try{
                  setLoading(true)
                  const response = await fetch(url)
                  const data = await response.json()
                  setCocktail(data.drinks[0])
              }catch(err){
                  setError(err)
              }finally{
                  setLoading(false)
              }
          }
      )()
  }, [url, id])

  return { cocktail, error, loading }
}