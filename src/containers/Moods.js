import React, { useReducer } from 'react';
import { getFace } from '../selectors/moodSelectors';
import Controls from '../components/controls/Controls';
import moodReducer from '../reducers/moodReducer';
import { drinkCoffee, eatSnack, takeNap, study } from '../actions/moodActions';
import Face from '../components/face/Face';



const Moods = () => {
  const actions = [
    { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
    { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
    { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
    { name: 'STUDY', text: 'Study', stateName: 'studies' }
  ];
  const [mood, dispatch] = useReducer(moodReducer, {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0
  });

  const handleSelection = name => {
    if(name === 'DRINK_COFFEE') return dispatch(drinkCoffee());
    if(name === 'EAT_SNACK') return dispatch(eatSnack());
    if(name === 'TAKE_NAP') return dispatch(takeNap());
    if(name === 'STUDY') return dispatch(study());
  };

  const getMoodActions = state => {
    return actions.map(action => ({
      ...action,
      count: state[action.stateName]
    }));
  };

  const ControlMoodActions = getMoodActions(mood);
  const face = getFace(mood);

  return (
    <>
      <Controls
        actions={ControlMoodActions}
        handleSelection={handleSelection}
      />
      <Face emoji={face} />
    </>
  );
};

export default Moods;
