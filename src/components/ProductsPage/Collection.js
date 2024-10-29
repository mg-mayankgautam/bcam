import React, { useEffect, useState } from 'react';
import './Collection.css';
import store from '../../store.json';
import { Link, useParams } from 'react-router-dom';

const Collection = () => {

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])


  const [selectedCategory, setSelectedCategory] = useState(id);

  const [products, setProducts] = useState(store.filter((category) => category.category === selectedCategory));

  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModal(true); // Open the modal
  };


  useEffect(() => {
    setSelectedCategory(id)
  }, [id])

  useEffect(() => {
    setProducts(store.filter((category) => category.category === selectedCategory))
    console.log(selectedCategory)
  }, [selectedCategory])


  const handleCloseModal = (e) => {
    if (e.target.className === 'modalContainer') {
      setModal(false);
    }
  };

  return (
    <div className='Collection'>
      <div className='collectionSidebar'>
        {/* <div className='C_searchDiv'>
          <div className='C_searchHead'>SEARCH</div>
          <input placeholder='Search' className='navInput' />
        </div> */}

        <div className='C_FilterDiv'>

          <div className='C_searchHead'>PRODUCT CATEGORIES</div>

          <div>
            {store.map((category) => (
              <div
                key={category.category}
                onClick={() => handleCategorySelect(category.category)}
                className={selectedCategory == category.category ? 'C_categoryItem bold' : 'C_categoryItem'}
              >
                {category.category}
              </div>
            ))}
          </div>

          <div className='C_searchHead'>FILTER BY</div>
          <div>
            <div className='C_categoryItem'>
              Product Series
            </div>

            <div className='C_categoryItem'>
              Audio
            </div>

            <div className='C_categoryItem'>
              Body Type
            </div>

            <div className='C_categoryItem'>
              Bandwidth Incoming
            </div>

            <div className='C_categoryItem'>
              IR
            </div>

            <div className='C_categoryItem'>
              IR Range
            </div>

            <div className='C_categoryItem'>
              Resolution
            </div>
          </div>

        </div>
      </div>

      <div className='collectionMainbar'>
        {products.length > 0 ? (
          products.map((category) => (

            <div key={category.category}>

              <div className='C_MainHead'>
                {category.category}
              </div>

              <div className='C_productsContainer'>

                {category?.products?.map((product) => (

                  <div key={product?.model_no} className='C_productItem'
                    onClick={() => handleProductClick(product)}
                  >

                    <div className='C_prodImg'>
                      <img src={require(`../../assets/products/${product.img}`)} alt='not available' />
                    </div>
                    <div className='C_prodText'>
                      {product.model_no}
                    </div>

                  </div>
                ))}

              </div>
            </div>
          ))
        ) : (
          <div>Select a category to see products.</div>
        )}
      </div>


      {modal && selectedProduct && (
        <div className='modalContainer' onClick={handleCloseModal}>
          <div className='modal'>

            <div className='prod_Flex'>

              <div className='prod_Img'>
                <img src={require(`../../assets/products/${selectedProduct?.img}`)} alt='no' />
              </div>

              <div className='prod_Content'>
                <div className='prod_modelno'>{selectedProduct.model_no}</div>
                <div className='prod_category'>{selectedCategory}</div>

                <ul className='prod_features'>
                  {selectedProduct.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>


              </div>
            </div>

            <div className='prod_btnDiv'>
              {/* <Link to='https://forms.gle/C4NbEVKxn3n5WKcW7' target='_blank'> */}
                <button className='prod_btn'>
                  Request for information
                </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
