import React, { PropTypes } from 'react'
import classNames from 'classnames'
import FormLabel from 'zooid-form-label'
import FormField from 'zooid-form-field'

import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
}

const defaultProps = {
  disabled: false,
  name: '',
  required: false,
}

const Input = (props) => {
  const {
    className,
    disabled,
    description,
    label,
    name,
    placeholder,
    required,
  } = props

  const classes = classNames(
    styles.root,
    { [`${styles['is-disabled']}`]: disabled },
    { [`${styles['is-required']}`]: required },
    className
  )

  return (
    <FormField className={classes}>
      <FormLabel
        name={name}
        required={required}
        description={description}
      >
        {label}
      </FormLabel>

      <input
        {...props}
        className={styles.input}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        required={required}
        type="text"
      />
      {description && <span className={styles.description}>{description}</span>}
    </FormField>
  )
}

Input.propTypes    = propTypes
Input.defaultProps = defaultProps

export default Input
