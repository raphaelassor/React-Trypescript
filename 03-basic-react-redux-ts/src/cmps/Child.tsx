//  OPTION 1 
interface ChildProps {
    color: string;
    onClick: () => void
}
export const Child = ({ color, onClick }: ChildProps) => {
    return <div>
        <h1>HELLO {color}</h1>
        <button onClick={onClick}>Click! </button>
    </div>
}

// OPTION 2 
export const ChildAsFC: React.FC<ChildProps> = ({ color, children }) => {
    return <h1>HELLO {color}</h1>
}

