import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function Resbtn() {
  const [open, setOpen] = React.useState(false);
  const [openMenu1, setOpenMenu1] = React.useState(false);
  const [openMenu2, setOpenMenu2] = React.useState(false);
  const [openMenu3, setOpenMenu3] = React.useState(false);

  const handleClickMenu1 = () => {
    setOpenMenu1(!openMenu1);
  };

  const handleClickMenu2 = () => {
    setOpenMenu2(!openMenu2);
  };

  const handleClickMenu3 = () => {
    setOpenMenu3(!openMenu3);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ marginTop: '10px' }}>
        &#9776;
      </Button>
      <Dialog
        fullScreen={true}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                Menus
                </ListSubheader>
            }
            >
            <a href="/">
            <ListItemButton>
                <ListItemIcon>
                <SendIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            </a>
            <ListItemButton onClick={handleClickMenu1} >
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Discover" />
                {openMenu1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
                <a href="/aboutus">
                <Collapse in={openMenu1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText  primary="About" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/">
                <Collapse in={openMenu1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Locations" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/">
                <Collapse in={openMenu1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Partnerships" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/">
                <Collapse in={openMenu1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Referral" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/contactus">
                <Collapse in={openMenu1} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Contact Us" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
            <ListItemButton onClick={handleClickMenu2}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Crypto" />
                {openMenu2 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
                <a href="/contactus">
                <Collapse in={openMenu2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Markets" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/crypto">
                <Collapse in={openMenu2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Buy Crypto" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/oxchain">
                <Collapse in={openMenu2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Ox Coin" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/">
                <Collapse in={openMenu2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Mining" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/">
                <Collapse in={openMenu2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Marketplace" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
            <ListItemButton onClick={handleClickMenu3}>
                <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Services" />
                {openMenu3 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
                <a href="/oxlabs">
                <Collapse in={openMenu3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Labs" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
                <a href="/oxschools">
                <Collapse in={openMenu3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                        <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Schools" />
                    </ListItemButton>
                    </List>
                </Collapse>
                </a>
        </List>
      </Dialog>
    </div>
  );
}
