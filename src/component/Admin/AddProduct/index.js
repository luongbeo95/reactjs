import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const AddProduct = props => {
    const [product, setProduct] = useState([]);

    const onChange = (e) => {
        const name = e.target.name;
        setProduct({
            ...product,
            [name]: e.target.value
        })
    }

    const onHandledSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'POST',
            url: 'https://5f13a2bc2710570016b37801.mockapi.io/api/products',
            data: product
        }).catch(err => {
            console.log(err);
        });
        alert("Đã thêm sản phẩm thành côg");

    }
    return (
        <div className="row">
            <div className="col-4">
                Ảnh:
          <img />
                <form method="post" action="upload" encType="multipart/form-data">
                    <input type="file" name="uploadFile" />
                    <br /><br />
                    <button className="btn btn-primary" type="submit">Upload</button>
                </form>
            </div>

            <div className="col-5">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
                        <input name="name" onChange={onChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Giá</label>
                        <input name="price" onChange={onChange} type="number" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Link Ảnh</label>
                        <input name="image" onChange={onChange} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputState">Loại sản Phẩm</label>
                        <select name="category" onChange={onChange} id="inputState" className="form-control">
                            <option value='Name'>Nam</option>
                            <option value='Nữ' >Nữ</option>
                            <option value='Trẻ Em'>Trẻ Em</option>
                        </select>
                    </div>
                    <button onClick={onHandledSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
