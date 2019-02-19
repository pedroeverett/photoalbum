import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import axios from "axios";

class ListPhoto extends Component {

    state = {
        photos: []
    }

    componentDidMount() {
        axios.get('/api/photos')
            .then(response => this.setState({photos: response.data}))
            .catch(error => console.log(error));
    }

    getFilePath = fileName => `/uploads/${fileName}`;

    render() {

        return (

            <div className="col-sm-12">
                {this.state.photos.map(photo => (
                    <div className="col-sm-4" key={photo.id}>
                        <div className='pa3 bg-black-05 ma3'>
                            <div
                                style={{
                                    backgroundImage: `url(${this.getFilePath(photo.fileName)})`,
                                    backgroundSize: 'cover',
                                    paddingBottom: '100%',
                                }}
                            />
                            <div>
                                <div className='movie'>
                                    <h3 align="center"> { photo.caption }&nbsp; </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default withRouter(ListPhoto);
