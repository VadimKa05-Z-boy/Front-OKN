import Container from "react-bootstrap/esm/Container"
import CustomFooter from "../../components/layout/Footer/Footer";
import OptionsHeader from "../../components/layout/Filters/OptionsHeader"
import OptionsBlock from '../../components/layout/Filters/OptionsBlock';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/esm/Button";
import SearchBlock from "../../components/object/SearchBlock";

const HomePage = () =>{
    return(
        <div>
            <div className="min-vh-100">
                <SearchBlock />
            </div>
            <div></div>
            <CustomFooter />
        </div>
    )
}

export default HomePage