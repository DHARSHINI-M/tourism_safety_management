import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,Modal, ModalHeader, ModalBody} from 'reactstrap';
import { NavLink } from 'react-router-dom';
  
class Header extends Component {
  constructor(props) {
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.toggleNav = this.toggleNav.bind(this);
      this.state = {
        navBackground:"#00000000",
        isNavOpen: false,
        isModalOpen: false
      };
    }
    //`url(${navimage})`
    componentDidMount() {
      
      document.addEventListener("scroll", () => {
        const backgroundcolor = window.scrollY < 200 ? this.props.navbg :'linear-gradient(rgba(0, 0, 0,1.0),rgba(0, 0, 0, 1.0))' ;
        this.setState({ navBackground: backgroundcolor });
      });
    }
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen
      });
    }
    toggleNav() {
      this.setState({
        isNavOpen: !this.state.isNavOpen
      });
    }
    
  render() {
    const guestLinks=(<>
        <li className="" style={{float:"right"}}>
            <div class="user-login">
                <a href="/login"><i class="fa fa-user" aria-hidden="true"/></a>
            </div>
        </li>
      </>);
    const userLinks=(
        <>
        <li className=""><a href="/plantrip">Plan Trip</a></li>
        <li className="" style={{float:"right"}}>
            <div class="user-login" >
                <a href="/login" ><i class="fa fa-sign-out" aria-hidden="true"/></a>
            </div>
        </li>
      </>
      );
    return(
      <React.Fragment>
          
        <Navbar dark expand="md" className="fixed-top" style={{backgroundImage:this.state.navBackground}}>
            
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand  href="/home"><span className="fa fa-free-code-camp"></span>Tourists Galore</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar style={{justifyContent:'space-between'}}>
              <Nav className="mr-auto py-3 d-lg-flex" navbar>
                <NavItem >
                <li className="active"><a href="/home">Home</a></li>
                </NavItem>
                <NavItem >
                <a href="/home#about">About Us</a>
                </NavItem>
                <NavItem>
                <a href="/home#services">Services</a>
                </NavItem>
                <NavItem>
                <a href="/home#stats">Stats</a>
                </NavItem>
                <NavItem>
                <a href="/home#testimonials">Testimonials</a>
                </NavItem>
                <NavItem>
                <a href="/home#contact">Contact us</a>
                </NavItem>
              </Nav>
              <Nav navbar className="justify-content-end">
              {this.props.loggedIn?userLinks:guestLinks}    
              </Nav>   
            </Collapse>
          </div>
        </Navbar>
        
      </React.Fragment>
    );
  }
}


export default Header;
