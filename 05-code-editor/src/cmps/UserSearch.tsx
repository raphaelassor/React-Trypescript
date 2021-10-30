import React, { useRef, useState, useEffect } from 'react'

interface User {
    name: string;
    email: string;
    age: number
}

// HOVER OVER THE EVENT ATTR IN THE ELEMENT TO SEE WHAT TYPE IT IS IN TS 
//EXAMPLE : HOVER OVER onDragStart TO SEE THE EVENT TYPE
export const UserSearch: React.FC = () => {
    const [user, setUser] = useState<User | undefined>()
    const [name, setName] = useState('')
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        inputRef?.current?.focus()
    }, [])

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setName(ev.target.value)
    }

    const handleDrag = (ev: React.DragEvent<HTMLDivElement>) => {
        console.log(ev)
    }

    return <div className="user-search">
        <input type="text" onChange={handleChange} value={name} ref={inputRef} />
        <div draggable onDragStart={handleDrag}>Drag Me! </div>
    </div>
}