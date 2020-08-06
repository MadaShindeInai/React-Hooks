// 1
import {useEffect, useContext} from 'react';
import {AppContext} from '../context/AppState'

type Props = {
  num: number;
}

const useNeApp2 = ({num}: Props) => {
  //do here with num all what you want
  const {state:{count, id}} = useContext(AppContext);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const ultraString = id.slice(count);
  return {
    ultraString
  }
};



export default useNeApp2;