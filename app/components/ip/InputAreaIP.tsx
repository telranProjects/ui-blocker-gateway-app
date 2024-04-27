import React from 'react'

interface Props {
    onInputAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputAreaService: React.FC<Props> = ({onInputAreaChange}: Props) => {
  return (
    <textarea className="textarea textarea-bordered w-1/4"
          style={{ height: '16em', whiteSpace: 'pre-line' }}
          defaultValue={`{
    "IP":
            "IP_number",
    "webService": 
            "web_service_name",
    "timestamp": 
            "0"    
}`}
onChange={onInputAreaChange}
 />

  )
}

export default InputAreaService