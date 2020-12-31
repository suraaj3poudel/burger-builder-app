import React,{Component} from 'react'
import Auxilliary from '../../hoc/Auxilliary'
import  './Layout.css'
import  Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
    state={
        showSideDrawer:false
    }
    sideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    sideDrawerToggleHandler=()=>{
        this.setState({showSideDrawer:!this.state.showSideDrawer})
    }
    render(){
        return(
            <Auxilliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}></SideDrawer>
                <main className="Content">
                    {this.props.children}
                </main>
            </Auxilliary>
    )}
};

export default Layout