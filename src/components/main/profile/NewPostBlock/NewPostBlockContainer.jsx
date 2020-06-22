import { addPost } from '../../../../redux/reducers/profile-reducer';
import NewPostBlock from './NewPostBlock';
import { connect } from 'react-redux';


export default connect(null, { addPost })(NewPostBlock);
