import Form from 'react-bootstrap/Form';

const OptionsBlock = () =>{
    return(
        <div>
            <Form.Select aria-label="Tipe Object">
                <option>Вид объекта</option>
                <option value="1">Памятник</option>
                <option value="2">Ансамбль</option>
                <option value="3">Достопримечательное место</option>
            </Form.Select>
            <Form.Select aria-label="Category safe">
                <option>Категория охраны</option>
                <option value="1">Муниципального значения</option>
                <option value="2">Регионального значения</option>
                <option value="3">Федерального значения</option>
            </Form.Select>
            <Form.Select aria-label="Condition">
                <option>Состояние</option>
                <option value="1">Удовлетворительное</option>
                <option value="2">Неудовлетворительное</option>
                <option value="3">Аварийное</option>
                <option value="4">Руинированное</option>
            </Form.Select>
            <Form aria-label="Status">
                <option>Статус реализации</option>
                {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                        inline
                        label="Решение отсутствует"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                    />
                <Form.Check
                    inline
                    label="Подготовка к торгам"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                <Form.Check
                    inline
                    label="Конкурс объявлен"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                />
                <Form.Check
                    inline
                    label="Инвестор найден"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                />
                <Form.Check
                    inline
                    label="Восстановлен"
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                />                
                </div>
            ))}
            </Form>
        </div>
    )
}
export default OptionsBlock