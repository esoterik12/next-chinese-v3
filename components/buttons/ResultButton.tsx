type ResultButtonProps = {
  text: '1' | '2' | '3' | '4' | '5'
  textColor: string
  handleClick: () => void
}

const ResultButton = ({ text, textColor, handleClick }: ResultButtonProps) => {
  return (
    <button onClick={handleClick}>
      <div className='custom-hover-effect flex h-[45px] w-[45px] flex-col justify-center rounded-lg bg-gray-900 text-center'>
        <p className={`font-semibold ${textColor}`}>{text}</p>
      </div>
    </button>
  )
}

export default ResultButton
