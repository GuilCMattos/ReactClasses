import { Component } from "react";

export default class Saudacao extends Component { 

   
    
    constructor(props) { 
        super(props) 

        this.state = { 
            type: this.props.type,
            name: this.props.name
        }

        this.setName = this.setName.bind(this)
        this.setTipo = this.setName.bind(this)
    }

    setTipo(e) { 
        this.setState({type: e.target.value})
    }

    setName(e) { 
        this.setState({name: e.target.value})
    }

    render() { 
        const {type, name} = this.state

        return ( 
            <div>
                <h1>{type} {name}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={type}  onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={name} onChange={ this.setName} />
            </div>
        )

    }
}