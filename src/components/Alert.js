import React from 'react'

function Alert(props) {
  return (
    props.alert && <div class={`alert alert-${props.alert.Type} alert-dismissible fade show`} role="alert">
        <strong>Success: </strong> {props.alert.msg}
    </div>
  )
}

export default Alert;