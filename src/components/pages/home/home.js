import React from 'react';
import { useGoogleLogin } from 'react-use-googlelogin';

function Home() {
        
    const { googleUser } = useGoogleLogin();

    return (
        <section id="home">

            <div>
                <h1>{googleUser.profileObj.name}</h1>
                <p>{googleUser.profileObj.email}</p>
                <img src={googleUser.profileObj.imageUrl} />
            </div>
        </section>
    );
}

export default Home;
