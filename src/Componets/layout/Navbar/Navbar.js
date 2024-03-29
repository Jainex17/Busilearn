import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {  logout } from "../../../redux/actions/user";
import Avatar from '@mui/material/Avatar';
import { Box, Divider, Button, Tooltip, IconButton, MenuItem, Menu } from "@mui/material";
import "./Navbar.scss";


function Navbar({whitenav = true}) {
  function menuclick() {
    const body = document.querySelector("body");
    const navbar = document.querySelector(".navbar");
    const nav = document.querySelector(".res-nav");

    navbar.classList.toggle("resnavbaropen");
    navbar.classList.toggle("resnavbarclose");
    nav.classList.toggle("res-nav-open");
    nav.classList.toggle("res-nav-close");
    body.classList.toggle("fixed");
  }

  const { isAuthenticated,user } = useSelector((state) => state.user);
  const { category } = useSelector((state) => state.courses);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  }

  const [search, setSearch] = React.useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  let shadowstyle;
  
  if(!whitenav){ 
    shadowstyle = {
      boxShadow: "0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)",
    }
  }
  const navigate = useNavigate();
  function searchhandler(e){
    e.preventDefault();
    navigate("/courses/"+search, { state: { search: search } });
    
  }

  // let isAdded = false;
  // window.addEventListener('scroll', function() {
  //   const scrollPosition = window.scrollY;
  //   var header = document.querySelector("body");
  //   if(header){
  //     if (scrollPosition > 600 && !isAdded) {
  //           header.classList.add("skicky");         
  //           isAdded = true;
  //           if(whitenav){
  //             header.classList.add("backskicky");
  //           }
  //         } else if (scrollPosition <= 300 && isAdded) {
  //           header.classList.remove("skicky");
  //           isAdded = false;
  //           if(whitenav){
  //             header.classList.remove("backskicky");
  //           }
  //         }
  //   }
  // });

  return (
    <div>
      {/* { whitenav ? ( */}
      
        <nav style={shadowstyle}>
        <header className={"navbar resnavbarclose "+ (whitenav ? null : 'nav-box-shadow')}>
          {/* { whitenav ? (<></>) : (<div style={{backgroundColor:"white",boxShadow:"0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)"}}></div>) } */}

          <section className="navbar-right">
            <div className="logo">
              <Link to={"/"}>{ whitenav ? (<h1>Busilearn</h1>) : (<h1 style={{color:"black"}}>Busilearn</h1>) }</Link>
              
            </div>
            <div className="nav-menu-wapper">
              <button type="button" className="nav-menu-title">
                { whitenav ? (<>
                <span>Categories</span>
                <i className="fa-solid fa-angle-down"></i></>) : (
                  <>
                <span style={{color:"black"}}>Categories</span>
                <i className="fa-solid fa-angle-down" style={{color:"black"}}></i></>
                ) } 
              </button>
              <div className="category-menu">
                <ul>
                  { category && category.map((cat,index) => (
                    cat.active &&
                    <li key={index}>
                    <Link to={"/courses/" + category[index].name}>
                      <button>
                        <span>{category && category[index].name} </span>
                        {/* <i className="fa-solid fa-angle-right"></i> */}
                      </button>
                    </Link>
                  </li>
                  )) }
                  
                  
                </ul>
              </div>
            </div>
            <div className="nav-search">
              <i className="fa-solid fa-magnifying-glass"></i>
                  <form onSubmit={searchhandler}>
                    <input type={"text"}
                        placeholder="Search for anyting"
                        value={search ? search : ""}
                        onChange={(e)=> setSearch(e.target.value) }
                         />
               </form>
            </div>
          </section>
          <section className="navbar-left">
            <div className="nav-links">
              <ul>
                <li>
                  { whitenav ? (
                      <Link to="/teachwithus">Teach with us</Link>
                  ) : (
                    <Link to="/teachwithus" style={{color:"black"}}>Teach with us</Link>
                  ) }
                </li>
                <li><Link to={"/cart"}>
                  { whitenav ? (
                  <>
                    <span className="cart-num">{user && user.cart.length}</span>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </>) : (<>
                    <span className="cart-num">{user && user.cart.length}</span>
                  <i className="fa-solid fa-cart-shopping" style={{color:"black"}}></i>
                  </>
                  ) }
                  </Link>
                  </li>
                <li>
                  
                  {
                    isAuthenticated ? 
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                      <div className="nav-profile">

                    <Tooltip title="Profile"> 
                      <IconButton
                          onClick={handleClick}
                          // onClick={dropdownHandler}
                          size="small"
                          sx={{ ml: 2 }}
                          aria-controls={open ? 'account-menu' : undefined}
                          aria-haspopup="true"
                          aria-expanded={open ? 'true' : undefined}
                        >

                        <Avatar alt="Profile pic" src={user && user.avatar.url} sx={{ width: 32, height: 32 }}  />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={open}
                      onClose={handleClose}
                      onClick={handleClose}
                      disableScrollLock={ true }
                      PaperProps={{
                        elevation: 0,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.50,
                            mr: 1,
                            
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <Link to={"/profile"}>
                        <MenuItem onClick={handleClose}>
                          Profile
                        </MenuItem>
                        </Link> 
                        {/* <MenuItem onClick={handleClose}>
                          
                        </MenuItem> */}
                        <Divider />
                        
                        <MenuItem onClick={handleClose}>
                        <Button color="error" variant="outlined" fullWidth sx={{mt:1}} onClick={logoutHandler}>Logout</Button>
                        </MenuItem>
                    </Menu>
                    
                      </div> 
                      </Box>
                    : 
                    <Link to="/signup">
                      { whitenav ? (
                        <button className="signupbtn">Sign Up</button>
                      ) : (
                        <button className="signupbtn signupbtnwhite">Sign Up</button>
                      )}
                      </Link>
                } 

                </li>
              </ul>
            </div>
            <div className="res-nav-btn" onClick={menuclick}>
              {whitenav ? (
                <i className="fa-solid fa-bars" id="nav-bars"></i>
              ) : (
                <i className="fa-solid fa-bars" id="nav-bars" style={{color:"black"}}></i>
              )}
              {whitenav ? (
                <i className="fa-solid fa-xmark" id="nav-xmark"></i>
              ) : (
                <i className="fa-solid fa-xmark" id="nav-xmark" style={{color:"black"}}></i>
              )}
              
            </div>
          </section>
        </header>
        <div className="res-nav res-nav-close">
          <div className="res-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type={"text"} placeholder="Search anything" />
          </div>
          <div className="res-links">
            <ul>
              <li>
                <span>Entrepreneurship</span>
              </li>
              <li>
                <span>Communication</span>
              </li>
              <li>
                <span>Sales</span>
              </li>
              <li>
                <span>Project Management</span>
              </li>
              <li>
                <span>E-Commerce</span>
              </li>
            </ul>
          </div>
          <div className="res-nav-btn-warp">
          <Link to={"/teachwithme"}><button>Join for Free</button></Link>
            <Link to={"/login"}><button>Log In</button></Link>
          </div>
        </div>
      </nav>

    </div>
  );
}
export default Navbar;
