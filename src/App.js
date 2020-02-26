import React, { useState } from "react";
import { Rating } from "./Rating";
import { listInfo } from "./listOfItems";
import {
  ItemWrapper,
  Picture,
  NameAndRatingWrapper,
  DeleteButton,
  PageWrapper,
  Title,
  Search
} from "./styles";

console.log("hi");

const Restaurant = React.memo(
  ({ id, image, deleteItem, rating, name, setRating }) => (
    <ItemWrapper>
      <Picture image={image} />
      <NameAndRatingWrapper>
        <h2>{name}</h2>
        <Rating rating={rating} setRating={setRating} name={name} id={id} />
      </NameAndRatingWrapper>
      <DeleteButton onClick={() => deleteItem(id)}>Remove</DeleteButton>
    </ItemWrapper>
  )
);

const getYear = () => {
  console.log("running");
  const date = new Date();
  return date.getFullYear();
};

export const App = () => {
  const [restaurants, setRestaurants] = useState(listInfo);

  let setRatingHandler = (id, newRating) => {
    setRestaurants(prevState => {
      const items = [...prevState];
      const index = items.findIndex(e => e.id === id);
      items[index].rating = newRating;
      return items;
    });
  };

  let deleteItemHandler = id => {
    setRestaurants(prevState => {
      const items = [...prevState];
      const index = items.findIndex(e => e.id === id);
      items.splice(index, 1);
      return items;
    });
  };

  const search = (e, query) => {
    if (e.key === "Enter") {
      setRestaurants(prevState => {
        const items = [...prevState];
        const filteredItems = items.filter(x =>
          x.name.toLowerCase().includes(query)
        );
        return filteredItems;
      });
    }
  };

  deleteItemHandler = React.useCallback(deleteItemHandler, []);
  setRatingHandler = React.useCallback(setRatingHandler, []);

  const currentYear = React.useMemo(() => getYear(), []);

  return (
    <PageWrapper>
      <Title>Local Restaurants in {currentYear}</Title>
      <SearchComponent search={search} />
      {restaurants.map(({ id, ...props }) => (
        <Restaurant
          key={id}
          id={id}
          setRating={setRatingHandler}
          deleteItem={deleteItemHandler}
          {...props}
        />
      ))}
    </PageWrapper>
  );
};

const SearchComponent = ({ search }) => {
  const [query, setQuery] = useState("");
  return (
    <Search
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={e => {
        search(e, query);
      }}
    />
  );
};
