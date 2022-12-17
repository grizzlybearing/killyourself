import React from 'react';
import s from "./List.module.css";
import Search from "./Search/Search";
import filmakersInfo from "../../data/filmakersInfo.js";

const List = (props) => {
    return (
        <div className={s.wrapper}>
            <Search details={filmakersInfo}/>
        </div>
    );
};

export default List;