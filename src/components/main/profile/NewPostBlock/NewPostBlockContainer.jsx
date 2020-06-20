import { addPost } from '../../../../redux/profileReduser';
import NewPostBlock from './NewPostBlock';
import { connect } from 'react-redux';

let mapStateToProps = () => ({});

export default connect(mapStateToProps, { addPost })(NewPostBlock);
