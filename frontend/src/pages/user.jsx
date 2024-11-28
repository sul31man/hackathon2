

function User(){


    return(
        <div>
            <h1>User Profile</h1>
            <p>Page in development</p>
            <p>Username: {localStorage.getItem('user')}</p>
            <p>Email: {localStorage.getItem('email')}</p>

            <a href="/verify"> Complete your user verfication process in order to start selling items</a>
        </div>
    )
}

export default User;