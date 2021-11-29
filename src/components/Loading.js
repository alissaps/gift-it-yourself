import Lottie from "react-lottie";
import * as loadingAnimation from '../components/assets/animation/loading.json'


function Loading() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingAnimation.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return <Lottie className="lottie-player" options={defaultOptions} height={300} width={300}/>
}


export default Loading;
