import React from "react";
import Header from "./Header";
import Batch from "./Batch";
import Branch from "./Branch";
import Course from "./Course";
import Posts from "./Posts";
import videos from "./videos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {PlayList} from "./Playlist_temp";
class App extends React.Component {

    constructor(props) {    
      super(props);
      this.state = {
        batch_filter : '0',
        branch_filter : '0',
        course_filter : '0',
        video_id : 1
      };
    }
changeBatch = (e) =>{
    console.log(e.target.value);
    this.setState({batch_filter: e.target.value})
}
changeBranch = (e) =>{
    console.log(e.target.value);
    this.setState({branch_filter: e.target.value})
}
changeCourse = (e) =>{
    console.log(e.target.value);
    this.setState({course_filter: e.target.value})
}
setSource= (e, sourceVal) => {
    console.log(sourceVal);
    this.setState({video_id: sourceVal})
}
render(){
    let filteredBatch = videos.filter(
        (vid)=>{
            if(this.state.batch_filter==='0')
            {
                return true
            }
            else
            {
                return vid.batch===this.state.batch_filter
            } 
        }
    )
    let filteredBranch = filteredBatch.filter(
        (vid)=>{
            if(this.state.branch_filter==='0')
            {
                return true
            }
            else
            {
                return vid.branch===this.state.branch_filter
            } 
        }
    )
    let filteredVideos = filteredBranch.filter(
        (vid)=>{
            if(this.state.course_filter==='0')
            {
                return true
            }
            else
            {
                return vid.batch===this.state.course_filter
            } 
        }
    )
    return <div>
        <Router>
            <Header/>
            <Switch>
                <Route path="/" exact render={() => 
                <div>
                    <table>
                    <tr>
                        <th>
                            BATCH
                        </th>
                        <th>
                            BRANCH
                        </th>
                        <th>
                            COURSE
                        </th>
                        
                    </tr>
                    <tr>
                        <td>
                            <Batch changeBatch = {this.changeBatch}/>
                        </td>
                        <td>
                            <Branch changeBranch = {this.changeBranch}/>
                        </td>
                        <td>
                            <Course changeCourse = {this.changeCourse}/>
                        </td>
                    </tr>        
                </table>
                <Posts video_list = {filteredVideos} setSource = {this.setSource}/>
            </div>
            }/>
            <Route path="/videos" exact component = {() => <PlayList fvideos={filteredVideos} v_id = {this.state.video_id}/>}/>
            </Switch>
        </Router>
        </div>
}
}
export default App;