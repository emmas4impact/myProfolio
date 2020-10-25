import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import './styles.scss'
//import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Emmanuel Adedeji</h2>
            <img
              src="ema.jpeg"
              alt="avatar"
              className="rounded-circle"
              // style={{height: '250px' }}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>You can reach me both weekdays and on weekends</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (+358) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    someone@example.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    MySkypeID
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
