import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="container">
            <div
                className="row"
                style={{ marginTop: "calc((100vh - 146px) / 2)" }}
            >
                <div className="col s12 m8 offset-m2">
                    <div className="card">
                        <div className="card-content center">
                            Welcome
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
