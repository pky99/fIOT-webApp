import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'
const Demo=(props) =>{
    return <div className="maindiv_style">
            <h1>hello {props.name}</h1>
            <p>yes here we go again!</p>
            </div>
}

/*class Demo extends Component{
    render(){
        return <div className="maindiv_style">
            <h1>hello {this.props.name}</h1>
            <p>yes here we go again!</p>
            </div>
    }
}
*/
export default Demo;