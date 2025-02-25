import { useEffect, useState } from 'react'

const Card = ({ title }) => {

    const [count, setCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked: ${hasLiked}`);
    }, [hasLiked])

    useEffect(() => {

    }, [])

    return(
        <div className='inline-styles' onClick={() => {setCount(count + 1) }} style={{
            border: '1px solid black',
            padding: '20px'}}>   

            <h2>{ title } {count || null}</h2>
            <button onClick={() => setHasLiked(!hasLiked)}>
                {/* Conditional rendering */}
                {hasLiked? '💖': '🤍'}
            </button>
        </div>
    )
}

export default Card;