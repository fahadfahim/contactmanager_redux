import React, { Component } from "react";
import Contact from "./Contact";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { GET_CONTACTS } from "../../actions/types";
import thunk from "redux-thunk";
class Contacts extends Component {
  //for redux call getContacts we have to componentDidMound
  componentDidMount() {
    this.props.getContacts();
  }
  //working with redux we have to broad into
  //contact in the reducer
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: 'John Doe',
  //       email: 'john@gmail.com',
  //       phone: '555-555-5555'
  //     },
  //     {
  //       id: 2,
  //       name: 'Karen Williams',
  //       email: 'karen@gmail.com',
  //       phone: '444-444-4444'
  //     },
  //     {
  //       id: 3,
  //       name: 'Henry Johnson',
  //       email: 'henry@gmail.com',
  //       phone: '333-333-333'
  //     }
  //   ]
  // };

  render() {
    //now contact not in state its in the props
    const { contacts } = this.props;
    // const { contacts } = this.state;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch({ type: GET_CONTACTS }),
});
//useing connect we have to use connect()(Contacts)
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
