import { RepoType } from '../action-types/index'
import { RepoActions } from '../actions/repos'

interface ReposState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const initialState: ReposState = {
    loading: false,
    error: null,
    data: []
}

export const repoReducer = (
    state: ReposState = initialState, action: RepoActions
): ReposState => {
    switch (action.type) {
        case RepoType.SEARCH_REPOS:
            return { loading: true, error: null, data: [] }
        case RepoType.SEARCH_REPOS_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case RepoType.SEARCH_REPOS_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state

    }
}