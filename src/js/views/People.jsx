import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext'

const People = () => {
    const {theid} = useParams()
    const [detail, setDetail] = useState(null)
    const {store, actions} = useContext(Context)

    const findPeople = () => {
        const person = store.people.find((item)=> item._id == theid)
        setDetail(person)

    }

    useEffect(() => {
        
    })
  return (
    <div className='containet'>People</div>
  )
}

export default People