import React from 'react';
import './ModalWindow.css'

class ModalWindow extends React.Component {
    constructor(props){
        super(props)
        console.log(props.isOpened);
        this.label = "";
        this.goal = "";
        this.time = "";
        this.changeOpened = props.changeOpened.bind(this);
        this.onChangeInput = function onChangeInput(e){
            switch(e.target.name){
                case 'label':
                    this.label = e.target.value;
                    break;
                case 'goal':
                    this.goal = e.target.value;
                    break;
                case 'time':
                    this.time = e.target.value;
                    break;        
                }
            //console.log(label +' '+goal+' '+time);
        }.bind(this);
       

    }
    render(){
        
        return (
            <div className = { `${this.props.isOpened ? 'opened':'closed'} `}>
                        <div className="close_button" onClick={this.props.changeOpened}>x</div>
                        <form>
                            <input type="text" name='label' placeholder="label" onChange={this.onChangeInput}/> 
                            <input type="text" name='goal' placeholder="goal" onChange={this.onChangeInput}/> 
                            <input type="text" name='time' placeholder="date" onChange={this.onChangeInput}/> 
                        </form>
                        <div className='confirm_todo' onClick={()=>{
                            this.props.submitTodo(this.label, this.goal, this.time);
                        
                            this.props.changeOpened();
                        }}>confirm</div>

            </div>
        );
    }
        

}
export default ModalWindow;
