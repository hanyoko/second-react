import React,{ Component } from 'react';

class ClassIteration extends Component {
    state = {
        names: [
            {id: 1, text: "눈"},
            {id: 2, text: "팥빙수"},
            {id: 3, text: "귤"},
            {id: 4, text: "붕어빵"}
        ],
        inputText: "",
        nextId: 5
    }
    onChange = (e) => this.setState({
        ...this.state,
        inputText: e.target.value
    })
    onClick = () => {
        const nextNames = [
            ...this.state.names,
            { id: this.state.nextId, text: this.state.inputText }
        ]
        this.setState({
            names: nextNames,
            inputText: "",
            nextId: this.state.nextId+1
        })
    }
    onRemove = (id) => {
        const nextNames = this.state.names.filter(name=> name.id !== id);
        this.setState({
            ...this.state,
            names: nextNames
        })
    }
    render(){
        const { names, inputText} = this.state;
        const namelist = names.map((name, index)=><li key={name.id}>
            {name.text}<button onClick={()=>this.onRemove(name.id)}>삭제</button>
        </li>)
        return (
            <div>
                {/* <input> 이벤트이름 = {함수이름} */}
                <input value={inputText} onChange={this.onChange}/>
                <button onClick={this.onClick}>추가</button>
                <ul>
                    {namelist}
                </ul>
            </div>
        );
    }
    
};

export default ClassIteration;