import MyRow from './MyRow'

export default function Exposition(props){
    return <MyRow><h2 className={"mx-2"}>{props.text}</h2></MyRow>
}
