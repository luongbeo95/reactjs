import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types'
import axios from 'axios'
import firebase from "./../../../firebase"
import { useParams } from 'react-router-dom';

const EditProduct = ({ products, onUpdate }) => {
    const { id } = useParams();

    const product = products.find(product => product.id === id);

    const { handleSubmit, register, errors } = useForm();

    const onHandledSubmit = data => {
        console.log(data.image[0]);
        let file = data.image[0];
        // tạo reference chứa ảnh trên firesbase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // đẩy ảnh lên đường dẫn trên
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url);
                // Tạo object mới chứa toàn bộ thông tin từ input
                const newData = {
                    ...data,
                    image: url
                }
                console.log(newData);
                onUpdate(id, newData)
            })
        });
    }
    return (
        <div className="row">

            <div className="col-5">
                <form onSubmit={handleSubmit(onHandledSubmit)}>

                    <div className="form-group">
                        <label htmlFor="productPrice">Ảnh sản phẩmmm</label>
                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file"
                                    className="custom-file-input"
                                    id="inputGroupFile02"
                                    name="image"
                                    ref={register}
                                />
                                <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
                        <input name="name"
                            value={product.name}
                            type="text"
                            className="form-control"
                            aria-describedby="nameHelp"
                            ref={register({
                                required: "Required",
                            })} />
                        {errors.name && errors.name.type === "required" && <span>Không để trống</span>}

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Giá</label>
                        <input name="price" type="number" className="form-control"
                            value={product.price}
                            ref={register({
                                required: "Required",
                                validate: value => value > 0 || "Giá phải lớn hơn 0"
                            })} />
                        {errors.price && errors.price.type === "required" && <span>Không để trống</span>}
                        {errors.price && errors.price.message}
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputState">Loại sản Phẩm</label>
                        <select name="category" id="inputState" className="form-control" ref={register}>
                            <option value='None'>Chưa Chọn</option>
                            <option value='Nam'>Nam</option>
                            <option value='Nữ' >Nữ</option>
                            <option value='Trẻ Em'>Trẻ Em</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    )
}

EditProduct.propTypes = {

}

export default EditProduct
