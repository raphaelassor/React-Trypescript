import { useState } from 'react'
export const GuestList: React.FC = () => {
    const [name, setName] = useState('')
    const [guests, setGuests] = useState<string[]>([])

    const onClick = () => {
        setGuests([...guests, name])
        setName('')
    }

    return <div className="guest-list">

        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
        {guests.map(guest => {
            return <p>{guest}</p>
        })}
    </div>
}