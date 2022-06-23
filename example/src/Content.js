import { useEffect, useRef, useState, memo } from "react"

// const tabs = ['posts', 'comments', 'albums']
// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')
//     const [showGoToTop, setShowGoToTop] = useState(false)

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY >= 200) {
//                 setShowGoToTop(true)
//             } else {
//                 setShowGoToTop(false)
//             }
//             // setShowGoToTop(window.screenY>=200  )
//         }
//         window.addEventListener('scroll', handleScroll)

//         // cleanup function
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }

//     }, [])


//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     onClick={() => setType(tab)}
//                     style={type === tab ? {
//                         color: '#fff',
//                         background: '#333'
//                     } : {}}
//                 >
//                     {tab}
//                 </button>
//             ))}
//             <input
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map(post => (
//                     <li key={post.id}>{post.title || post.name} </li>
//                 ))}
//             </ul>
//             {showGoToTop && (
//                 <button style={{ position: 'fixed', right: 20, bottom: 20 }}>Go to top</button>
//             )}
//         </div>
//     )
// }

/** timer */

// function Content() {
//     const [countDown, setCountDown] = useState(60)
//     useEffect(() => {
//         const timerID = setInterval(() => {
//             setCountDown(prev => prev - 1)
//         }, 1000)
//         return () => clearInterval(timerID)
//     }, [])

//     return (
//         <h1>{countDown}</h1>
//     )
// }

/** preview avatar */

// function Content() {
//     const [avatar, setAvatar] = useState()

//     useEffect(() => {
//         return () => {
//             avatar && URL.revokeObjectURL(avatar.preview)
//         }
//     }, [avatar])
//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]
//         file.preview = URL.createObjectURL(file)

//         setAvatar(file)
//     }
//     return (
//         <div>
//             <input
//                 type='file'
//                 onChange={handlePreviewAvatar}

//             />
//             {avatar && (
//                 <img src={avatar.preview} width='80%' />
//             )}

//         </div>
//     )
// }


// ============useRef================

// function Content() {
//     const [count, setCount] = useState(60)
//     const timerID = useRef()
//     const prevCount = useRef()

//     useEffect(() => {
//         prevCount.current = count
//     }, [count])

//     const handleStart = () => {
//         timerID.current = setInterval(() => {
//             setCount(prevCount => prevCount - 1)
//         }, 1000)


//     }

//     const handleStop = () => {
//         clearInterval(timerID.current)

//     }

//     console.log(count, prevCount.current)
//     return (
//         <div >
//             <h1>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop}>Stop</button>
//         </div>
//     )
// }

// ==========memo=============

function Content({ onIncrease }) {
    console.log('re-render')
    return (

        <button onClick={onIncrease}>Click me!!</button>
    )
}
export default memo(Content)
