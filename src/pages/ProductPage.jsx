import React from 'react';
import { Outlet } from 'react-router-dom';
import { productLink } from '../utils/navLink';
import { urlPage } from '../utils/constans';
import NavPage from '../components/layouts/NavPage';

const ProductPage = () => {
  return (
    <>
      <NavPage
        links={productLink}
        basePath={urlPage.PRODUCT_BANK}
        entityName='Bank'
      />
      <Outlet />
    </>
  );
};

export default ProductPage;
