import {useSelector} from "react-redux";

export default function UserInfo() {
    const fullName = useSelector(state => state.output.text)
    return (
        <div><p>
            {fullName}
        </p></div>
    )
}