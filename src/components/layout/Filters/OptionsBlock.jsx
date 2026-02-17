import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const OptionsBlock = () => {
  return(
    <div className="bg-light p-3 rounded border border-warning border-3">
      <Form.Group className="mb-3">
        <Form.Label>Вид объекта</Form.Label>
        <Form.Select aria-label="Tipe Object">
          <option>Все виды</option>
          <option value="1">Памятник</option>
          <option value="2">Ансамбль</option>
          <option value="3">Достопримечательное место</option>
        </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Категория охраны</Form.Label>
        <Form.Select aria-label="Category safe">
          <option>Все категории</option>
          <option value="1">Муниципального значения</option>
          <option value="2">Регионального значения</option>
          <option value="3">Федерального значения</option>
        </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Состояние</Form.Label>
        <Form.Select aria-label="Condition">
          <option>Все состояния</option>
          <option value="1">Удовлетворительное</option>
          <option value="2">Неудовлетворительное</option>
          <option value="3">Аварийное</option>
          <option value="4">Руинированное</option>
        </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3">
        <Form.Label>Статус реализации</Form.Label>
        <div className="d-flex flex-column">
          <Form.Check
            label="Решение отсутствует"
            name="status"
            type="checkbox"
            id="status-1"
            className="mb-2"
          />
          <Form.Check
            label="Подготовка к торгам"
            name="status"
            type="checkbox"
            id="status-2"
            className="mb-2"
          />
          <Form.Check
            label="Конкурс объявлен"
            name="status"
            type="checkbox"
            id="status-3"
            className="mb-2"
          />
          <Form.Check
            label="Инвестор найден"
            name="status"
            type="checkbox"
            id="status-4"
            className="mb-2"
          />
          <Form.Check
            label="Восстановлен"
            name="status"
            type="checkbox"
            id="status-5"
          />
        </div>
      </Form.Group>
      <Button className="w-100 mb-3 text-white" variant='warning'>Показать объектов</Button>
      <Button className="w-100 mb-3" variant="outline-secondary">Очистить</Button>
    </div>
  );
};

export default OptionsBlock;