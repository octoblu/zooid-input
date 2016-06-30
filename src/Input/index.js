import React, { PropTypes } from 'react'
import classNames from 'classnames'

import InputLabel from '../InputLabel/'
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

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      className,
      disabled,
      description,
      label,
      name,
      placeholder,
      required,
    } = this.props

    const classes = classNames(
      styles.root,
      { [`${styles['is-disabled']}`]: disabled },
      { [`${styles['is-required']}`]: required },
      className
    )

    return (
      <div className={classes}>
        <InputLabel
          name={name}
          required={required}
          description={description}
        >
          {label}
        </InputLabel>

        <input
          {...this.props}
          className={styles.input}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          required={required}
          type="text"
        />
        {description && <span className={styles.description}>{description}</span>}
      </div>
    )
  }
}

Input.propTypes    = propTypes
Input.defaultProps = defaultProps

export default Input
