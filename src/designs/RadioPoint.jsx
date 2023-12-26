import Wrapper from '../components/Wrapper';
import './styles/point.css';

const RadioPoint = () => {
  return (
    <Wrapper title={"Radio Point"} bgcolor={""}>
        <div className="flex gap-12">
            <Point />
            <Point active />

        </div>
    </Wrapper>
  )
}

export default RadioPoint;


const Point = ({active}) => {
  return (
    <div className="shd rounded-full w-11 bg-secondary aspect-square flex items-center justify-center">
      <div className="shd2 rounded-full w-8 aspect-square bg-secondary/80 cursor-pointer flex items-center justify-center">
        {active ? <div className="bg-primary/80 shd3 aspect-square w-5 rounded-full" /> : ''}
      </div>
    </div>
  )
}