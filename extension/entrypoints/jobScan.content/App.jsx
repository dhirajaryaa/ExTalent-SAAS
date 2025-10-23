import '@/assets/index.css';
import JobScanBtn from './components/JobScanBtn';

function App() {
  const [loading, setLoading] = useState(false)
  return (
    <div className='p-4'>
     <JobScanBtn className={'max-w-xl mx-auto'} action={() => setLoading(!loading)} loading={loading}/>
    </div>
  )
}

export default App