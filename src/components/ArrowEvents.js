
import * as React from 'react'

const ArrowEvent = () => {

    const [name, setName] = React.useState("")

    function handleChange(e) {
        console.log("handleChange , typed:", e.target.value)
    }

    return <> <h1>hello lul</h1>
        {name}
        <input onChange={e => setName(e.target.value)} type="text"></input>
    </>
}

export default ArrowEvent