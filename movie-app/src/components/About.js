import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div style={{ 'background': 'black', 'textAlign': 'center', 'color': 'white' }}>
                <h2>About</h2>
                <img src="https://www.themoviedb.org/assets/static_cache/e8f014d9088475c0d48f6fde47984570/images/v4/marketing/deadpool.png" width="902" height="298" />
                <h3>Let's talk about TMDb</h3>
                <p>The Movie Database (TMDb) is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2008. TMDb's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.</p>
            </div>

        );
    }
}

export default About;