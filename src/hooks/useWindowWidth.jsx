import { useState, useEffect } from "react"

// https://itnext.io/responsive-background-images-using-react-hooks-941af365ea1f
const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return windowWidth
}

export default useWindowWidth