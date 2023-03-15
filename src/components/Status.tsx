import React from 'react'
type StatusProp = {
    status:'loading' | 'success' | 'error'
}

export const Status = (props:StatusProp) => {
  let message;
  if(props.status === 'loading'){
    message = 'Loading...'
  } else if(props.status === 'success'){
    message = "Dat fetching successfully"
  }else if(props.status === 'error'){
    message = "Error data fetching"
  }
  return (
    <div>
        <h1>Status - {message}</h1>
    </div>
  )
}
