import React, { TextareaHTMLAttributes } from 'react';

import './styles.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  description?: string;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  label,
  description,
  ...textareaAttributes
}) =>  {
  return (
    <div className="textarea-block">
    <label htmlFor={textareaAttributes.id || textareaAttributes.name}>
        {label}
        {description && <small>{description}</small> }
      </label>
      <textarea {...textareaAttributes}></textarea>
    </div>
  )
}

export default Textarea;
