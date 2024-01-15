import React, { useEffect, useState } from "react";

interface FilterType {
  topRated: boolean;
  search:boolean;
}

interface SearchBarProps{
  onFilteringRestaurants:(filteredRestaurants)=>void;
  restaurants:[],
  filteredRestaurants:[],
}

const SearchBar = ({onFilteringRestaurants, restaurants:baseRestaurantsList,filteredRestaurants}:SearchBarProps) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [filter, setFilter] = useState<FilterType>({
    topRated: false,
    search:false
  });

  const onFilterClick = (filter: keyof FilterType) => {
    setFilter((prev) => ({ ...prev, [filter]: !prev[filter] }))
  }

  const filterRestaurantsByTopRated = (restaurants) => {
    return filter.topRated ? restaurants.filter((restaurant)=>restaurant.info.avgRating>4.5) : baseRestaurantsList ;
  } 

  const searchRestaurant = (searchedRestaurantName:string,restaurants) => {
    console.log("searchRestaurant",searchedRestaurantName)
    return filteredRestaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchedRestaurantName.toLowerCase()));
  }

  function debounce(func, timeout = 3000){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  const debouncedSearchRestaurant = debounce((searchKeyword, restaurants) => {
    const filteredList = searchRestaurant(searchKeyword, restaurants);
    onFilteringRestaurants(filteredList);
   }, 300);

  useEffect(()=>{
    // let filteredRestaurants = restaurants;
    // if(filter.topRated){
      filteredRestaurants = filterRestaurantsByTopRated(filteredRestaurants);
    // }

    onFilteringRestaurants(filteredRestaurants);
    // setFilter((prev)=>({...prev, "topRated":false}));
  },[filter.topRated])

  useEffect(()=>{
    if(filter.search){
    //   console.log("search keyword",searchKeyword)
      debouncedSearchRestaurant(searchKeyword, filteredRestaurants);
      return;
    }
    if(!filter.search){
      onFilteringRestaurants(filteredRestaurants)
    }
  },[filter.search, searchKeyword])

  useEffect(()=>{
    if(searchKeyword !== ''){
      console.log("set search keyword to true")
      setFilter((prev)=>({...prev,search:true}))
      return;
    }
    if(searchKeyword === ''){
      console.log("set search keyword to false")
      setFilter((prev)=>({...prev,search:false}))
      return;
    }
    
  },[searchKeyword])

  const updateSearchKeyword = (value:string) => {
    setSearchKeyword(value);
  }
  
  return (
    <div className="search-bar-contianer">
      <input type="text" className="input" placeholder="Search restaurants..." value={searchKeyword} onChange={(e)=>updateSearchKeyword(e.target.value)} />
      <button className={`btn ${filter.topRated ? 'active-btn' : ''}`} onClick={() => onFilterClick("topRated")}>Top Rated</button>
    </div>
  )
}

export default SearchBar;