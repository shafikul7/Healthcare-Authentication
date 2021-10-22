import React from 'react';
import { Card} from 'react-bootstrap';
import './TeamCards.css';

const TeamCards = (props) => {
    const {name,img} =props.team;
    return (
            <div className="col-md-4 mt-3">
              <div className="service-card-d">
            <div className="service-img">
           <img src={img} className="img-fluid" alt="" />
           </div>
            <Card.Body>
                <Card.Title className="ser-h1">{name}</Card.Title>
                <div className="teams-Card-Hover">
                <div class="hs_profile_social">
			  <ul>
				<li><a href="/"><i class="fa fa-facebook"></i></a></li>
				<li><a href="/"><i class="fa fa-twitter"></i></a></li>
				<li><a href="/"><i class="fa fa-linkedin"></i></a></li>
				<li><a href="/"><i class="fa fa-skype"></i></a></li>
			  </ul>
			</div>
                <button className="btn btn-success mt-2 mb-2">Read More</button>
                </div>
            </Card.Body>
            </div>
            </div>
      
    );
};

export default TeamCards;

