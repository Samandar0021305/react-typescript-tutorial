import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


export const Box = () => {
 const theme = useContext(ThemeContext)
    return (
    <div style={{background:theme.primary.main}}>Theme context</div>
  )
}
