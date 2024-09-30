import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFetchData, getSearchMovie } from "../../http";
import Navbar from "../browse/Navbar";
import ResultList from "./ResultList";
import SearchForm from "./SearchForm";
const Search = () => {
  const [changeBgNav, setChangeBgNav] = useState(false);
  const [nameFilm, setNameFilm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [allFilm, setAllFilm] = useState({
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  });
  const navigate = useNavigate();
  function handleChangeRoute(page) {
    if (page === "homepage") {
      navigate("/");
    }
    if (page === "search") {
      navigate("/search");
    }
  }
  function handleScroll() {
    if (window.scrollY > 0) {
      setChangeBgNav(true);
    } else {
      setChangeBgNav(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleGetInputFromForm(name) {
    setNameFilm(name);
  }
  useEffect(() => {
    try {
      // * function to get fetched data
      async function getData() {
        setIsLoading(true);
        const data = await getSearchMovie(nameFilm);
        setAllFilm(data);
        setIsLoading(false);
        setIsError(false);
      }
      getData();
    } catch (error) {
      setIsError(true);
    }
  }, [nameFilm]);
  return (
    <div className="app relative bg-black ">
      <Navbar changeBgNav={changeBgNav} handleChangeRoute={handleChangeRoute} />
      <div className="flex flex-row justify-center relative top-[150px]">
        <SearchForm
          className="absolute top-[50%] left-[50%]"
          handleGetInputFromForm={handleGetInputFromForm}
        >
          OK
        </SearchForm>
      </div>
      <ResultList
        allFilm={allFilm}
        isLoading={isLoading}
        isError={isError}
        nameFilm={nameFilm}
      />
    </div>
  );
};

export default Search;
