import React from 'react';
import Red from "./../../components/Red/Red";
import "./home.scss";

const Home = () => {

    return (
        <section id="home">
            <div className="home-container">
                <div className="home-card">

                    <h3 className="home-card-title">Home</h3>

                    <p>Some react examples <Red>Login</Red>, <Red>Counter</Red>,  
                        <Red> Product List with search and Product Detail</Red>, <Red>Add/Remove names in a List</Red>, 
                        <Red> UseRef</Red>, <Red> UseCallback</Red> and <Red>UseMemo</Red>,
                        using <Red>Webpack</Red> and <Red>React Router</Red>
                    </p>

                    <h2 className="home-card-title">Note for Hooks</h2>
                    <p>Hence, a useCallback hook should be used when we want to memoize a callback, 
                    and to memoize the result of a function to avoid expensive computation we can use useMemo. 
                    useEffect is used to produce side effects to some state changes.
                    One thing to remember is that one should not overuse hooks. 
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
