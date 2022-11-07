import PropTypes from 'prop-types';

import Button from "./Button";

const Header = ({title, showTaskForm, showForm}) => {
  return (
    <header className="header">
      <h1 style={{textAlign: 'center'}}>Task Manager</h1>
      <Button color={ showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add Tasks'} showTaskForm={showTaskForm} />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header;
