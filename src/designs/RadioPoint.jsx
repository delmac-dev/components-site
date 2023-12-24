import Wrapper from '../components/Wrapper';
import './styles/point.css';

const RadioPoint = () => {
  return (
    <Wrapper title={"Radio Point"}>
        <div className="flex gap-12 flex-col">
            {/* Point one */}
            <div className="shd2 aspect-square rounded-full w-8 bg-secondary cursor-pointer relative before-custom border-white border-2"></div>

        </div>
    </Wrapper>
  )
}

export default RadioPoint