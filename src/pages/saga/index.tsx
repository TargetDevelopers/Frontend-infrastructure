import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/atoms';
import {
  decrement,
  increment,
  loadData,
  reset,
  startClock,
} from '@/redux/count/actions';
import { RootState } from '@/redux/rootReducer';

const Index = () => {
  const dispatch = useDispatch();
  const data = useSelector<RootState>((state) => state.main.data);
  const error = useSelector<RootState>((state) => state.main.error);
  const count = useSelector<RootState>((state) => state.main.count);

  useEffect(() => {
    dispatch(startClock());
    dispatch(loadData());
  }, [dispatch]);

  return (
    <div className="flex-col p-10 border rounded m-10">
      <h1 className="flex justify-center text-lg">
        Count: <span>{count}</span>
      </h1>
      <div className="flex justify-center text-lg">
        <Button className="w-40" onClick={() => dispatch(increment())}>+1</Button>
        <Button className="w-40 bg-red-500" onClick={() => dispatch(decrement())}>-1</Button>
        <Button className="w-40 bg-yellow-500" type="dashed" onClick={() => dispatch(reset())}>Reset</Button>
      </div>
      <div>
        {data && (
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        )}
        {error && (
          <p style={{ color: 'red' }}>Error: {JSON.stringify(error)}</p>
        )}
      </div>
    </div>
  );
};

export default Index;
