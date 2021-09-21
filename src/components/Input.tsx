function Input() {
    return (
    <div className="input-group mb-3 w-100">
        <input type="text" className="form-control" aria-label="" aria-describedby="basic-addon" placeholder="What's your name?"></input>
        <div className="input-group-append">
            <button className="btn btn-primary" type="button">{ "->" }</button>
        </div>
    </div>
    )
}

export default Input;