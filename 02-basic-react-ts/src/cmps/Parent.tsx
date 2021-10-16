import { Child, ChildAsFC } from "./Child"

export const Parent = () => {

    // return <Child color="red" onClick={() => console.log('clicked')} />
    return <ChildAsFC color="red" onClick={() => console.log('clicked')} />
}