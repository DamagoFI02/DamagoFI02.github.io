import  { Link } from 'react-router-dom';


function BtnLink(props) {
    return (
        <>
            <Link to={props.to} className='text-red-600'>{props.children}</Link>
        </>
    )
}

export default BtnLink;
