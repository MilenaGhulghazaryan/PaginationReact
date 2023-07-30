// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import './pagination.css'

// const Pagination = () => {
//     let arr = new Array(10).fill(undefined)
//     const [pages, setPages] = useState(1)
//     const [data, setData] = useState([])

//     useEffect(() => {
//         axios.get(`https://jsonplaceholder.typicode.com/photos/?_page=${pages}`)
//             .then(response => setData(response.data))
//     }, [pages])

//     return (
//         <>
//             <div className="images">
//                 {
//                     data.map(({ id, url }) => {
//                         return (
//                             <div key={id} >
//                                 <img src={url} className="image" />
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//             <div className="pagesNums">
//                 {
//                     arr.map((_, index) => {
//                         return (
//                             <div key={index} onClick={() => {
//                                 setPages(index + 1)
//                             }}>
//                                 {index + 1}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// export default Pagination


import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './pagination.css'

const Pagination = () => {
    let arr = new Array(10).fill(undefined)
    const [pages, setPages] = useState(1)
    const [data, setData] = useState([])
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/?_page=${pages}`)
            .then(response => setData(response.data))
    }, [pages])

    return (
        <>
            <div className="images">
                {
                    data.map(({ id, url }) => {
                        return (
                            <div key={id} >
                                <img src={url} className="image" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="pagesNums">
                {
                    arr.map((_, index) => {
                        return (
                            <div key={index} style={{
                                backgroundColor: isActive ? 'salmon' : ''
                            }}
                                onClick={() => {
                                    setPages(index + 1)
                                    setIsActive(true);
                                }}>
                                {index + 1}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Pagination