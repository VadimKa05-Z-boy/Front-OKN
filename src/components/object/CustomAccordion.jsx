import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

const CustomAccordion = (props) =>{
    const {
        data,
        renderHeader,
        renderBody,
        renderButton, 
        getKey = (item, index) => index.toString(),
        buttonPosition = "bottom" // или "right"
    } = props;

    return (
        <Accordion>
            {data.map((item, index) => (
                <Accordion.Item key={getKey(item, index)} eventKey={getKey(item, index)}>
                    <Accordion.Header>
                        {renderHeader ? renderHeader(item, index) : item.title}
                    </Accordion.Header>
                    <Accordion.Body>
                        {renderBody ? renderBody(item, index) : (
                            <div className={`d-flex ${buttonPosition === 'right' ? 'flex-row align-items-start' : 'flex-column'}`}>
                                <div className={buttonPosition === 'right' ? 'flex-grow-1 me-3' : 'mb-3'}>
                                    {item.content}
                                </div>
                                
                                {/* Кнопка (если есть) */}
                                {renderButton ? renderButton(item, index) : (
                                    item.button && (
                                        <div className={buttonPosition === 'right' ? 'flex-shrink-0' : ''}>
                                            <Button 
                                                variant={item.button.variant || "primary"}
                                                href={item.button.url}
                                                target="_blank"
                                                className="w-100"
                                            >
                                                {item.button.text}
                                            </Button>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default CustomAccordion