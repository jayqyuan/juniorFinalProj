import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleStudent() {
    const [singlePlayer, setSinglePlayer]= useState({})
    const { id } = useParams()

  return (
    <div>made it to single player</div>
  )
}

export default SingleStudent