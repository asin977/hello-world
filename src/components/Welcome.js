import React,{Component} from 'react';

// class Welcome extends Component {
//     render() {
//         return <h1>Welcome {this.props.class} and your superhero {this.props.heroname}</h1>
//     }
// }

// destructuring

class Welcome extends Component {
    render() {
        const {name,heroName} = this.props;
        return (
            <h1>
                Welcome {name} amd your superhero {heroName}
            </h1>
        )
    }
}
export default Welcome;
