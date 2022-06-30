// import { useCallback, useMemo, useRef, useState } from 'react'
// import Content from './Content'
// import UseReducer from './useReducer'
import { Routes, Route, Link } from 'react-router-dom'

import { useRef } from 'react'
import Video from './Video'
import Button from './Button'
import Homepage from './page/Homepage'
import NewsPage from './page/NewsPage'
import ContactPage from './page/ContactPage'

// =============useState=====================

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

// function App() {
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log(storageJobs)

//     return storageJobs ?? []
//   })

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       // Save to localStorage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//     })
//     setJob('')
//   }
//   return (
//     <div className='app' style={{ padding: 20 }}>
//       <input
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}> {job} </li>
//         ))}
//       </ul>

//     </div>

//   )
// }

/** Mounted & Unmounted */

// function App() {
//   const [show, setShow] = useState(false)

//   return (
//     <div className='app' style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}> Toggle</button>
//       {show && <Content />}
//     </div>
//   )
// }

// ===============useCallback================

// function App() {
//   const [count, setCount] = useState(0)

//   const handleIncrease = useCallback(() => {
//     setCount(prevCount => prevCount + 1)
//   }, [])
//   return (
//     <div className='app' style={{ padding: 20 }}>
//       <h1>{count}</h1>
//       <Content onIncrease={handleIncrease} />
//     </div>
//   )
// }

// ==================useMemo===============

// function App() {
// const [name, setName] = useState('')
// const [price, setPrice] = useState('')
// const [products, setProducts] = useState([])
// const nameRef = useRef()

// const handelSubmit = () => {
//   setProducts([...products, {
//     name,
//     price: +price
//   }])
//   setName('')
//   setPrice('')
//   nameRef.current.focus()
// }


// const total = useMemo(() => {
//   const result = products.reduce((result, prod) => {
//     console.log('tinh toan lai')

//     return result + prod.price
//   }, 0)

//   return result
// }, [products])
// return (
//   <>
{/* <input
        ref={nameRef}
        placeholder='Enter name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
      <input
        placeholder='Enter price'
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handelSubmit}>Add</button>
      <br />
      Total :{total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name}-{product.price}</li>
        ))}
      </ul> */}

//       <UseReducer />
//     </>
//   )
// }
// export default App;

//  =============useImperativeHandle()============

function App() {
  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
  }
  const handlePause = () => {
    videoRef.current.pause()
  }
  return (
    <>
      <Video ref={videoRef} />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>

      <Button />
      <Button primary />

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/news' element={<NewsPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  )
}
export default App
