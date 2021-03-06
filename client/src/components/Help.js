import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Help.css';

function Help() {

  return (
    <>
      <div className="header-footer"></div>
      <div className="help-container">
        <h1>House rules and privacy</h1>
        <p>Information submitted as catcalls is used in confidentiality. A catcall can be reported completely anonymous. No personal details are asked or saved in this process.</p>
        <p>This also accounts for the perperators. You are allowed to share anything about this catcall, as long as it does not contain any recognizable, personal characteristics of the person who did this. Submissions holding details of racism, homophobia or any kind of hate speach are not tolerated.</p>
        <p>To ensure this, CatcallsofAms' moderators are allowed to cut/adjust the report. Do you have questions about this? Reach out with the organisors, for example through Instagram DM.</p>
        <h1>FAQ</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Can someone find out I did the report?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              No, no one can find out you reported the catcall by navigating through the map or hacking our database. The report is completely anonymous and no personal details from your device are saved.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>I would like to report a catcall, but I am not sure if what happened is enough to be called street harassment. How do I know if it is catcall?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If what you are experiencing is uncomfortable or crossing personal boundaries, you are welcome to report your story. Your experience is your experience, no one can judge that. A lot of victims of catcalling actually will not even notice because this phenomenon has become so 'normal' in society. We fight this by 'chalking back'. So it's totally okay to report your catcall and use the story section to explain your situation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Does this also exist for my city? Can I submit a report for my own town?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Local chalk back initiatives exist all over the world, in more than 150 cities. Search on Instagram with your city name or check the complete list on <a href="https://www.chalkback.org/see-all-accounts" target="_blank">Chalkback.org</a>. If you use this form to submit your catcall story outside of Amsterdamn, it will be send to moderators of other cities (if there are any) and not displayed on Amsterdam's map.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>How can I contribute fighting street harassment?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>Spread the word: share this application, tell people about this initiative,share the posts on instagram, like and comment.</li>
                <li>Become a local 'Catcalls of...' for your own town/city. Check <a href="https://www.chalkback.org/" target="_blank">Chalkback.org</a> for more information.</li>
                <li>Act: get in touch with CatcallsofAms or your local initiatives and volunteer on a regular basis to chalk newly reported catcalls.</li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="header-footer"></div>
    </>
  );
}

export default Help;