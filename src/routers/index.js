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
import EditProduct from '../component/Admin/EditProduct';

const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <AdminLayout>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' render={(props) =>
                                <ProductsManage {...props} products={products} onRemove={onHandleRemove} />
                            }></Route>
                            <Route path='/admin/add' render={(props) =>
                                <AddProduct {...props} onAdd={onAdd} />}>
                            </Route>
                            <Route path='/admin/edit/:id'>
                                <EditProduct products={products} onUpdate={onHandleUpdate} />
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
