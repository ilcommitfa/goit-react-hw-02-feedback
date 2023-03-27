import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';
import {Container} from './App.styled';

class App extends React.Component {
    state = { good: 0, neutral: 0, bad: 0 };
  
  handleFeedback = (option) => {
    this.setState((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    return total > 0 ? Math.round((positive / total) * 100) : 0;
  };

  render() {

    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;