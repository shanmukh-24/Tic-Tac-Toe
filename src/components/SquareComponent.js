function SquareComponent(props) {
    const classPro = props.className?`${props.className} square`:'square';
  return (
   <span className={classPro} onClick={props.onClick}>
       {props.state}
   </span>

  );
}

export default SquareComponent;
