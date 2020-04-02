import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Homepage = () => {
    return (
        <div className="fluid-container img-contain">
        <TextWrapper>
            <div className=" container heros">
                <h1 className="text-white">
                    <p>Explore Our Products</p>
                    <Link to="/list"><button className="btn hero-button btn-primary my-3 d-block">Shop Now</button></Link>
                </h1>
            </div>
            </TextWrapper>
        </div>
    );
}

const TextWrapper = styled.div`
}
`
export default Homepage;
