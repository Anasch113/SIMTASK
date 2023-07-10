import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./watch.scss";
import { useNavigate } from 'react-router-dom';

const Watch = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className="watch">
      <div className="back" >
        <ArrowBackIcon onClick = {()=>{navigate("/12812jzy8y1zn")}} />
   
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
      />
    </div>
    </div>
  )
}

export default Watch
