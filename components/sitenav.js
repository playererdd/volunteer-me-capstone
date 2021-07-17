import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, {useState} from 'react'
import { useRouter } from 'next/router'
import ReorderIcon from '@material-ui/icons/Reorder'

export default function SiteNav(props) {

  var usernav
  if (props.user) {
    usernav = (
      <>     
      <Nav.Link style={{color: 'blueviolet'}} href="/logout">Logout</Nav.Link>
      </>
    )
  }
  else {
    usernav = (
      <>
      <Nav.Link style={{color: 'blueviolet'}} href="/login">Login</Nav.Link>
      </>
    )
  }

  /* will allow links to be converted to button whene screen is smaller */
  const [showLinks, setShowLinks] = useState(true);
  const router = useRouter();


  return (
  <>
    <div className="NavbarMain"> 

      <div className="leftSide">

        <Navbar.Brand href="/" style={{padding: 10}}>
        <img
          alt=""
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjRkZGRkZGIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTQxLDE0YzAtMC41NTItMC40NDgtMS0xLTFoLTF2MmgxQzQwLjU1MiwxNSw0MSwxNC41NTIsNDEsMTR6Ij48L3BhdGg+PHBhdGggZD0iTTI5LDM2YzAtMC41NTItMC40NDgtMS0xLTFoLTF2MmgxQzI4LjU1MiwzNywyOSwzNi41NTIsMjksMzZ6Ij48L3BhdGg+PHBhdGggZD0iTTM0LjgyNywyNC40M2wtMC4zNjktMS40NzdDMzQuMzA1LDIyLjk2OCwzNC4xNTcsMjMsMzQsMjNoLTRjLTAuMTU3LDAtMC4zMDUtMC4wMzItMC40NTgtMC4wNDZsLTAuMzY5LDEuNDc3ICAgQzMwLjk2NSwyNS4xNTYsMzMuMDM0LDI1LjE1NiwzNC44MjcsMjQuNDN6Ij48L3BhdGg+PHBhdGggZD0iTTI1LDQwdi01aC0xLjM5NWMtMi4zMzEsMC00LjU5Ni0wLjYyMy02LjU5LTEuODA5TDE1LDM0LjUzNVY0MGMwLDEuNjU0LDEuMzQ2LDMsMywzaDRDMjMuNjU0LDQzLDI1LDQxLjY1NCwyNSw0MHoiPjwvcGF0aD48cGF0aCBkPSJNMzIuMDA2LDQ5LjgyNGMxLjEzLTEuMDM1LDIuMzkzLTEuODgzLDMuNzU4LTIuNTMxYy0yLjE4Mi0xLjM1My0zLjg0MS0zLjQxNC00LjY4OS01LjkwNmwtMC4yOTEtMC41ODJsMC41MDktMC41MTIgICBDMzIuMzc4LDM5LjIwOCwzMywzNy43MDYsMzMsMzYuMTcyVjM0YzAtMy4yNDYsMS43MzMtNi4wODgsNC4zMTctNy42NzFjLTAuMzkxLTAuMTEyLTAuNzg3LTAuMjA3LTEuMTg4LTAuMjgzICAgQzM0Ljg0NiwyNi42NjcsMzMuNDIzLDI3LDMyLDI3Yy0wLjczNSwwLTEuNDcxLTAuMDg4LTIuMTg4LTAuMjU4QzMwLjU2LDI3Ljk0NywzMSwyOS4zNjMsMzEsMzAuODgzICAgYzAsMC44NS0wLjEzNywxLjY4OC0wLjQwNSwyLjQ5M2wtMC4yNTUsMC43NjlDMzAuNzQ2LDM0LjY1NywzMSwzNS4yOTYsMzEsMzZjMCwxLjY1NC0xLjM0NiwzLTMsM2gtMXYxICAgYzAsMS44OTMtMS4wNywzLjUyNC0yLjYyNiw0LjM3M2wwLjQ0MSwxLjc2M0MyNy41OCw0Ni43MTcsMzAuMDMzLDQ4LjAyMywzMi4wMDYsNDkuODI0eiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNSwzNHYyLjE3MmMwLDEuODQzLTAuNjY4LDMuNjUtMS44NTIsNS4wNTVjMC45NSwyLjM1OCwyLjgwOSw0LjE5LDUuMTg2LDUuMTIyYzAuMjgyLTAuMDc2LDAuNTY0LTAuMTUyLDAuODUxLTAuMjEyICAgbDAuNjM0LTIuNTM1QzM4LjExMiw0Mi4zMjMsMzcsNDAuMjkxLDM3LDM4di0xLjE3MmMwLTIuMDYxLDAuODM2LTQuMDc4LDIuMjkzLTUuNTM1bDAuNTEtMC41MWwwLjY0NSwwLjMyMiAgIGMyLjU2MywxLjI4Miw1LjI5OSwyLjE3Miw4LjEyOCwyLjY0NEw1MSwzNC4xNTJWMzhjMCwyLjI5MS0xLjExMiw0LjMyMy0yLjgxOSw1LjYwMWwwLjYzNCwyLjUzNSAgIGMwLjI4NCwwLjA2LDAuNTYsMC4xNDIsMC44MzgsMC4yMTdjMi4zODYtMC45MzEsNC4yNC0yLjc3Niw1LjE4OS01LjE0NEM1My42NjcsMzkuODA3LDUzLDM4LjAwOCw1MywzNi4xNzJWMzRjMC0zLjg1OS0zLjE0MS03LTctNyAgIGgtNEMzOC4xNDEsMjcsMzUsMzAuMTQxLDM1LDM0eiI+PC9wYXRoPjxwYXRoIGQ9Ik01Mi4yMjQsNDcuMjk5YzEuNTU0LDAuNzM2LDIuOTczLDEuNzI3LDQuMjA0LDIuOTQ3bDAuNTM0LTUuODdsLTAuODQxLTAuODQxYy0wLjA0NC0wLjA0NC0wLjA3Ni0wLjA5Ny0wLjExNy0wLjE0MyAgIEM1NS4wODMsNDQuOTkxLDUzLjc5Miw0Ni4zMjksNTIuMjI0LDQ3LjI5OXoiPjwvcGF0aD48cGF0aCBkPSJNNDEuNjM1LDQ0LjU4bC0wLjQ2MiwxLjg1YzEuNzkyLDAuNzI2LDMuODYxLDAuNzI2LDUuNjUzLDBsLTAuNDYyLTEuODVDNDUuNjI1LDQ0Ljg0Nyw0NC44MzEsNDUsNDQsNDUgICBTNDIuMzc1LDQ0Ljg0Nyw0MS42MzUsNDQuNTh6Ij48L3BhdGg+PHBhdGggZD0iTTQ5LDM4di0yLjE1MmwtMC43NTMtMC4xMjZjLTIuNzczLTAuNDYyLTUuNDYyLTEuMy04LjAwMi0yLjQ5MkMzOS40NDcsMzQuMjUsMzksMzUuNTI3LDM5LDM2LjgyOFYzOGMwLDIuNzU3LDIuMjQzLDUsNSw1ICAgUzQ5LDQwLjc1Nyw0OSwzOHoiPjwvcGF0aD48cGF0aCBkPSJNMTgsNDVjLTAuMTU3LDAtMC4zMDUtMC4wMzItMC40NTgtMC4wNDZsLTAuMzY5LDEuNDc3YzEuNzkyLDAuNzI2LDMuODYxLDAuNzI2LDUuNjU0LDBsLTAuMzY5LTEuNDc3ICAgQzIyLjMwNSw0NC45NjgsMjIuMTU3LDQ1LDIyLDQ1SDE4eiI+PC9wYXRoPjxwYXRoIGQ9Ik00Ljk2Miw0My42MjRsMS41MDMtMS41MDNDNi44MDUsNDEuNzgxLDcsNDEuMzEsNyw0MC44MjhDNywzOS44Miw2LjE4LDM5LDUuMTcyLDM5QzMuOTc1LDM5LDMsMzkuOTc1LDMsNDEuMTcyVjQ3aDIuMjY5ICAgTDQuOTYyLDQzLjYyNHoiPjwvcGF0aD48cGF0aCBkPSJNMzQuOTkzLDYxYy0wLjA3Ny02LjM4Ni00LjYwNS0xMS43NjgtMTAuODY4LTEyLjk1MkMyMi44NDMsNDguNjY3LDIxLjQyMiw0OSwyMCw0OWMtMS40MjEsMC0yLjg0Mi0wLjMzMi00LjEyMy0wLjk1MSAgIGMtMy4yMTUsMC42MDgtNi4wNSwyLjM0NC04LjA1Nyw0LjkyOGwtMS44NSwyLjY0TDUuNDUsNDlIM3Y4LjA5MkMzLDU4LjY5NSw0LjMwNSw2MCw1LjkwOCw2MGMwLjk3NSwwLDEuODc5LTAuNDg0LDIuNDItMS4yOTUgICBMMTEsNTUuMjkzVjYxaDhsLTQuMTcyLTQuMTcyYy0wLjUzLTAuNTMtMC44MjgtMS4yNS0wLjgyOC0yQzE0LDUzLjI2NiwxNS4yNjYsNTIsMTYuODI4LDUyYzAuNzUsMCwxLjQ3LDAuMjk4LDIsMC44MjhMMjAsNTQgICBsMS4xNzItMS4xNzJjMC41My0wLjUzLDEuMjUtMC44MjgsMi0wLjgyOEMyNC43MzQsNTIsMjYsNTMuMjY2LDI2LDU0LjgyOGMwLDAuNzUtMC4yOTgsMS40Ny0wLjgyOCwyTDIxLDYxaDh2LTZoMnY2SDM0Ljk5M3oiPjwvcGF0aD48cGF0aCBkPSJNNTguODI4LDM5QzU3LjgyLDM5LDU3LDM5LjgyLDU3LDQwLjgyOGMwLDAuNDgxLDAuMTk1LDAuOTUzLDAuNTM1LDEuMjkzbDEuNTAzLDEuNTAzTDU4LjczMSw0N0g2MXYtNS44MjggICBDNjEsMzkuOTc1LDYwLjAyNSwzOSw1OC44MjgsMzl6Ij48L3BhdGg+PHBhdGggZD0iTTEyLDM3aDF2LTJoLTFjLTAuNTUyLDAtMSwwLjQ0OC0xLDFTMTEuNDQ4LDM3LDEyLDM3eiI+PC9wYXRoPjxwYXRoIGQ9Ik01OC41NSw0OWwtMC41NTQsNi4wOTRsLTEuODE2LTIuMTE4Yy0yLjAwNy0yLjU4NC00Ljg0Mi00LjMyLTguMDU3LTQuOTI4QzQ2Ljg0Miw0OC42NjgsNDUuNDIxLDQ5LDQ0LDQ5ICAgYy0xLjQyMiwwLTIuODQ1LTAuMzMzLTQuMTI3LTAuOTUzYy0yLjQzOCwwLjQ2MS00LjY1NiwxLjU2My02LjQ4LDMuMjJjMi4yMjgsMi42NDYsMy41NjEsNi4wNDQsMy42LDkuNzMzSDQzbC00LjE3Mi00LjE3MiAgIGMtMC41My0wLjUzLTAuODI4LTEuMjUtMC44MjgtMkMzOCw1My4yNjYsMzkuMjY2LDUyLDQwLjgyOCw1MmMwLjc1LDAsMS40NywwLjI5OCwyLDAuODI4TDQ0LDU0bDEuMTcyLTEuMTcyICAgYzAuNTMtMC41MywxLjI1LTAuODI4LDItMC44MjhDNDguNzM0LDUyLDUwLDUzLjI2Niw1MCw1NC44MjhjMCwwLjc1LTAuMjk4LDEuNDctMC44MjgsMkw0NSw2MWg4di02bDAuNjg4LDFsMS45ODQsMi43MDUgICBDNTYuMjEzLDU5LjUxNiw1Ny4xMTcsNjAsNTguMDkyLDYwQzU5LjY5NSw2MCw2MSw1OC42OTUsNjEsNTcuMDkyVjQ5SDU4LjU1eiI+PC9wYXRoPjxwYXRoIGQ9Ik0yNCwxNWgxdi0yaC0xYy0wLjU1MiwwLTEsMC40NDgtMSwxUzIzLjQ0OCwxNSwyNCwxNXoiPjwvcGF0aD48cGF0aCBkPSJNMTEuNTQyLDMzLjA0NkMxMS42OTIsMzMuMDIzLDExLjg0MywzMywxMiwzM2gxLjY5N0wxNywzMC43OThsMC41NTUsMC4zN0MxOS4zNTMsMzIuMzY2LDIxLjQ0NSwzMywyMy42MDUsMzNIMjZoMWgxICAgYzAuMjAzLDAsMC40MDEsMC4wMjEsMC41OTIsMC4wNmwwLjEwNS0wLjMxNkMyOC44OTgsMzIuMTQzLDI5LDMxLjUxNywyOSwzMC44ODNDMjksMjcuNjM5LDI2LjM2MSwyNSwyMy4xMTcsMjVoLTQuNTEyICAgYy0xLjkyMywwLTMuNzA3LDAuOTU1LTQuNzczLDIuNTU1bC0wLjE5LDAuMjg2bC0wLjg5NiwwLjI5OEMxMS43MDIsMjguNDg3LDExLDI5LjQ2MSwxMSwzMC41NjNjMCwwLjIwNywwLjAyNSwwLjQxNiwwLjA3NywwLjYyICAgTDExLjU0MiwzMy4wNDZ6Ij48L3BhdGg+PHBhdGggZD0iTTIzLjU0MiwxMS4wNDZDMjMuNjkyLDExLjAyMywyMy44NDMsMTEsMjQsMTFoM3Y3YzAsMS42NTQsMS4zNDYsMywzLDNoNGMxLjY1NCwwLDMtMS4zNDYsMy0zdi03aDMgICBjMC4yMDMsMCwwLjQwMSwwLjAyMSwwLjU5MiwwLjA2bDAuMTA1LTAuMzE2QzQwLjg5OCwxMC4xNDMsNDEsOS41MTcsNDEsOC44ODNDNDEsNS42MzksMzguMzYxLDMsMzUuMTE3LDNoLTQuNTEyICAgYy0xLjkyMywwLTMuNzA3LDAuOTU1LTQuNzczLDIuNTU1bC0wLjE5LDAuMjg2bC0wLjg5NiwwLjI5OEMyMy43MDIsNi40ODcsMjMsNy40NjEsMjMsOC41NjNjMCwwLjIxLDAuMDI1LDAuNDE4LDAuMDc2LDAuNjE3ICAgTDIzLjU0MiwxMS4wNDZ6IE0zMy44OTUsNy41NTNsMiw0bC0xLjc4OSwwLjg5NWwtMi00TDMzLjg5NSw3LjU1M3ogTTI5Ljg5NSw3LjU1M2wyLDRsLTEuNzg5LDAuODk1bC0yLTRMMjkuODk1LDcuNTUzeiI+PC9wYXRoPjxwYXRoIGQ9Ik0xNC45NjIsMTMuNjI0bDEuNTAzLTEuNTAzQzE2LjgwNSwxMS43ODEsMTcsMTEuMzEsMTcsMTAuODI4QzE3LDkuODIsMTYuMTgsOSwxNS4xNzIsOUMxMy45NzUsOSwxMyw5Ljk3NSwxMywxMS4xNzIgICB2MTQuMjM2YzAuODAzLTAuODQ2LDEuNzgxLTEuNDkzLDIuODYtMS45MDJMMTQuOTYyLDEzLjYyNHoiPjwvcGF0aD48L2c+PC9zdmc+"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        
        </Navbar.Brand>

        {/*if statement to set id to hidden when showLinks equals true 
        will set id to empty when showLinks is false*/}
        <div className="links" id={showLinks ? "hidden" : ""}>

        <Nav >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/team" >About Us</Nav.Link> 
          <Nav.Link href="/contactUs">Contact</Nav.Link>
        </Nav>

        </div>

        {/* add hamburger */}
        <button onClick={() => setShowLinks(!showLinks)}> <ReorderIcon /> </button>
      </div>   
        

      <div className="rightSide">

        <div  className="logger">
          {usernav}      
        </div>
      </div>
    
    </div>

  </>
  )
}
