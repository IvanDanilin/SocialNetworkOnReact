import { addPost } from '../../../../redux/profile-reducer';
import NewPostBlock from './NewPostBlock';
import { connect } from 'react-redux';

let mapStateToProps = () => ({});

export default connect(mapStateToProps, { addPost })(NewPostBlock);
