import React from 'react'
const PrimaryPinkButton = (props) => (
  <button style={{background: 'pink', color: '#fff', border: 'none', borderRadius: '8px', padding: '0.5rem 1.5rem'}}>
    {props.button || 'Button'}
  </button>
)
export default PrimaryPinkButton