import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HelpDeskAction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  const [ticket, setTicket] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/ticket/${id}`)
      .then((res) => res.json())
      .then((info) => setTicket(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/reply-tickets`)
      .then((res) => res.json())
      .then((info) => setTickets(info));
  }, []);

  const HandleTicketReply = (event) => {
    event.preventDefault();
    const ticketCreator = event.target.ticketCreator.value;
    const ticketID = event.target.ticketID.value;
    const creatorMessage = event.target.creatorMessage.value;
    const subject = event.target.subject.value;
    const adminMessage = event.target.adminMessage.value;

    const contact = {
      ticketCreator,
      ticketID,
      creatorMessage,
      subject,
      adminMessage,
    };

    const url = `http://localhost:5000/add-ticket-reply`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/");
      });
  };

  return (
    <>
      <section className="touch" data-aos="fade-up" data-aos-duration={2000}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="block-text center">
                <h6 className="sub-heading">
                  <span>Support</span>
                </h6>
                <h3 className="heading">Help Center</h3>
              </div>
              <div className="touch__main">
                <form
                  className="form-box box__color"
                  onSubmit={HandleTicketReply}
                >
                  <input
                    type="text"
                    name="ticketCreator"
                    defaultValue={ticket.ticketCreator}
                  />
                  <input
                    type="text"
                    name="ticketID"
                    defaultValue={ticket._id}
                  />
                  <input
                    type="text"
                    name="creatorMessage"
                    defaultValue={ticket.message}
                  />

                  <div className="row">
                    <div className="col">
                      <label>Subject</label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        name="subject"
                        defaultValue={ticket.subject}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label>User's Message</label>
                      <p>{ticket.message}</p>
                      <div className="mt-15">
                      
                      {tickets.map(
                        (t) =>
                          ticket._id === t.ticketID && 
                          <div className="mt-15"><label>Admin's Message</label>
                          <p>{t.adminMessage}</p></div>
                      )}
                    </div>
                    </div>
                    
                  </div>

                  <div className="row">
                    <div className="col">
                      <label>Reply</label>
                      <textarea
                        required
                        name="adminMessage"
                        cols={30}
                        rows={10}
                      />
                    </div>
                  </div>
                  <div className="row mb-0">
                    <div className="col">
                      <button type="sumbit" className="action-btn">
                        <span>Reply Now</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpDeskAction;
