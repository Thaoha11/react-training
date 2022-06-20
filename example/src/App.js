import { useState } from 'react'

// const orders = [200, 100, 300]
// function App() {

//   const [counter, setCouter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur)
//     console.log(total)
//     return total
//   })

//   const handleIncrease = () => {
//     setCouter(prev => prev + 1)
//     setCouter(prev => prev + 1)

//   }

//   return (
//     <div className='app' style={{ padding: 20 }}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>
//     </div>
//   )
// }

/* ex2 */

// const gifts = ['BMW', 'MayBach', 'G63']

// function App() {
//   const [gift, setGitf] = useState()

//   const handleGift = () => {
//     const index = Math.floor(Math.random() * gifts.length)

//     setGitf(gifts[index])
//   }

//   return (
//     <div className='app' style={{ padding: 20 }} >
//       <h1>{gift || 'No gift'}</h1>
//       <button onClick={handleGift}>Click me !!</button>
//     </div>
//   )
// }

/** Two-way-binding */

// const courses = [
//   {
//     id: 1,
//     name: 'Javascript'
//   },
//   {
//     id: 2,
//     name: 'ReactJS'
//   },
//   {
//     id: 3,
//     name: 'PHP'
//   },
// ]

// function App() {
//   const [checked, setChecked] = useState([])
//   console.log(checked)

//   const handleChecked = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         return checked.filter(item => item != id)

//       }
//       else {
//         return [...prev, id]
//       }
//     })
//   }
//   const hadleSubmit = () => {
//     console.log({ ids: checked })
//   }

//   return (
//     <div className='app' style={{ padding: 20 }} >
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type='checkbox'
//             checked={checked.includes(course.id)}
//             onChange={() => handleChecked(course.id)}
//           />
//           {course.name}

//         </div>

//       ))}
//       <button onClick={hadleSubmit}>Click me!!</button>
//     </div>
//   )
// }


/** Todo List */

function App() {
  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs)
    return storageJobs ?? []
  })

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job]

      // Save to localStorage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem('jobs', jsonJobs)

      return newJobs
    })
    setJob('')
  }
  return (
    <div className='app' style={{ padding: 20 }}>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}> {job} </li>
        ))}
      </ul>

    </div>

  )
}

export default App;
