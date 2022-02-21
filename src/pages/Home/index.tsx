import { Link } from 'react-router-dom';

import { Hero, Title, Subtitle } from './styles'

export const HomePage = () => {
    return (
        <Hero className="hero is-medium">
            <div className="hero-body">
                <div className="container">
                    <div className="columns">
                        <div className="column" style={{ textAlign: 'left' }}>
                            <Title className="title is-2">
                                Metroid Prime Randomizer
                            </Title>
                            <Subtitle className="subtitle">
                                Spice up your Metroid Prime playthroughs by shuffling items, elevators, and more.
                            </Subtitle>
                            <Link to="/" className="button is-link is-large">Get Started</Link>
                        </div>
                        <div className="column">
                            {/* TODO: Insert a 4:3 Prime screenshot */}
                            <figure className="image is-4by3">
                                <img src="https://www.fillmurray.com/400/300" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </Hero>
    );
};

export default HomePage;