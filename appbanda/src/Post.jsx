export function Post(props) {
    return(
        <div>
            <strong>{props.titulo}</strong>
            <ul>    
                <li>{props.p1}</li>
                <li>{props.p2}</li>
                <li>{props.p3}</li>
                <li>{props.p4}</li>
                <li>{props.p5}</li>
            </ul>
        </div>
    )
}