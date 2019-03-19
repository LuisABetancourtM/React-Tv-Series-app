import React, {Component} from 'react';
import Intro from '../../Components/Intro';
import SeriesList from '../../Components/SeriesList';
import Loader from '../../Components/Loader';

class Series extends Component{
    state = {
        series: [],
        seriesName: '',
        isFetching: false
    }

onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
     fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
    .then(response => response.json())
    .then(json => this.setState({ series: json, isFetching:false }));
}
    render(){
        const{series, seriesName, isFetching} = this.state;
        return(
            <div>
                <Intro message="Here you can find all of your loved series"/>
                The length of series array - {this.state.series.length}
                <div>
                    <input
                        value={seriesName}
                        type="text"
                        onChange={this.onSeriesInputChange} />
                </div>
                {/*Toda esta sección es React puro*/}
                {
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p>Please enter series name into the input</p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                        <p>No TV Series have been found with this name</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series} />
                }
            </div>

        )
    }
}

export default Series;
