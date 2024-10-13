// // Hooks aree special type of function they provide special power in react

// // import React, { useState } from 'react'

// // const App = () => {
// //   const [a, setA] = useState(10)
// //   const ChangeA = () => {
// //     console.log("chal gya")
// //     setA(20)
// //   }
// //   return (
// //     <div>
// //       <h1>value of a is {a}</h1>
// //       <button onClick={ChangeA}>Change A</button>
// //     </div>
// //   )
// // }

// // export default App

// // import React, { useState } from 'react'

// // const App = () => {
// //   const [num, setNum] = useState(10)
// //   return (
// //     <div>
// //       <h3>
// //         Number is {num}
// //       </h3>
// //       <button onClick={function () {
// //         setNum(num + 10)
// //       }}>Increment</button>
// //       <button
// //         onClick={function () {
// //           setNum(num - 10)
// //         }}>Decrement</button>


// //     </div>
// //   )
// // }

// // export default App

// // import React, { useState } from 'react'

// // const App = () => {
// //   const [username, setUsername] = useState("")
// //   const SubmitHandler = (e) => {
// //     e.preventDefault()
// //     console.log(username)
// //     setUsername('')
// //     // console.log("submit", e)
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={(e) => {
// //         SubmitHandler(e)
// //       }}>
// //         <input
// //           value={username}
// //           onChange={(e) => { setUsername(e.target.value) }}
// //           className=" bg-white px-5 py-4 m-5 rounded-s"
// //           onSubmit={SubmitHandler} type="text"
// //           placeholder='Enter your name ' />
// //         <button className="  px-5 py-4 bg-green-700 m-5 rounded-s ">
// //           Submit

// //         </button>
// //       </form>

// //     </div>
// //   )
// // }

// // export default App
// // 
// import React from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Footer />

//     </>
//   )
// }

// export default App


import React from 'react'
import Card from './components/Card'
const App = () => {

  const users = [
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 28,
      "profession": "Software Engineer",
      "profile_photo": "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
      "name": "Bob Smith",
      "city": "San Francisco",
      "age": 32,
      "profession": "Data Scientist",
      "profile_photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      "name": "Charlie Davis",
      "city": "Chicago",
      "age": 25,
      "profession": "Graphic Designer",
      "profile_photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      "name": "Diana Brown",
      "city": "Austin",
      "age": 30,
      "profession": "Marketing Specialist",
      "profile_photo": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      "name": "Ethan Miller",
      "city": "Los Angeles",
      "age": 27,
      "profession": "UX/UI Designer",
      "profile_photo": "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },
    {
      "name": "Fiona Gray",
      "city": "Boston",
      "age": 35,
      "profession": "Project Manager",
      "profile_photo": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      "name": "George Taylor",
      "city": "Seattle",
      "age": 29,
      "profession": "DevOps Engineer",
      "profile_photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      "name": "Hannah Lee",
      "city": "Denver",
      "age": 26,
      "profession": "Digital Marketing ",
      "profile_photo": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    },
    {
      "name": "Ian Martinez",
      "city": "Miami",
      "age": 31,
      "profession": "Financial Analyst",
      "profile_photo": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce"
    },
    {
      "name": "Julia Wilson",
      "city": "Dallas",
      "age": 33,
      "profession": "HR Manager",
      "profile_photo": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    }
  ]




  return (
    <div>
      <div className='p-10 '>
        {
          users.map(function (elem, idx) {
            return <Card key={idx} username={elem.name} age={elem.age} profession={elem.profession} city={elem.city} profile_photo={elem.profile_photo} />

          })
        }
      </div>
    </div>
  )
}

export default App