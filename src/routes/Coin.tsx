import {useParams} from "react-router"

interface Params {
  coinId : string
}

function Coin (){
  const {coinId} = useParams<Params>();
  console.log(coinId)
  return <h1>coin</h1>
}

export default Coin