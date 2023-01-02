import classes from './Option.module.css'

const Option = (props) => {
  
  return (
    <div onClick={props.play} className={classes[props.answer]} >
      <img disabled={props.disabled} id={props.id} src={props.img} alt="" />
    </div>
  )
}

export default Option
