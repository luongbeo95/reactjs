import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const ProductsManage = ({ products, onRemove }) => {


    const onDelete = (id) => {
        onRemove(id)
    }

    return (
        <div>
            <Link className="btn btn-success large" to='/admin/add' >Thêm sản phẩm mới</Link> <br />
            <a />
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Mã</th>
                        <th>Hình ảnh</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Loại Sản Phẩm</th>
                        <th>Giá</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) =>
                        <tr key={i}>
                            <td width={10}>{product.id}</td>
                            <td><a href="#"><img width={55} height={75} src={product.image} /></a></td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => onDelete(product.id)}>Xóa</button>
                                <Link className="btn btn-warning" to={`/admin/edit/${product.id}`}>Sửa</Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

ProductsManage.propTypes = {

}

export default ProductsManage
