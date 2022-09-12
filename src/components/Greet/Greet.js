import { Container } from '@mui/system';
import './greet.scss';

function Greet() {
    return(
        <Container>
            <div className="greet">
                <h1 className="greet__h1">Hi, a'm Alex!</h1>
                <div className='greet__wrapp'>
                    <h2 className="greet__h2">WEB Developer</h2>
                    <div className='greet__gif'>
                        <div className='greet__gif-list'><img src='https://i.gifer.com/6K8u.gif' alt=''/></div>
                        <div className='greet__gif-list'><img src='https://i.gifer.com/6L8E.gif' alt=''/></div>
                        <div className='greet__gif-list'><img src='https://i.gifer.com/DXKg.gif' alt=''/></div>
                    </div>
                </div>
                
            </div>
        </Container>
    )
}

export default Greet;