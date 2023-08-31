import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link,Outlet } from 'react-router-dom';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdDashboardCustomize } from 'react-icons/md';
import { PiChartLineUpBold } from 'react-icons/pi';
import { PiChartPieSliceFill } from 'react-icons/pi';
import { BsFillPersonFill } from 'react-icons/bs';
import { PiChatTeardropTextBold } from 'react-icons/pi';
import { RiFileChartFill } from 'react-icons/ri';
import './Sidebar.css'
import Header from '../header/Header';
import { useContext } from 'react';
import { MainContext } from '../../../utils/MainContext';
import Discoverly from '../../../public/sidebar_Icons/discovery'
import Dashboard from '../../../public/sidebar_Icons/dashboard'
import Social from '../../../public/sidebar_Icons/social'
import Segment from '../../../public/sidebar_Icons/segmentation'
import Competitors from '../../../public/sidebar_Icons/competitors'
import Channels from '../../../public/sidebar_Icons/channels'


function sidebar() {
    const [closed, setclosed] = useState(false)
    const [menu, setmenu] = useState(false)
    const{ username, setusername} = useContext(MainContext)
    const{ email, setemail} = useContext(MainContext)

    useEffect(() => {
        const header = document.querySelector('.header');
        
        // const styles = window.getComputedStyle(header);
        // window.onload=()=>{
            const real = header.clientHeight
            // const headerHeight = styles.height;
            // const paddHeight = styles.paddingTop;
            // const real_height = parseFloat(headerHeight)+( parseFloat(paddHeight)*2)
       
            // set CSS as a value
            document.documentElement.style.setProperty("--sl-header-height", real+"px");
          
           
            if(window.innerWidth < 880){
                setclosed(true)
            }
        // }
        setusername(localStorage.getItem("user"))
        setemail(localStorage.getItem("email"))
    }, [])
    
    const hide_tawk= ()=>{
        document.querySelector("iframe").style.display="none"
    }
    const show_tawk =()=>{
        document.querySelector("iframe").style.display="block !important"
    }

  return (
    <>
    <Header menu={closed} active={()=>{setmenu(!menu)}}  />
    <div style={{display:"flex",position:"relative"}}>

            <Sidebar backgroundColor="#131313" className="sidebar" collapsed={closed== true? true:false} collapsedWidth={0} >
                <div className='limited_sidebar'>
                        <Menu
                    
                menuItemStyles={{
                    // button: {
                    
                    //     '&:hover': {
                    //        backgroundColor: 'green',
                    //     },
                    // },
                
                    button: ({ level, active, disabled }) => {
                        
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                        return {
                        color: active ? 'white' : '#9FA8C7',
                        // fill:active ? 'white !important' : '#9FA8C7 !important',
                        backgroundColor: active ? '#2A2D34' : undefined,
                        '&:hover': {
                            backgroundColor: '#2A2D34',
                        },
                        };
                        
                    },

                }}
            >
            <MenuItem component={<Link to="/" />} onClick={()=>{hide_tawk()}} active={window.location.pathname === "/"} icon={<Discoverly />}
            >Discovery</MenuItem>
            <MenuItem component={<Link to="/dashboard" />} onClick={()=>{hide_tawk()}} active={window.location.pathname === "/dashboard"} icon={<Dashboard />}
            > Dashboard</MenuItem>
            <MenuItem component={<Link to="/social" />} onClick={()=>{hide_tawk()}} active={window.location.pathname === "/social"} icon={<Social />}
            > Social</MenuItem>
            <MenuItem component={<Link to="/segmentation" />} onClick={()=>{hide_tawk()}} active={window.location.pathname === "/segmentation"} icon={<Segment/>}
            > Segmentation</MenuItem>
            <MenuItem component={<Link to="/competitors" />} onClick={()=>{hide_tawk()}} active={window.location.pathname === "/competitors"} icon={<Competitors />}
            > Competitors </MenuItem>
            <MenuItem component={<Link to="/channels" />} onClick={()=>{hide_tawk()}} active={window.location.pathname === "/channels"} icon={<Channels />}
            > Channels</MenuItem>
                        </Menu>
                        {closed== false&&
                        <div className='support_user'> 
                           <Menu
                             menuItemStyles={{
                              // button: {
                              
                              //     '&:hover': {
                              //        backgroundColor: 'green',
                              //     },
                              // },
                          
                              button: ({ level, active, disabled }) => {
                                  
                              // only apply styles on first level elements of the tree
                              if (level === 0)
                                  return {
                                  color: active ? 'white' : '#9FA8C7',
                                  backgroundColor: active ? '#2A2D34' : undefined,
                                  '&:hover': {
                                      backgroundColor: '#2A2D34',
                                  },
                                  };
                                  
                              },
          
                          }}>
                              <MenuItem
                                    className="Support"
                                    component={<Link to="/support" />}
                                    onClick={()=>{show_tawk()}}
                                    active={window.location.pathname === "/support"}
                                    icon={<PiChatTeardropTextBold size={25} />}
                                  >
                                    {" "}
                                    Support
                                </MenuItem>
                             </Menu>
                           <div className='user_info'>
                            <div className='user_img'>
                                <img src="/imgs/user.png" alt="" />
                                <div className='user_status'>
                                    Legacy User
                                </div>
                            </div>

                            <div className='user_data'>
                                <h3>{username}</h3>
                                {/* <h3>Josh Willer</h3> */}
                                <p style={{fontSize:"10px",color:"#E9E9E9",fontWeight:"300"}}>{email}</p>
                                {/* <p style={{fontSize:"10px",color:"#E9E9E9",fontWeight:"300"}}>joshwiller@gmail.com</p> */}
                            </div>
                            </div>
                        </div>
                           
                        }
                </div>
            </Sidebar>
            {menu == true &&
                <div style={{position:"absolute",top:"0",right:"-3px"}}>
                     <Sidebar backgroundColor="#131313" className="sidebar"  >
                <div className='limited_sidebar'>
                        <Menu
                
                menuItemStyles={{
                    // button: {
                    
                    //     '&:hover': {
                    //        backgroundColor: 'green',
                    //     },
                    // },
                
                    button: ({ level, active, disabled }) => {
                        
                    // only apply styles on first level elements of the tree
                    if (level === 0)
                        return {
                        color: active ? 'white' : '#9FA8C7',
                        backgroundColor: active ? '#2A2D34' : undefined,
                        '&:hover': {
                            backgroundColor: '#2A2D34',
                        },
                        };
                        
                    },

                }}
            >
            <MenuItem component={<Link to="/" />} active={window.location.pathname === "/"} icon={<BiSearchAlt2 style={{transform:"rotate(90deg)"}}size={20}/>}
            >Discovery</MenuItem>
            <MenuItem component={<Link to="/dashboard" />}  active={window.location.pathname === "/dashboard"} icon={<MdDashboardCustomize style={{transform:"rotate(180deg)"}}size={20}/>}
            > Dashboard</MenuItem>
            <MenuItem component={<Link to="/social" />}  active={window.location.pathname === "/social"} icon={<PiChartLineUpBold size={20}/>}
            > Social</MenuItem>
            <MenuItem component={<Link to="/segmentation" />} active={window.location.pathname === "/segmentation"} icon={<BsFillPersonFill size={20}/>}
            > Segmentation</MenuItem>
            <MenuItem component={<Link to="/competitors" />} active={window.location.pathname === "/competitors"} icon={<PiChartPieSliceFill size={20}/>}
            > Competitors </MenuItem>
            <MenuItem component={<Link to="/channels" />} active={window.location.pathname === "/channels"} icon={<RiFileChartFill size={20}/>}
            > Channels</MenuItem>
                        </Menu>
                       
                            <div className='user_info'>
                            {/* <MenuItem
                                className="Support"
                                component={<Link to="/support" />}
                                active={window.location.pathname === "/support"}
                                icon={<PiChatTeardropTextBold size={25} />}
                              >
                                {" "}
                                Support
                            </MenuItem> */}
                            <div className='user_img'>
                                <img src="/imgs/user.png" alt="" />
                                <div className='user_status'>
                                    Legacy User
                                </div>
                            </div>

                            <div className='user_data'>
                                <h3>{username}</h3>
                                {/* <h3>Josh Willer</h3> */}
                                <p style={{fontSize:"10px",color:"#E9E9E9",fontWeight:"300"}}>{email}</p>
                            </div>
                            </div>
                     
                </div>
            </Sidebar>
                </div>
            }                
        <Outlet />
    </div>
    
    </>
  )
}

export default sidebar