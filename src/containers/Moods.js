import React, { Component } from 'react';
import { getFace } from '../containers/selectors/moodSelectors';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';

const actions = [
  { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
  { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
  { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
  { name: 'STUDY', text: 'Study', stateName: 'studies' },
];

export default class Moods extends Component {
  state = {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  }

  handleSelection = name => {
    switch(name) {
      case 'DRINK_COFFEE':
        this.setState(state => ({ coffees: state.coffees + 1 }));
        break;
      case 'EAT_SNACK':
        this.setState(state => ({ snacks: state.snacks + 1 }));
        break;
      case 'TAKE_NAP':
        this.setState(state => ({ naps: state.naps + 1 }));
        break;
      case 'STUDY':
        this.setState(state => ({ studies: state.studies + 1 }));
        break;
      default:
        // eslint-disable-next-line no-console
        console.log(`unhandled name: ${name}`);
    }
  }

  render() {
    const face = getFace(this.state);
    const controlActions = actions.map(action => ({
      ...action,
      count: this.state[action.stateName]
    }));

    return (
      <>
        <Controls actions={controlActions} handleSelection={this.handleSelection}/>
        <Face emoji={face} />
      </>
    );
  }
}
