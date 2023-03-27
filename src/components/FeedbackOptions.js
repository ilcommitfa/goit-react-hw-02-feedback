import PropTypes from 'prop-types';
import { List, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (

  <List>
    {options.map(option => (
      <li key={option}>
        <Button onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      </li>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;