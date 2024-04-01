import screen from "./Display.module.css";
// screen is just a classname for style the Display of Calculator.

let Display = ({displayValue}) => {
  return <input className={screen.display} type="text" value={displayValue} readOnly/>
}

export default Display;