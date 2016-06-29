import React, { PropTypes } from 'react'
import classNames from 'classnames'

import InputLabel from '../InputLabel/'
import styles from './styles.css'

const propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  showHelp: PropTypes.bool,
}

const defaultProps = {
  disabled: false,
  name: '',
  required: false,
  showHelp: false,
}

class Input extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showHelp: this.props.showHelp,
    }

  }

  handleShowHelpText = () => {
    this.setState({
      showHelp: !this.state.showHelp
    })
  }

  render() {
    let { showHelp } = this.state
    const { className, disabled, helpText, label, name, placeholder, required } = this.props
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
          helpText={helpText}
          showHelpText={this.handleShowHelpText}
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
        {showHelp && <span className={styles.helpText}>{helpText}</span>}
      </div>
    )
  }
}

Input.propTypes    = propTypes
Input.defaultProps = defaultProps

export default Input
