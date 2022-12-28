import styles from './Menu.module.scss'
import classNames from 'classnames/bind';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClear } from 'react-icons/md'
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles)

function Menu({ setMenu }) {

    const [body, setBody] = useState(false)
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => console.log(json))
    return (
        <div className={cx('body')} >
            <div >


                <MdClear className={cx('menu1')} onClick={() => setMenu(false)} /><br></br>


                <Link to='/tat-ca-san-pham' >

                    <h3>SẢN PHẨM</h3>
                </Link>
                <Link to='/tat-ca-san-pham' >
                    <h3>SẢN PHẨM MỚI</h3>


                </Link>
                <Link to='/tat-ca-san-pham' >


                    <h3>BỘ SƯU TẬP</h3>
                </Link>
                <Link to='/tat-ca-san-pham' >

                    <h3>NEW ONLINE</h3>

                </Link>
                <Link to='/tat-ca-san-pham' >

                    <h3>SALE</h3>

                </Link>
                <Link to='/tat-ca-san-pham' >

                    <h3>SẢN PHẨM NHẬP KHẨU TỪ NHẬT BẢN</h3>
                </Link>


            </div>
        </div>
    );
}

export default Menu;