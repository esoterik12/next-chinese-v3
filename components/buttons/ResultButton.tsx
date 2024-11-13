type ResultButtonProps = {
  text: '1' | '2' | '3' | '4' | '5'
  textColor: string
  handleClick: (e?: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
}

const ResultButton = ({
  text,
  textColor,
  handleClick,
  disabled
}: ResultButtonProps) => {
  return (
    <button disabled={disabled} onClick={handleClick}>
      <div className='custom-hover-effect flex h-[50px] w-[50px] flex-col justify-center rounded-lg bg-gray-900 text-center'>
        <p className={`font-semibold ${textColor}`}>{text}</p>
      </div>
    </button>
  )
}

export default ResultButton
