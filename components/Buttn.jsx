

const Buttn = ({value,handleClick}) => {


  return (
    <button type="button" className="buttn-submit"
    onClick={handleClick}
    >
      {value}
    </button>
  )
}

export default Buttn
