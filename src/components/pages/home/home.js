import React from 'react';
import "./home.scss";
import Red from "../../../red";

const Home = () => {

    return (
        <section id="home">

            <div className="home-container">

                <div className="home-card">

                    <h3 className="home-card-title">Home</h3>

                    <p>Some react examples (<Red>Login and Google Login</Red>, <Red>Counter</Red>,  
                        <Red> Product List with search and Product Detail</Red>), 
                        using <Red>Webpack</Red> and <Red>React Router</Red>
                    </p>
                    <p>
                        TODO MORE!
                    </p>

                </div>


            </div>

        </section>
    );
}

export default Home;
