import { FaRegLightbulb } from 'react-icons/fa'

const Darkmode = () => {
  let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const switchTheme = e => {    
      if (theme === darkTheme) {      
          body.classList.replace(darkTheme, lightTheme)       
          e.target.classList.remove(clickedClass)      
          localStorage.setItem("theme", "light")      
          theme = lightTheme    
        } else {      
            body.classList.replace(lightTheme, darkTheme)    
            e.target.classList.add(clickedClass)      
            localStorage.setItem("theme", "dark")      
            theme = darkTheme    
        }  
    }
  return (
    <button
      className={theme === "dark" ? clickedClass : ""}      
      id="darkMode"      
      onClick={e => switchTheme(e)}    
    >
      <h3 id="darkmode_btn" className="border-2 rounded-lg p-3 mb-5 w-full">
        <FaRegLightbulb className='inline-block mr-2'/>
        Switch Darkmode
      </h3>
    </button>


  )
}

export default Darkmode