type ResultButtonProps = {
  icon: React.ReactNode
  textColor: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
}

const CorrectButton = ({
  icon,
  textColor,
  handleClick,
  disabled
}: ResultButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className='custom-hover-effect flex h-[45px] w-[132px] flex-col items-center justify-center rounded-lg bg-gray-900'
    >
      <p className={`font-semibold ${textColor}`}>{icon}</p>
    </button>
  )
}

export default CorrectButton
