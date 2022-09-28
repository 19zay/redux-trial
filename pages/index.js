import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useSelector , useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../redux/index'

export default function Home() {
  const account = useSelector((state => state.account))
  const dispatch = useDispatch()
  const { depositMoney,  withdrawMoney} = bindActionCreators(actionCreators, dispatch)
  
  return (
    <div>
      <h1>Making redux my bitch</h1>

      {/* <button onClick={()=> depositMoney(1)}>Deposit</button>
      <button onClick={()=> withdrawMoney(1)}>Withdraw</button>
      <h1>{account}</h1> */}

      <button onClick={()=> depositMoney(1)}>Deposit</button>
      <button onClick={()=> withdrawMoney(1)}>Withdraw</button>
      <h1>{account}</h1>
    </div>
  )
}
