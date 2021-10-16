import { RepoType } from '../action-types/index'

interface SearcReposSuccessAction {
    type: RepoType.SEARCH_REPOS_SUCCESS;
    payload: string[]
}
interface SearcReposAction {
    type: RepoType.SEARCH_REPOS
}
interface SearcReposErrorAction {
    type: RepoType.SEARCH_REPOS_ERROR;
    payload: string
}
export type RepoActions =
    SearcReposAction |
    SearcReposErrorAction |
    SearcReposSuccessAction