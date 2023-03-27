import React from "react";
import "../companents_styles.css";
import * as S from "./filter_button_s";
const { useState } = React;
const { useEffect } = React;

function FilterButton({ name, visible, onSelect }) {
  let [filter, setFilter] = useState();

  useEffect(() => {
    fetch("https://painassasin.online/catalog/track/all/")
      .then((response) => response.json())
      .then((posts) => {
        if (name === "исполнителю") {
          setFilter(
            posts.map((elem) => <p key={elem.id}>{elem.author}</p>).slice(0, 5)
          );
        }
        if (name === "году выпуска") {
          setFilter(
            posts
              .map((elem) => <p key={elem.id}>{elem.release_date}</p>)
              .slice(0, 5)
          );
        }
        if (name === "жанру") {
          setFilter(
            posts.map((elem) => <p key={elem.id}>{elem.genre}</p>).slice(0, 3)
          );
        }
      });
  }, []);

  let Clicker = (e) => {
    if (visible) {
      onSelect("null");
    } else {
      onSelect(name);
    }
  };

  return (
    <React.Fragment>
      <S.filterButton
        className={`filter__button _btn-text ${
          visible ? "filter_button-activity" : ""
        }`}
        onClick={Clicker}
      >
        {name}
      </S.filterButton>
      {visible && (
        <S.filterButtonDropdown className="filter__button-dropdown">
          <S.filterButtonContent className="filter__button-content">
            {filter}
          </S.filterButtonContent>
        </S.filterButtonDropdown>
      )}
    </React.Fragment>
  );
}

export default FilterButton;
