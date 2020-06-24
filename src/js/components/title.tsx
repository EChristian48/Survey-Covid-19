import * as React from 'react'

const Title: React.FC<{}> = (props) => {
  return (
    <div className='col s12'>
      <h2 className='center-align'>{props.children}</h2>
    </div>
  )
}

export { Title }
