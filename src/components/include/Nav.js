import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { makeStyles } from '@material-ui/styles'
import HoverMenu from 'material-ui-popup-state/HoverMenu'
import {
  usePopupState,
  bindHover,
  bindFocus,
  bindMenu,
} from 'material-ui-popup-state/hooks'

// const useCascadingMenuStyles = makeStyles(() => ({
//   // submenu: {
//   //   marginTop: theme.spacing(-1),
//   // },
//   title: {
//     flexGrow: 1,
//   },
//   // moreArrow: {
//   //   marginRight: theme.spacing(-1),
//   // },
// }))

const CascadingContext = React.createContext({
  parentPopupState: null,
  rootPopupState: null,
})

function CascadingMenuItem({ onClick, ...props }) {
  const { rootPopupState } = React.useContext(CascadingContext)
  if (!rootPopupState) throw new Error('must be used inside a CascadingMenu')
  const handleClick = React.useCallback(
    (event) => {
      rootPopupState.close(event)
      if (onClick) onClick(event)
    },
    [rootPopupState, onClick]
  )

  return <MenuItem {...props} onClick={handleClick} />
}

// function CascadingSubmenu({ title, popupId, ...props }) {
//   const classes = useCascadingMenuStyles()
//   const { parentPopupState } = React.useContext(CascadingContext)
//   const popupState = usePopupState({
//     popupId,
//     variant: 'popover',
//     parentPopupState,
//   })
//   return (
//     <React.Fragment>
//       <MenuItem {...bindHover(popupState)} {...bindFocus(popupState)}>
//         <span className={classes.title}>{title}</span>
//         {/* <ChevronRight className={classes.moreArrow} /> */}
//       </MenuItem>
//       <CascadingMenu
//         {...props}
//         classes={{ ...props.classes, paper: classes.submenu }}
//         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//         popupState={popupState}
//       />
//     </React.Fragment>
//   )
// }

function CascadingMenu({ popupState, ...props }) {
  const { rootPopupState } = React.useContext(CascadingContext)
  const context = React.useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState]
  )

  return (
    <CascadingContext.Provider value={context}>
      <HoverMenu {...props} {...bindMenu(popupState)} />
    </CascadingContext.Provider>
  )
}

const Nav = ({ isAuthenticated, logout }) => {
  let assets_const = 'assets';

  if((window.location.pathname).split('/').length === 3 || window.location.pathname === '/account/dashboard') { 
    assets_const = '../assets';
  }
  
  const popupState_home = usePopupState({
    popupId: 'demoMenu_home',
    variant: 'popover',
  })
  const popupState_crypto = usePopupState({
    popupId: 'demoMenu_crypto',
    variant: 'popover',
  })
  const popupState_services = usePopupState({
    popupId: 'demoMenu_services',
    variant: 'popover',
  })
  const popupState_account = usePopupState({
    popupId: 'demoMenu_account',
    variant: 'popover',
  })
  return (
    <div className="nav_box" style={{ height: 'auto', backgroundColor: '#1d1e21 !important' }}>
      <Link to="/"><label style={{ fontSize: '1.2rem',fontFamily:'NexaLight', color: 'white', cursor:'pointer', padding: '20px', marginRight: '10px'}}
        variant="contained"
      >
        Home
      </label>
      </Link>

      <label className="font-white dropdown-toggle" style={{ fontSize: '1.2rem',fontFamily:'NexaLight', color: 'white', cursor:'pointer', padding: '20px', marginRight: '10px'}}
        variant="contained"
        {...bindHover(popupState_home)}
        {...bindFocus(popupState_home)}
      >
        Discover
      </label>
      <CascadingMenu
        popupState={popupState_home}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <div style={{width: "800px", height: "400px", display: "flex"}} >
          <table className="nav-table">
            <tr>
              <td rowSpan={2} style={{width: "33.3%"}}>
                <Link to="/aboutus">
                  <div className="content" >
                    <p className="title">About</p>
                    <span className="detail">Discover the story behind OX STOCKS as a company, beliefs and goals for the future.</span>
                  </div>
                </Link>
              </td>
              <td style={{width: "33.3%"}}>
                <Link to="/location">
                  <div className="content1">
                    <p className="title">Locations</p>
                    <span className="detail">Find our Global Offices & Representatives.</span>
                  </div>
                </Link>
              </td>
              <td style={{width: "33.3%"}}>
                <Link to="/partnerships">
                  <div className="content1">
                    <p className="title">Partnerships</p>
                    <span className="detail">Can we work together? </span>
                  </div>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/referral">
                  <div className="content1">
                    <p className="title">Referral</p>
                    <span className="detail">Be paid to refer people to our platform.</span>
                  </div>
                </Link>
              </td>
              <td>
                <Link to="/contactus">
                  <div className="content1">
                    <p className="title">Contact Us</p>
                  <span className="detail">How can we further assist you?</span>
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </CascadingMenu>

      <label className="font-white dropdown-toggle"  style={{ fontSize: '1.2rem',fontFamily:'NexaLight', color: 'white', cursor:'pointer', padding: '20px', marginRight: '10px' }}
        variant="contained"
        {...bindHover(popupState_crypto)}
        {...bindFocus(popupState_crypto)}
      >
        Crypto
      </label>
      <CascadingMenu
        popupState={popupState_crypto}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        
        <div style={{width: "800px", height: "400px", display: "flex"}}>
          <table className="nav-table">
            <tr>
              <td rowSpan={2} style={{ width: "33.3%" }}>
                <Link to="/marketplace">
                  <div className="content" >
                    <p className="title">Marketplace</p>
                      <span className="detail">Buy/Sell digital assets such as NFT's and domain names.</span>
                  </div>
                </Link>
              </td>
              <td style={{ width: "33.3%" }}>
                <Link to="/crypto">
                  <div className="content1">
                    <p className="title">Buy Crypto</p>
                    <span className="detail">Let's add some crypto to your OX Wallet</span>
                  </div>
                </Link>
              </td>
              <td>
                <Link to="/oxmining">
                  <div className="content1">
                    <p className="title">Mining</p>
                    <span className="detail">Cloud Mining Platform Available For All Devices.</span>
                  </div>
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/oxcoin">
                  <div className="content1">
                    <p className="title">Ox Coin</p>
                    <span className="detail">The premium currency of oxstocks.com</span>
                  </div>
                </Link>
              </td>
              <td>
                <Link to="/">
                  <div className="content1">
                    <p className="title">Ox Chain</p>
                    <span className="detail">Our public blockchain explorer </span>
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </CascadingMenu>

      <label className="font-white dropdown-toggle"  style={{ fontSize: '1.2rem',fontFamily:'NexaLight', color: 'white', cursor:'pointer', padding: '20px', marginRight: '10px'}}
        variant="contained"
        {...bindHover(popupState_services)}
        {...bindFocus(popupState_services)}
      >
        Services
      </label>
      <CascadingMenu
        popupState={popupState_services}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        
        <div style={{width: "800px", height: "400px", display: "flex"}} >
          <table className="nav-table">
            <tr>
              <td rowSpan={2}>
                <Link to="/oxlabs">
                  <div className="content">
                    <p className="title">Labs</p>
                    <span className="detail">Where our engineers live and work 24/7. Browse our upcoming projects and reach out to us if you have a crypto project idea.</span>
                  </div>
                </Link>
              </td>
              <td rowSpan={2}>
                <Link to="/oxschools">
                  <div className="content">
                    <p className="title">School</p>
                    <span className="detail">Learn everything about our crypto currency and the future of digital currencies. Pick up some useful tips when using our platform.</span>
                  </div>
                </Link>
              </td>
              <td rowSpan={2}>
                <Link to="/">
                  <div className="content">
                    <p className="title">Connect</p>
                    <span className="detail">Learn everything about our crypto currency and the future of digital currencies. Pick up some useful tips when using our platform.</span>
                  </div>
                </Link>
              </td>
            </tr>
          </table>
        </div>
      </CascadingMenu>
      <label><Link to="/wallet" className="nav-link wallet_btn wallet_btn_fontColor" href="#">&nbsp;&nbsp;<img className="img-fluid" src={`${assets_const}/img/index/Iconawesome-wallet.png`} width="21.78" height="19.05"  alt="" />&nbsp;&nbsp;Wallet</Link></label>
      <label className="font-white dropdown-toggle"  style={{ fontSize: '1.2rem',fontFamily:'NexaLight', color: 'white', cursor:'pointer', padding: '20px', marginRight: '10px'}}
        variant="contained"
        {...bindHover(popupState_account)}
        {...bindFocus(popupState_account)}
      >
        &nbsp;&nbsp;<img className="img-fluid" src={`${assets_const}/img/index/Iconawesome-user-alt.png`} width="19.05" height="19.05" alt="" />&nbsp;&nbsp;
        Accounts
      </label>
      <CascadingMenu
        popupState={popupState_account}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <div>
        {isAuthenticated ? (
          <div>
            <Link to="/account/dashboard"><CascadingMenuItem><label style={{ fontFamily: 'NexaLight', width: "130px", textAlign: 'center', cursor: "pointer" }}>Account Info</label></CascadingMenuItem></Link>
            <Link to="" onClick={logout}><CascadingMenuItem><label style={{ fontFamily: 'NexaLight', width: "130px", textAlign: 'center', cursor: "pointer" }}>Logout</label></CascadingMenuItem></Link>
          </div>
        ) : (
          <div>
            <Link to="/login"><CascadingMenuItem><label style={{ fontFamily: 'NexaLight', width: "130px", textAlign: 'center', cursor: "pointer" }}>Login</label></CascadingMenuItem></Link>
            <Link to="/register"><CascadingMenuItem><label style={{ fontFamily: 'NexaLight', width: "130px", textAlign: 'center', cursor: "pointer" }}>Register</label></CascadingMenuItem></Link>
          </div>
        )}
        
        </div>
      </CascadingMenu>
      
      {/* <label><Link to="" className="nav-link account_btn dropdown-toggle" href="#" >&nbsp;&nbsp;<img className="img-fluid" src="assets/img/index/Iconawesome-user-alt.png" width="19.05" height="19.05" alt="" />&nbsp;&nbsp;Account</Link></label> */}
    </div>
  )
}

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Nav);

