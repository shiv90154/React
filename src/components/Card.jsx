import React from 'react'

const Card = (props) => {
    console.log(props.profile_photo)
    return (
        <div className=' mr-6 mt-6
 bg-sky-500  inline-block p-6 text-center rounded-xl '>

            <img className="h-32 w-32 rounded-full mb-3" src={props.profile_photo} alt="" />
            <h1 className='text-2xl font-semibold mb-4'>{props.username} </h1>
            <h2>{props.age}, {props.city} </h2>
            <h3>{props.profession}</h3>
            <button className=' bg-emerald-800 mt-5 text-white px-4 py-2 rounded font-medium '>Add Friend</button>

        </div>
    )
}

export default Card