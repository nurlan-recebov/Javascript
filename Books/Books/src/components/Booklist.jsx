import React from 'react';
import Book from './Book';
import './Booklist.css'
class Booklist extends React.Component{
render(){
    const booklist=this.props.books.map((book,i)=>{
        return <Book book={book} key={i}></Book>
    })
    return(
        <section className="page-section"  id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">BookFolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              
            </div>
            <div className="row">

              {booklist}

            </div>
        </div>
    </section>
 

    )
   
}
} 
export default Booklist