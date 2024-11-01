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

  const [products, setProducts] = useState(store.filter((category) => category.category == selectedCategory));

  
  const [selectedFilters, setSelectedFilters] = useState(products[0]?.selectedFiltersobj);
//   const [selectedFilters, setSelectedFilters] = useState({
//     "Mega Pixel": [],
//     "IR Range": [],
//     "Memory Card": [],
//     "Lens": []
// });
console.log(products)

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
    setProducts(store.filter((category) => category.category == selectedCategory))
    console.log(selectedCategory)
  }, [selectedCategory])


  const handleCloseModal = (e) => {
    if (e.target.className === 'modalContainer') {
      setModal(false);
    }
  };

  const handleCheckboxChange = (category, value) => {
    setSelectedFilters(prevState => {
      console.log(prevState[category])
      const currentSelections = prevState[category];
      
      const newSelections = currentSelections?.includes(value)
        ? currentSelections.filter(item => item !== value) // Remove if already selected
        : [...currentSelections, value]; // Add if not selected

      return {
        ...prevState,
        [category]: newSelections
      };
    });
  };

  const filterProducts = (products) => {
    return products.filter(product => {
      return Object.entries(selectedFilters)?.every(([key, values]) => {
        if (values.length === 0) return true; // If no filters selected for this key, keep all products
        const productFilterValue = product.filters.find(filter => filter[key] !== undefined);
        return productFilterValue && values.includes(productFilterValue[key]);
      });
    });
  };


  return (
    <div className='Collection'>
      <div className='collectionSidebar'>
        {/* <div className='C_searchDiv'>
          <div className='C_searchHead'>SEARCH</div>
          <input placeholder='Search' className='navInput' />
        </div> */}

        <div className='C_ProdFunctions'>

          <div className='categoriesHideforMobile'>
            <div className='C_searchHead'>PRODUCT CATEGORIES</div>

            <div className='C_categoriesDiv'>
              {store?.map((category) => (
                <div
                  key={category.category}
                  onClick={() => handleCategorySelect(category.category)}
                  className={selectedCategory == category.category ? 'C_categoryItem bold' : 'C_categoryItem'}
                >
                  {category.category}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className='C_searchHead'>FILTER BY</div>
            <div className='C_FilterProdDiv'>
              {/* orignal */}
              {/* <div className='C_categoryItem'>
              Mega Pixel
              </div> */}

              {/* {products[0]?.filters?.map((filter, index) => {
                const filterKey = Object.keys(filter)[0]; // Get the filter name
                const filterOptions = filter[filterKey]; // Get the options for the filter

                return (
                  <div key={index} className='C_categoryItem'>
                    <h4>{filterKey}</h4>
                    {filterOptions.map((option, idx) => (
                      <label key={idx} className='checkboxLabel'>
                        <input
                          type='checkbox'
                          value={option}

                        />
                        {option}
                      </label>
                    ))}
                  </div>
                );
              })} */}
              {/* {products[0].filters.map((filterCategory, index) => {
            // Extract key-value pairs from the filterCategory object
            const [key, values] = Object.entries(filterCategory)[0]; // Get the first key-value pair

            return (
                <div key={index}>
                    <h4>{key}</h4>
                    <ul>
                        {values.map((value, idx) => (
                            <li key={idx}>{value}</li>
                        ))}
                    </ul>
                </div>
            );
        })} */}

              {products[0].filters.map((filterCategory, index) => {
                const [key, values] = Object.entries(filterCategory)[0];

                return (
                  <div key={index}>
                    <h4>{key}</h4>
                    <ul>
                      {values.map((value, idx) => (

                        <li key={idx}>
                          <label>
                            <input
                              type="checkbox"
                              checked={selectedFilters[key]?.includes(value)}
                              onChange={() => handleCheckboxChange(key, value)}
                            />
                            {value}

                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}

            </div>










          </div>


        </div>
      </div>

      {/* <div className='collectionMainbar'>
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
      </div> */}

      <div className='collectionMainbar'>
        {products.length > 0 ? (
          products.map((category) => {
            const filteredProducts = filterProducts(category.products); // Get filtered products for the current category

            return (
              <div key={category.category}>
                <div className='C_MainHead'>
                  {category.category}
                </div>

                <div className='C_productsContainer'>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
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
                    ))
                  ) : (
                    <div>No products match your filters.</div>
                  )}
                </div>
              </div>
            );
          })
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
