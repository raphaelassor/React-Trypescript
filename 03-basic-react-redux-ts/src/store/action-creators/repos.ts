import axios from 'axios'
import { Dispatch } from 'react'
import { RepoType } from '../action-types/index'
import { RepoActions } from '../actions/repos'

interface PackageObj {
    package: { name: string }
}
interface PackageRes {
    objects: PackageObj[]
}

export const searchRepos = (term: string) => async (dispatch: Dispatch<RepoActions>) => {

    dispatch({ type: RepoType.SEARCH_REPOS })
    try {
        const { data } = await axios.get<PackageRes>('http://registry.npmjs.org/-/v1/search', {
            params: {
                text: term
            }
        })
        const names = data.objects.map((res: PackageObj) => {
            return res.package.name
        })
        dispatch({ type: RepoType.SEARCH_REPOS_SUCCESS, payload: names })
    } catch (err) {
        dispatch({
            type: RepoType.SEARCH_REPOS_ERROR,
            payload: err.message
        })
    }
}