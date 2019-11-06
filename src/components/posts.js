import {Component} from "react";
import {connect} from "react-redux";
import {getData} from "../store/actions";

export class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (<ul style={{background: `#ffffff`}}>
      {this.props.articles.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
}

export default connect(mapStateToProps, {getData})(Post);
