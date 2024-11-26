

function User(){


    return(
        <div>
            <h1>User Profile</h1>
            <p>Page in development</p>
            <p>Username: {localStorage.getItem('user')}</p>
            <p>Email: {localStorage.getItem('email')}</p>
        </div>
    )
}

export default User;