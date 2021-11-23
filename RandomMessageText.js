import axios from "axios";

function RandomMessageText() {
    const [randomData, setRandomData] = useState({});
    
    useEffect(() => {
      axios
        .get(`https://ironrest.herokuapp.com/random-message`)
        .then((response) => {
          setBeerData({ ...response.data });
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
}

export default RandomMessageText;