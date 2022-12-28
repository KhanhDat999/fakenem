import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './Sanpham.module.scss'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom'
import React, { useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { instance } from '../../Uttils/requid';
import { Global } from '../../components/defaulayout/defaulayout'
import { AiOutlineDown } from 'react-icons/ai'
import { useForm } from "react-hook-form";

const cx = classNames.bind(styles)




function Items({ currentItems }) {

    const Item = useContext(Global)



    return (
        <>
            <div style={{ display: 'flex' }}>
                <Row xs={3} md={3} lg={3}>
                    {currentItems && currentItems.map((res, index) => (
                        <div style={{ marginTop: '14px' }}>

                            <Col>
                                <div className={cx('animation')}>
                                    <div className={cx('middle')}>
                                        <div className={cx('middle1')}>
                                            <Link to='/chi-tiet-san-pham' className={cx('text')} onClick={() => Item.setItem(res)} > CHI TIẾT    </Link>
                                        </div>
                                    </div>
                                    <img className={cx('img')} src={res.img} />
                                </div>
                                <div className={cx('chitiet')}>
                                    <p><Link>{res.name}</Link></p>
                                    <span>{res.gia}₫</span>
                                </div>
                            </Col>


                        </div>
                    ))}
                </Row>
            </div>
        </>
    );
}




function Sanpham() {
    const Item = useContext(Global)
    const [check, setcheck] = useState(true)
    const [item, setItem] = useState([])
    const [reender, setreender] = useState()

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + 9;
    const currentItems = Item.aolen.slice(itemOffset, endOffset)
    const pageCount = Math.ceil(Item.aolen.length / 9)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 9) % Item.aolen.length;
        setItemOffset(newOffset);
    };

    const Gia = (price, price1) => {
        const abc = Item.tatca.filter((res, index) => {

            return res.price > price && res.price < price1
        })
        setItemOffset(0)
        Item.setAolen(abc)
    }
    const Gia500 = (price) => {
        if (typeof price == 'number') {
            const abc = Item.tatca.filter((res, index) => {
                return res.price < price
            })
            setItemOffset(0)
            Item.setAolen(abc)
        }
        else {
            const abc = Item.tatca.filter((res, index) => {
                return res.mausac == price
            })

            Item.setAolen(abc)
            setItemOffset(0)

        }
    }


    return (
        <div>
            <hr></hr>
            <div>
                <h5>TRANG CHỦ / TẤT CẢ SẢN PHẨM</h5>
            </div>
            <Row>
                <Col > <img style={{ width: '100%' }} src='https://file.hstatic.net/200000182297/file/z3824988104332_e30b6f149c965440666761b25c489464__1__dbc437c43a9b4e3892dfc3cfe78edd72.jpg' /></Col>
            </Row>
            <div className={cx('body')}>
                <div className={cx('panel')}>
                    <ul>Danh mục</ul>
                    <ul>Tất cả sản phẩm</ul>
                    <Link><ul>Sale</ul></Link>
                    <Link><li>Sale up to 70%</li></Link>
                    <Link><li>Đồng giá từ 149k</li></Link>
                    <Link><ul>Đầm</ul></Link>
                    <Link><li>Đầm suông</li></Link>
                    <Link><li>Đầm dáng A</li></Link>
                    <Link><li>Đầm ôm</li></Link>
                    <Link><ul>Áo sơ mi</ul></Link>
                    <Link><li>Dài tay</li></Link>
                    <Link><li>Ngắn tay</li></Link>
                    <Link><li>Tay lỡ</li></Link>
                    <Link><li>Áo kiểu</li></Link>
                    <Link><ul>Áo dài</ul></Link>
                    <Link><ul>Quần</ul></Link>
                    <Link><li>Quần dài</li></Link>
                    <Link><li>Quần Jeans</li></Link>
                    <Link><li>Quần short</li></Link>
                    <Link><ul>Chân váy</ul></Link>
                    <Link><li>Chân váy xếp li</li></Link>
                    <Link><li>Chân váy bút chì</li></Link>
                    <Link><li>Chân váy chữ A</li></Link>
                    <Link><ul>Set bộ</ul></Link>
                    <Link><ul>Jumpsuit</ul></Link>
                    <Link><ul>Phụ kiện</ul></Link>
                    <Link><li>Giày </li></Link>
                    <Link><li>Túi xách</li></Link>
                    <Link><ul>Áo khoác</ul></Link>
                    <Link><li>Áo Vest</li></Link>
                    <Link><li>Áo Phao</li></Link>
                    <Link><li>Măng tô</li></Link>
                    <Link><li>Áo khoác kiểu</li></Link>

                </div>
                <div>

                </div>
                <div className={cx('bodyright')}>
                    <div className={cx('content')}>
                        <div>
                            <h1>TẤT CẢ SẢN PHẨM</h1>
                        </div>
                        <div className={cx('colecsionsibar')}>

                            <div className={cx('gia')}>
                                <span>Màu sắc</span> <AiOutlineDown />
                                <div className={cx('hovergia1')}>
                                    <form>


                                        <div>
                                            <input onClick={() => Item.setAolen(Item.tatca)} name="fav_language" type='radio' />
                                            <label>Tất cả</label>
                                        </div>
                                        <div>
                                            <input value='Trắng' onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Trắng</label>
                                        </div>
                                        <div>
                                            <input value="Đen" onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Đen</label>
                                        </div>
                                        <div>
                                            <input value="Nâu" onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Nâu</label>
                                        </div>
                                        <div>
                                            <input value="Hồng" onClick={(e) => Gia500(e.target.value)} name="fav_language" type='radio' />
                                            <label>Hồng</label>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div className={cx('gia')}>
                                <span >Giá</span> <AiOutlineDown />
                                <div className={cx('hovergia')}>
                                    <div>
                                        <input name="fav_language" onClick={() => Item.setAolen(Item.tatca)} type='radio' />
                                        <span>Tất cả</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia500(0.5)} type='radio' />
                                        <span>Nhỏ hơn 500,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia(0.5, 1)} type='radio' />
                                        <span>Từ 500,000đ - 1,000,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia(1, 1.5)} type='radio' />
                                        <span>Từ 1,000,000đ - 1,500,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" onClick={() => Gia(2, 2.5)} type='radio' />
                                        <span>Từ 2,000,000đ - 2,500,000đ</span>
                                    </div>
                                    <div>
                                        <input name="fav_language" type='radio' />
                                        <span>Lớn hơn 2,500,000đ</span>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={cx('product')}>
                        {

                        }


                        <Items currentItems={currentItems} />
                        {item &&

                            <div className={cx('pagination')}>

                                <ReactPaginate
                                    previousLabel={"Prew"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={3}
                                    onPageChange={handlePageClick}


                                    // containerClassName={"pagination justify-content-center"}
                                    // pageClassName={"page-item "}
                                    // pageLinkClassName={"page-link"}
                                    // previousClassName={"page-item"}
                                    // previousLinkClassName={"page-link"}
                                    // nextClassName={"page-item"}
                                    // nextLinkClassName={"page-link"}
                                    // breakClassName={"page-item"}
                                    // breakLinkClassName={"page-link"}
                                    activeClassName={"khanhdat"}


                                />
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Sanpham;