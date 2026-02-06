import Form from 'react-bootstrap/Form';

const DropDownBalvanka = (props) => {
    const{
        titel,
        lists = [],
    } = props

    return(
        <>
            <Form.Group className="mb-3">
                <Form.Label>{titel}</Form.Label>
                <Form.Select aria-label={titel}>
                    <option value="{titel}" disabled selected></option>
                    {lists.map((item,index) =>(
                        <option key={index} value={item}>
                            {item}
                        </option>
                     ))}
                </Form.Select>
            </Form.Group>
        </>

    )
}

export default DropDownBalvanka