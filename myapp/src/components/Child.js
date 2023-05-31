function Child(props) {

    return <input type="text" onChange={props.changeInput} value={props.value} />
}
export default Child;