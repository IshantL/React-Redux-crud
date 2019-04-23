import React, {Component} from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import GamesList from './GamesList';
class GamesPage extends Component{
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
    games: PropTypes.array.isRequired
}
function mapStateToProps(state){
    return {
        games: state.games
    }
}
export default connect(mapStateToProps)(GamesPage);