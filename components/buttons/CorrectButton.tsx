type CorrectButtonProps = {
  icon: React.ReactNode
  textColor: string
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
  keyboardKey: string
}

const CorrectButton = ({
  icon,
  textColor,
  handleClick,
  disabled,
  keyboardKey,
}: CorrectButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className='custom-hover-effect relative flex h-[45px] w-[132px] items-center justify-center rounded-lg bg-gray-900'
    >
      <p className={`font-semibold ${textColor}`}>{icon}</p>
      
      <p className="absolute hidden md:block right-0 top-0 p-1 text-gray-500 mr-1 text-xs">{keyboardKey}</p>
    </button>
  )
}

export default CorrectButton
