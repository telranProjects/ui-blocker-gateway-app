import React from 'react'

interface Props {
    onInputAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputAreaService: React.FC<Props> = ({onInputAreaChange}: Props) => {
  return (
    <textarea className="textarea textarea-bordered w-1/4"
          style={{ height: '16em', whiteSpace: 'pre-line' }}
          defaultValue={`{
    "webService": 
            "web_service_name",
    "emails": [
            "e1@e1.com",
            "e2@e2.com"
    ]
}`}
onChange={onInputAreaChange}
 />

  )
}

export default InputAreaService