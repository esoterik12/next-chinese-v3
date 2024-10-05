type ResultButtonProps = {
  icon: React.ReactNode
  textColor: string
  handleClick: () => void
}

const CorrectButton = ({ icon, textColor, handleClick }: ResultButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className='custom-hover-effect flex items-center h-[45px] w-[110px] flex-col justify-center rounded-lg bg-gray-900'
    >
      <p className={`font-semibold ${textColor}`}>{icon}</p>
    </button>
  )
}

export default CorrectButton
