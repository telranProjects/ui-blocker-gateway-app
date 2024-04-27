import React from 'react'

interface Props {
    onInputStringChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputString: React.FC<Props> = ({ onInputStringChange }: Props) => {
    return (
        <input type="text" placeholder="Type it here" className="input input-bordered w-1/4"
            onChange={onInputStringChange} />
    )
}

export default InputString