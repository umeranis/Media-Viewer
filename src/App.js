import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './App.css';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import Radio from '@material-ui/core/Radio';



const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 140,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.4) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [alignment, setAlignment] = React.useState('left');

  const open = Boolean(anchorEl);



  const click = (event) => {
    alert("Clicked")
  }



  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="noColor" position="static">
          <Toolbar>
            <Radio checked />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dashboard
            </Typography>


            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
              <Typography style={{ fontSize: 22 }}>Matt</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}  >
                <Button onClick={click}>
                  Edit
                </Button>
              </MenuItem>
              <Divider sx={{ my: 0.10 }} />

              <MenuItem onClick={handleClose} style={{ marginLeft: 15 }} >
                <Button onClick={click}>
                  Duplicate
                </Button>
              </MenuItem>
              <Divider sx={{ my: 0.10 }} />
              <MenuItem onClick={handleClose} style={{ marginLeft: 15 }}>
                <Button onClick={click}>
                  Archive
                </Button>
              </MenuItem>
              <Divider sx={{ my: 0.10 }} />

              <MenuItem onClick={handleClose} style={{ marginLeft: 15 }}>
                <Button onClick={click}>
                  <MoreHorizIcon />

                  More
                </Button>
              </MenuItem>
            </StyledMenu>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 d-flex justify-content-center">
            <img className="img-fluid d-flex justify-content-center" src="https://tse4.mm.bing.net/th?id=OIP.DjyPSeO-t7bK2agoLSYJzgHaHa&pid=Api&P=0&w=172&h=172" style={{ height: "150px", borderRadius: "100px" }} />
          </div>
          <div className="col-lg-2">
            <Typography className="d-flex justify-content-center" style={{ fontSize: "25px" }}>23k</Typography>
            <Typography className="d-flex justify-content-center" style={{ fontSize: "15px", marginTop: "-10px" }}>Total Views</Typography>
          </div>
          <div className="col-lg-2">
            <Typography className="d-flex justify-content-center" style={{ fontSize: "25px", }}>256</Typography>
            <Typography className="d-flex justify-content-center" style={{ fontSize: "15px", marginTop: "-10px" }}>Projects Created</Typography>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <Box style={{ border: " 2px dashed", height: "150px" }} >
              <Typography className="d-flex justify-content-center" style={{ marginTop: "40px", fontSize: "18px" }}>Drag and Drop</Typography>
              <Typography className="d-flex justify-content-center" style={{ fontSize: "12px" }}>to submit a video or  <h5 className="hy">browse</h5></Typography>
            </Box>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-2 d-flex justify-content-center">
            <Typography >Submissions(4)</Typography>
          </div>



          <div className="col-lg-2 d-flex justify-content-center">
            <Typography >Sort by:</Typography>
            <IconButton
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Typography style={{fontSize:"18px"}}>All</Typography>
              <KeyboardArrowDownIcon />
            </IconButton>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}  >
                <Button onClick={click}>
                  Edit
                </Button>
              </MenuItem>
              <Divider sx={{ my: 0.10 }} />

              <MenuItem onClick={handleClose} style={{ marginLeft: 15 }} >
                <Button onClick={click}>
                  Duplicate
                </Button>
              </MenuItem>
              <Divider sx={{ my: 0.10 }} />
              <MenuItem onClick={handleClose} style={{ marginLeft: 15 }}>
                <Button onClick={click}>
                  Archive
                </Button>
              </MenuItem>
              <Divider sx={{ my: 0.10 }} />

              <MenuItem onClick={handleClose} style={{ marginLeft: 15 }}>
                <Button onClick={click}>
                  <MoreHorizIcon />

                  More
                </Button>
              </MenuItem>
            </StyledMenu>
          </div>
          <div className="col-lg-6">
          </div>
          <div className="col-lg-2">
            <span className="d-flex justify-content-end">
              <HelpOutlineIcon disabled></HelpOutlineIcon>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
              >
                <ToggleButton value="justify" aria-label="justified" disabled>
                  <ViewModuleIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                  <FormatAlignJustifyIcon />
                </ToggleButton>
              </ToggleButtonGroup>
            </span>
          </div>
        </div>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead  >
              <TableRow >
                <TableCell >
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    <Typography style={{ display: "inline", marginLeft: "8px ", fontSize: "18px" }}>Video</Typography>
                  </label>
                </TableCell>
                <TableCell align="right"><Typography style={{ display: "inline", marginLeft: "8px ", fontSize: "18px" }}>Upload Date</Typography></TableCell>
                <TableCell align="right"><Typography style={{ display: "inline", marginLeft: "8px ", fontSize: "18px" }}>Duration</Typography></TableCell>
                <TableCell align="right"><Typography style={{ display: "inline", marginLeft: "8px ", fontSize: "18px" }}>Size</Typography></TableCell>
                <TableCell align="right"><Typography style={{ display: "inline", marginLeft: "8px ", fontSize: "18px" }}>Status</Typography></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                // key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label class="form-check-label" for="flexCheckDefault">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.xUEtOYf3IDCp6dKWs-1axQHaEo&pid=Api&P=0&w=279&h=174" style={{ cursor: "pointer", height: "50px", marginLeft: "5px", borderRadius: "5px", marginTop: "-11px" }} />
                    <p style={{ display: "inline", marginLeft: "8px", fontSize: "15px" }}>Coffeecup.mp4</p>
                  </label>
                </TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>2019/01/24</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>8s</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>9.54mb</TableCell>
                <TableCell align="right" style={{ marginTop: "17px" }}>
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "lightblue", border: "none", borderRadius: "20px" }}>APPROVED</button>
                </TableCell>
                <TableCell align="right">
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "lightpink", border: "none", borderRadius: "10px" }}>View</button>
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "white", borderColor: "lightgray", color: "black", marginLeft: "5px", borderRadius: "10px" }}>...</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src="https://tse4.mm.bing.net/th?id=OIP.sVM7RqasO-ahK24ekWLBHAHaE7&pid=Api&P=0&w=263&h=175" style={{ cursor: "pointer", height: "50px", marginLeft: "18px", borderRadius: "5px", marginTop: "-11px", width: "80px" }} />
                  <p style={{ display: "inline", marginLeft: "8px", fontSize: "15px" }}>Throwinghoop.mp4</p>
                </TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>2018/12/16</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>60s</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>12.54mb</TableCell>
                <TableCell align="right" style={{ marginTop: "17px" }}>
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "red", border: "none", borderRadius: "20px" }}>REJECTED</button>

                </TableCell>
                <TableCell align="right">
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "white", borderColor: "lightgray", color: "black", marginLeft: "5px", borderRadius: "10px" }}>...</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src="https://tse4.mm.bing.net/th?id=OIP.3F5pekOrrniRKUtEb6PoHgHaE8&pid=Api&P=0&w=265&h=176" style={{ cursor: "pointer", height: "50px", marginLeft: "18px", borderRadius: "5px", marginTop: "-11px", width: "80px" }} />
                  <p style={{ display: "inline", marginLeft: "8px", fontSize: "15px" }}>Milkshakebottles.mp4</p>
                </TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>2018/05/02</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>14s</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>9.54mb</TableCell>
                <TableCell align="right" style={{ marginTop: "17px" }}>
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "lightpink", border: "none", borderRadius: "20px" }}>IN VIEW</button>
                </TableCell>
                <TableCell align="right">
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "white", borderColor: "lightgray", color: "black", marginLeft: "5px", borderRadius: "10px" }}>...</button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <img src="https://tse2.mm.bing.net/th?id=OIP.pOJqXZnlpQPhmIT3txd2FwHaE8&pid=Api&P=0&w=272&h=181" style={{ cursor: "pointer", height: "50px", marginLeft: "18px", borderRadius: "5px", marginTop: "-11px", width: "80px" }} />
                  <p style={{ display: "inline", marginLeft: "8px", fontSize: "15px" }}>Colorfulmale.mp4</p>
                </TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>2018/04/02</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>10s</TableCell>
                <TableCell align="right" style={{ fontSize: "15px" }}>9.54mb</TableCell>
                <TableCell align="right" style={{ marginTop: "17px" }}>
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "lightpink", border: "none", borderRadius: "20px" }}>IN VIEW</button>
                </TableCell>
                <TableCell align="right" >
                  <button type="button" className="btn btn-primary" onClick={click} style={{ backgroundColor: "white", borderColor: "lightgray", color: "black", marginLeft: "5px", borderRadius: "10px" }}>...</button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
