import React from 'react';
import serialize from 'form-serialize';

class AddMovie extends React.Component {
    handleFormSubmit=(e)=>{
        e.preventDefault();
        const newMovie = serialize(e.target, { hash: true });
        this.props.onAddMovie(newMovie)
        console.log(newMovie);
    }
  

    render() {

        return  (
            <div className="container">
            <form  className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="Fill The Form To Add A Movie.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="Name"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="Rating"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="ImageUrl"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="Overview" rows="5"></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
        )

    }
}


export default AddMovie;
