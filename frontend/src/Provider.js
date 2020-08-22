import React from 'react';
import { TutorContext } from './context';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.set = ({ key, value }) => {
      this.setState((state) => ({
        ...state,
        state: {
          ...state.state,
          [key]: value,
        },
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      state: { tutors: [] },
      setState: this.set,
    };
  }

  render() {
    const { children } = this.props;
    // The entire state is passed to the provider
    return (
      <TutorContext.Provider value={this.state}>
        {children}
      </TutorContext.Provider>
    );
  }
}
export default App;
