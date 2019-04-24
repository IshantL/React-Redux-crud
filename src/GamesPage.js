import React, {Component} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './GamesList';
import {fetchGames} from './actions';

class GamesPage extends Component{

    componentDidMount(){
        this.props.fetchGames();
    }
render(){
    return(
        <div>
            Games Page
            <GamesList games={this.props.games}/>
        </div>
    )
}
}

GamesPage.propTypes={
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        games: state.games
    }
}
export default connect(mapStateToProps,{fetchGames})(GamesPage);