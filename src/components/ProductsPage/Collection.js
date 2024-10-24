import React, { useEffect, useState } from 'react';
import './Collection.css';
import store from '../../store.json';
import img from '../../assets/products/SGA60E12-P1J - Power Adapter.png'

const Collection = () => {

  const [selectedCategory, setSelectedCategory] = useState("4G Camera");
  
  const [products, setProducts] = useState(store.filter((category) => category.category === selectedCategory));
  
  const [modal, setModal] = useState(false)


  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };


  useEffect(() => {
    setProducts(store.filter((category) => category.category === selectedCategory))
  }, [selectedCategory])


  return (
    <div className='Collection'>
      <div className='collectionSidebar'>
        <div className='C_searchDiv'>
          <div className='C_searchHead'>SEARCH</div>
          <input placeholder='Search' className='navInput' />
        </div>

        <div className='C_FilterDiv'>

          <div className='C_searchHead'>PRODUCT CATEGORIES</div>

          <div>
            {store.map((category) => (
              <div
                key={category.category}
                onClick={() => handleCategorySelect(category.category)}
                className='C_categoryItem'
              >
                &gt; {category.category}
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
                  // onClick={setModal(true)}
                  >

                    <div className='C_prodImg'>
                      <img src={require(`../../assets/products/${product?.img}`)} alt='no' />
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
    </div>
  );
};

export default Collection;
