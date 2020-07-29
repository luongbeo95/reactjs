import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManage from '../component/Admin/ProductsManage';

//Views
import Home from '../pages/views/Main/Home'
import AdminLayout from '../pages/layouts/AdminLayout';
import MainLayout from '../pages/layouts/MainLayout';
import About from '../pages/views/Main/About';
import Shop from '../pages/views/Main/Shop';
import ProductDetail from '../pages/views/Main/ProductDetail';
import AddProduct from '../component/Admin/AddProduct';


const Routers = ({ products, onRemove }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?" exact>
                    <AdminLayout>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManage products={products} onRemove={onHandleRemove}></ProductsManage>
                            </Route>
                            <Route path='/admin/add'>
                                <AddProduct></AddProduct>
                            </Route>
                        </Switch>
                    </AdminLayout>
                </Route>
                <Route>
                    <MainLayout>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/shop">
                                <Shop products={products} />
                            </Route>
                            <Route path="/product/:id">
                                <ProductDetail />
                            </Route>
                        </Switch>
                    </MainLayout>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
