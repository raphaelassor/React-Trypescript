import { useState } from "react"
import { useActions } from "../utils/hooks/useActions"
import { useTypedSelector } from "../utils/hooks/useTypedSelector"


export const RepoList: React.FC = () => {
    const [term, setTerm] = useState('')
    const { searchRepos } = useActions()
    const { data, error, loading } = useTypedSelector(state => state.repoModule)

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setTerm(ev.target.value)
    }
    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        searchRepos(term)
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input type="text" onChange={handleChange} />
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h4>loading...</h4>}
        {data.map(name => {
            return <p>{name}</p>
        })}
    </div>
}