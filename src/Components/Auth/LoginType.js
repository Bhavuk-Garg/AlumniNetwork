import React from 'react'
import {Link} from 'react-router-dom'
export default function Login(){
    return (
        <div className="container" >
            <div className="row  justify-content-md-around flex-md-row flex-column mt-5">
                <Link to="/login/alumni">
                    <Card  className="col" name="Alumni" imgUrl='https://cdn3.iconfinder.com/data/icons/education-flat-icon-1/130/148-512.png'/> 
                </Link>
                <Link to="/login/college">
                <Card className="col" name="College" imgUrl='https://st2.depositphotos.com/1007566/11938/v/950/depositphotos_119380382-stock-illustration-university-college-icon-education-academic.jpg' />
                </Link>
                <Link to="/login/directorate">
                <Card className="col" name="Directorate" imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMZlgR2PyoyHcEWvYlDi8sQJ4KDQiyV5UVzYDaE4-goCsemNu&s' />
                </Link>

                </div>
         </div>
    )    
}

function Card(props){
    var _style={
        width: '200px',
        height: '200px'
    }
    return (
        <div className="card">
            <img src={props.imgUrl} style={_style} className="card-img-top mx-auto d-block" alt="Image" /> 
            <div className="card-body">
                 <h5 className="card-title text-center">{props.name}</h5>
            </div>
        </div>

    )
}
