var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var PropTypes = React.PropTypes;

function Home(props) {
  return (
    <div>
      <div>Hello from home!</div>
        <button type='button' onClick={props.onButtonClick}>Add Climb</button>
      <Link to='/climbs/edit'>
        <button type='button'>Edit Climb</button>
      </Link>
      <p>{props.areaSearch}</p>
      <form>
        <input
          placeholder = "Search"
          value={props.areaSearch}
          onChange={props.onAreaSearch}
        />
      </form>
    </div>
  )
}

Home.propTypes = {
  areaSearch: PropTypes.string.isRequired,
  onAreaSearch: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
}




module.exports = Home;
