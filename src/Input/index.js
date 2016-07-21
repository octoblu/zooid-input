import React, { PropTypes } from 'react'
import blacklist from 'blacklist'
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
    required,
  } = props

  const classes = classNames(
    styles.root,
    { [`${styles['is-disabled']}`]: disabled },
    { [`${styles['is-required']}`]: required },
    className
  )

  const sanitizedProps = blacklist(props, 'className', 'description', 'label')

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
        {...sanitizedProps}
        className={styles.input}
        type="text"
      />

      {description && <span className={styles.description}>{description}</span>}
    </FormField>
  )
}

Input.propTypes    = propTypes
Input.defaultProps = defaultProps

export default Input
