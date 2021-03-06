import React, {Component} from "react"
import {auth} from "../services/firebase"
import {db} from "../services/firebase"
import LogOut from "../components/logOut"
import firebase from 'firebase/app'
import Header from "../components/header"

export default class Chat extends Component{
    constructor(props) {
        super(props)
        this.state = {
            user: auth().currentUser,
            chats: [],
            content: '',
            readError: null,
            writeError: null,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        this.setState({ readError: null })
        try {
          db.ref("chats").on("value", snapshot => {
            let chats = [];
            snapshot.forEach((snap) => {
              chats.push(snap.val());
            });
            this.setState({ chats });
          });
        } catch (error) {
          this.setState({ readError: error.message });
        }
      }
    handleChange(event) {
        this.setState({
          content: event.target.value
        });
      }
    
      async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
          await db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid,
            userName: this.state.user.email
          });
          this.setState({ content: '' });
        } catch (error) {
          this.setState({ writeError: error.message });
        }
      }  

    render(){
        return (
          <div>
            <Header />
            <div className="chat-area">
              <div >
                  {this.state.chats.content}
                {this.state.chats.map(chats => {
                  return <p className={"chat-bubble " + (this.state.user.uid === chats.uid ? "current-user" : "")} key={chats.timestamp}> {chats.userName} -- {chats.content}</p>
                })}
                </div>
              </div>
              
              <form onSubmit={this.handleSubmit} className="chat-entry">
                <input onChange={this.handleChange} value={this.state.content} className="text-enter"></input>
                {this.state.error ? <p>{this.state.writeError}</p> : null}
                <button type="submit">Send</button>
              </form>
              <div>
                Logged in as: <strong>{this.state.user.email}</strong>
              </div>
              <LogOut/>
            </div>
           
          );
    }
}