import React from 'react'
import UserActiveList from './UserActiveList'
import UserLists from './UserLists'

function ListComponent() {
  return (
    <div className="container">
        <div className='list-component__wrapper'>
            <UserLists/>
            <UserActiveList/>
        </div>
    </div>
  )
}

export default ListComponent