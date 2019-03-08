import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";

class CoursesPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch) //go through course actions and wrap them in call to dispatch
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
