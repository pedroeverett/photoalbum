import axios from "axios";
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CratePhoto extends Component {

    state = {
        caption: ''
    }

    handleFileUpload = (event) => {
        console.log('event',event)
        let data = new FormData();
        data.append('userPhoto', event.target.files[0]);
        data.append('caption', this.state.caption);

        axios.post('/api/photo', data)
            .then(response => console.log(response))
            .catch(error => console.log(error));

        window.location = '/';
    }

    updateCaption = (event) => {
        this.setState({
            caption: event.target.value
        });
    };

    render() {
        return (
            <div className='w-100 pa4 flex justify-center'>

                <div style={{maxWidth: 400}} className=''>
                    <label> Photo Comment: </label>
                    <input
                        className='w-100 pa3 mv2'
                        type="text"
                        name="caption"
                        value={this.state.caption}
                        onChange={this.updateCaption}
                        required
                        placeholder='Image Comment'
                    />
                    <label> Photo: </label>
                    <input
                        className='w-100 pa3 mv2'
                        type="file"
                        required
                        name='userPhoto'
                        placeholder='Image file'
                        onChange={this.handleFileUpload}
                    />
                </div>
            </div>
        )
    }
}
export default withRouter(CratePhoto);
