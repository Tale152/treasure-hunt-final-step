import MyRow from "./MyRow"
import crown from '../../res/crown.png'

export default function Header(){
    return (
        <div>
            <MyRow>
                <img src={crown} alt="Kings quest" width="256" height="256"/>
            </MyRow>
            <MyRow>
                <h1>Kings quest</h1>
            </MyRow>
        </div>
    )
}
