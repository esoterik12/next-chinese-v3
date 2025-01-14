// May require  in html of layout.tsx
// Input Component designed for text/email to be used in conjunction with ReactHookForm
// Has its own default styles as well as optional props for more Tailwind styling

import React from 'react'
import InlineError from '../shared/InlineError'

interface InputFieldProps {
  id: string
  type: string
  label?: string
  placeholder: string
  labelClasses?: string
  inputClasses?: string
  error: string | undefined
  maxLength?: number
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

// Using React.ForwardRefExoticComponent to properly type the component with forwarded refs
// React.forwardRef in TypeScript: specify two generic types: ref type / props type
const InputField: React.ForwardRefExoticComponent<
  InputFieldProps & React.RefAttributes<HTMLInputElement>
> = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      type,
      id,
      label,
      placeholder,
      labelClasses,
      inputClasses,
      error,
      value,
      setValue,
      ...rest
    },
    ref
  ) => (
    <div className='flex flex-col md:flex-row'>
      <InlineError classes='flex flex-row items-center '>
        <div className='ml-1 mr-4 min-h-8 p-1'>
          {error && <p className='text-rose-600'>{error}</p>}
        </div>
      </InlineError>
      <div>
        {label && (
          <label
            htmlFor={id}
            className={`${labelClasses} block p-1 font-medium`}
          >
            {label}
          </label>
        )}
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          className={`${inputClasses} focus:ring-secondary-500 ml-1 block rounded-md border-2 border-gray-500 p-1 focus:border-sky-500 focus:outline-none focus:ring-2`}
          {...rest}
        />
      </div>
    </div>
  )
)

InputField.displayName = 'InputField'

export { InputField }
