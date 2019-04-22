import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class FetchData extends Component {
    static renderForecastsTable(forecasts) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.dateFormatted}>
                            <td>{forecast.dateFormatted}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    displayName = FetchData.name
        
    componentDidMount() {
        let url = 'api/SampleData/WeatherForecasts';
        this.props.fetchData(url);
    }
    render() {
        let contents = this.props.isLoading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.props.data);

        return (
            <div>
                <h1>Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        isLoading: state.isFetchingData
    }
}

const mapDispatchToProps = {
    fetchData: actions.fetchDataAsync
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FetchData);
