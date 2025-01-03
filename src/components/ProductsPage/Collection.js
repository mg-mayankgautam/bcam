import React, { useEffect, useState } from 'react';
import './Collection.css';
import store from '../../store.json';
import { Link, useParams } from 'react-router-dom';
import bnc2 from '../../assets/products/BNC Cable MG3560.png'
import bnc1 from '../../assets/products/BNC cable MG 3564.png'
import sd1 from '../../assets/products/64 GB SD Card.png'
import sd2 from '../../assets/products/128 GB SD Card.png'
import sd3 from '../../assets/products/256 GB SD Card.png'
import one from '../../assets/products/BEC-4G-03-2L3DPT, BEC-Wi-Fi-WL05PT-2L3D.png'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { BsFiletypePdf } from "react-icons/bs";

const Collection = () => {

  const { id, code } = useParams();

  useEffect(() => {
    // const { id, code } = useParams();
    if (code) {
      console.log(code);

      // Search for the product in the store
      const categoryData = store.find(category =>
        category.category.toLowerCase() === decodeURIComponent(id).toLowerCase()
      );

      if (categoryData) {
        // Find the product with matching model_no
        const product = categoryData.products.find(
          (item) => item.model_no === decodeURIComponent(code)
        );

        if (product) {
          setSelectedProduct(product);
          setModal(true);
        }
      }
    }

    // setSelectedProduct(code);
    // setModal(true); 

  }, [code])




  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])


  const [selectedCategory, setSelectedCategory] = useState(id);

  const [products, setProducts] = useState(store.filter((category) => category.category == selectedCategory));


  // const [selectedFilters, setSelectedFilters] = useState(products[0]?.selectedFiltersobj);
  const [selectedFilters, setSelectedFilters] = useState({
    "Mega Pixel": [],
    "IR Range": [],
    "Memory Card": [],
    "Lens": [],
    "Body Type": [],
    "Audio": [],
    "Video Channel": [],
    "Hard Disk": [],
    "Port": [],
    "SFP Port": [],
    "Antenna": [],
    "Adapter": [],
    "Size": [],
    "Channel": [],
    "Ampere": [],
    "Solar Plate": [],
    "Speed": []
  });


  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleProductClick = (product, e) => {
    if (
      e.target.classList.contains('swiper-pagination') ||
      e.target.closest('.swiper-pagination')
    ) {
      e.stopPropagation();
    }
    else {
      console.log(product)
      setSelectedProduct(product);
      setModal(true); // Open the modal
    }
  };




  useEffect(() => {
    setSelectedCategory(id)
    setOpenMobileCategories(false)
  }, [id])

  useEffect(() => {
    setProducts(store.filter((category) => category.category == selectedCategory))
    setSelectedFilters({
      "Mega Pixel": [],
      "IR Range": [],
      "Memory Card": [],
      "Lens": [],
      "Body Type": [],
      "Audio": [],
      "Video Channel": [],
      "Hard Disk": [],
      "Port": [],
      "SFP Port": [],
      "Antenna": [],
      "Adapter": [],
      "Size": [],
      "Channel": [],
      "Ampere": [],
      "Solar Plate": [],
      "Speed": []
    })
    // console.log(selectedCategory)
    // console.log(selectedFilters)
    setOpenMobileCategories(false)
  }, [selectedCategory])


  const handleCloseModal = (e) => {
    if (e.target.className === 'modalContainer') {
      setModal(false);
    }
  };

  const handleCheckboxChange = (category, value) => {
    // This function is called when a checkbox changes state (either checked or unchecked).
    // It updates the selected filters based on the category and the value of the checkbox.

    setSelectedFilters(prevState => {
      // setSelectedFilters is a state updater function that updates the state of selected filters.
      // It receives a function that takes the previous state (prevState) as an argument.

      console.log(prevState[category]);
      // Log the current selections for the specified category to the console for debugging purposes.

      const currentSelections = prevState[category];
      // Get the current selections for the specified category from the previous state.

      const newSelections = currentSelections?.includes(value)
        ? currentSelections.filter(item => item !== value) // Remove if already selected
        : [...currentSelections, value]; // Add if not selected

      // Here, we check if the current selections include the value of the checkbox:
      // - If it does, we filter the currentSelections array to remove that value (unselecting it).
      // - If it does not, we create a new array that includes all the current selections and adds the new value (selecting it).

      return {
        ...prevState, // Spread the previous state to keep all other categories and their selections intact.
        [category]: newSelections // Update the selections for the specified category with the new selections.
      };
    });
  };



  const filterProducts = (products) => {
    // This function filters the given products array based on selected filters.
    return products.filter(product => {
      // The filter method creates a new array with all products that pass the test implemented by the provided function.

      return Object.entries(selectedFilters)?.every(([key, values]) => {
        // Object.entries(selectedFilters) converts the selectedFilters object into an array of key-value pairs.
        // For each key-value pair, we check if the product matches the selected filters.

        if (values.length === 0) return true;
        // If there are no selected filters for this key, we return true, meaning we keep all products.
        // This allows products to be included in the filtered results when no filter is applied.

        const productFilterValue = product.filters.find(filter => filter[key] !== undefined);
        // We use the find method to search through the product's filters to find one that matches the current key.
        // If a matching filter is found, productFilterValue will hold that filter; otherwise, it will be undefined.

        return productFilterValue && values.includes(productFilterValue[key]);
        // We return true if:
        // - productFilterValue is truthy (i.e., a matching filter was found),
        // - and the value of that filter for the current key is included in the selected values.
        // If both conditions are met, the product passes this filter and will be included in the final filtered array.
      });
    });
    // The overall result is an array of products that meet all the selected filter criteria.
  };


  const [openMobileCategories, setOpenMobileCategories] = useState(false);



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


          <div className='categoriesSHOWforMobile'>
            <div className='C_searchHead mobile'
              onClick={() => setOpenMobileCategories(!openMobileCategories)}>
              <div>PRODUCT CATEGORIES</div>
              {/* <div>{openMobileCategories ? '▲' : '▼'}</div> */}
              <div className={openMobileCategories ? 'up' : 'up down'}>▲</div>
            </div>

            {openMobileCategories &&
              <div className='C_categoriesDiv categoriesdropdown'>
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
            }

            {/* {(openMobileCategories && categories) && (
              <div className='categoriesdropdown'>
                {categories.map((match, index) => (
                  <div
                    key={index}
                    className='dropdown-item'
                    onClick={() => handleSelect(match)}
                  >
                    {match}
                  </div>
                ))}
              </div>
            )} */}
          </div>

          <div>
            <div className='C_searchHead'>FILTER BY</div>
            <div className='C_FilterProdDiv'>

              {products[0]?.filters?.length > 0 &&
                products[0].filters.map((filterCategory, index) => {
                  const [key, values] = Object.entries(filterCategory)[0];

                  console.log(filterCategory)
                  return (
                    <div key={index} className='C_filterItem'>
                      <div>{key}</div>

                      <div className='C_filterMapGrid'>
                        {values.map((value, idx) => (

                          <div key={idx} className='C_filtercheckboxFlex'>
                            <input
                              type="checkbox"
                              checked={selectedFilters[key]?.includes(value)}
                              onChange={() => handleCheckboxChange(key, value)}
                            />
                            <label>
                              {value}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}

              {products[0]?.filters?.length == 0 && <div className='C_categoryItem'>No Filters Available</div>}

            </div>

          </div>


        </div>
      </div>


      <div className='collectionMainbar'>
        {products?.length > 0 ? (
          products.map((category) => {

            const filteredProducts = filterProducts(category.products); // Get filtered products for the current category
            // console.log(filteredProducts)
            return (
              <div key={category.category}>
                <div className='C_MainHead'>
                  {category.category}
                </div>

                <div className='C_productsContainer'>
                  {filteredProducts?.length > 0 ? (
                    filteredProducts.map((product) => {
                      if (product.model_no === 'BNC Cable') {
                        return (
                          <div key={product?.model_no} className='C_productItem'
                            onClick={(e) => handleProductClick(product, e)}
                          >
                            {/* <div onClick={handleSwiperPagination}> */}
                            <Swiper className='swiperBNC'
                              modules={[Pagination]}
                              spaceBetween={10}
                              slidesPerView={1}
                              pagination={{ clickable: true, dots: true }}
                              onSwiper={(swiper) => console.log(swiper)}
                              onSlideChange={() => console.log('slide change')}
                            // onClick={handleSwiperPagination} 
                            >
                              <SwiperSlide>
                                <div className='C_prodImg'>
                                  <img src={bnc1} alt='not available' />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='C_prodImg'>
                                  <img src={bnc2} alt='not available' />
                                </div>
                              </SwiperSlide>
                            </Swiper>
                            {/* </div> */}
                            <div className='C_prodText'>
                              {product.model_no}
                            </div>
                          </div>
                        );
                      }
                      else if (product.model_no === 'Micro SD Card') {
                        return (
                          <div key={product?.model_no} className='C_productItem'
                            onClick={(e) => handleProductClick(product, e)}
                          >
                            <Swiper className='swiperSD'
                              modules={[Pagination]}
                              spaceBetween={10}
                              slidesPerView={1}
                              pagination={{ clickable: true, dots: true }}
                              onSwiper={(swiper) => console.log(swiper)}
                              onSlideChange={() => console.log('slide change')}
                            // onClick={handleSwiperPagination} 
                            >
                              <SwiperSlide>
                                <div className='C_prodImg'>
                                  <img src={sd1} alt='not available' />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='C_prodImg'>
                                  <img src={sd2} alt='not available' />
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                <div className='C_prodImg'>
                                  <img src={sd3} alt='not available' />
                                </div>
                              </SwiperSlide>
                            </Swiper>
                            <div className='C_prodText2'>
                              {product.model_no}
                            </div>
                          </div>
                        );
                      }
                      else {
                        return (
                          <div key={product?.model_no} className='C_productItem'
                            onClick={(e) => handleProductClick(product, e)}
                          >
                            <div className='C_prodImg'>
                              <img src={require(`../../assets/products/${product.img}`)} alt='not available' />
                            </div>
                            <div className='C_prodText'>
                              {product.model_no}
                            </div>
                          </div>
                        );
                      }
                    })
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

              {selectedProduct.model_no === "BNC Cable" ? (
                <div className='prod_Img'>

                  <Swiper className='swiperBNC'
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    pagination={{ clickable: true, dots: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                  // onClick={handleSwiperPagination} 
                  >
                    <SwiperSlide>
                      {/* <div className='prod_Img'> */}
                      <img src={bnc1} alt='not available' />
                      {/* </div> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <div className='prod_Img'> */}
                      <img src={bnc2} alt='not available' />
                      {/* </div> */}
                    </SwiperSlide>
                  </Swiper>
                </div>
              ) :
                selectedProduct.model_no === "Micro SD Card" ? (
                  <div className='prod_Img'>

                    <Swiper className='swiperSD'
                      modules={[Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true, dots: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                    // onClick={handleSwiperPagination} 
                    >
                      <SwiperSlide>
                        {/* <div className='prod_Img'> */}
                        <img src={sd1} alt='not available' />
                        {/* </div> */}
                      </SwiperSlide>
                      <SwiperSlide>
                        {/* <div className='prod_Img'> */}
                        <img src={sd2} alt='not available' />
                        {/* </div> */}
                      </SwiperSlide>
                      <SwiperSlide>
                        {/* <div className='prod_Img'> */}
                        <img src={sd3} alt='not available' />
                        {/* </div> */}
                      </SwiperSlide>
                    </Swiper>
                  </div>
                ) :
                  (
                    <div className='prod_Img'>
                      <img src={require(`../../assets/products/${selectedProduct?.img}`)} alt='no' />
                    </div>
                  )}


              <div className='prod_Content'>
                <div className='prod_ContentFLex'>
                  <div className='prod_ContentFlexCol'>
                    <div className='prod_modelno'>{selectedProduct.model_no}</div>
                    <div className='prod_category'>{selectedCategory}</div>
                  </div>

                  {selectedProduct?.pdf &&
                    <div className='pdfIcon'
                      onClick={() => window.open(`/pdfs/${selectedProduct?.pdf}`, "_blank")}>
                      <BsFiletypePdf color='#000066' />
                    </div>
                  }
                </div>

                <ul className='prod_features'>
                  {selectedProduct.features?.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>


              </div>
            </div>

            <div className='prod_btnDiv'>
              <Link to={selectedProduct.form_link}>
                <button className='prod_btn'>
                  Request for information
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;

{/* orignal */ }
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
