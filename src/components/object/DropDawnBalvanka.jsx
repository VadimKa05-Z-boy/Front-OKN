import Form from 'react-bootstrap/Form';

const DropDownBalvanka = (props) => {
    const{
        titel,
        lists = [],
    } = props

    return(
        <div>
            <Form.Group >
                <Form.Label className='mb-1 fw-bold'>{titel}</Form.Label>
                <Form.Select aria-label={titel} >
                    <option value="{titel}" disabled selected></option>
                    {lists.map((item,index) =>(
                        <option key={index} value={item} >
                            {item}
                        </option>
                     ))}
                </Form.Select>
            </Form.Group>
        </div >

    )
}

export default DropDownBalvanka