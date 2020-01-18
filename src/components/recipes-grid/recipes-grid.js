import React, { useEffect } from 'react';
import './recipes-grid.scss';
import Card from '../card/card';
import { withRouter } from 'react-router-dom';

const RecipesGrid = (props) => {
  const { recipes, isFetching } = props;

  const goToDetailPage = (recipe) => {
    if (!recipe || !recipe.recipe_id) { return }
    props.history.push(`/details/${recipe.recipe_id}`);
  }

  useEffect(() => {
    return () => {
      props.actions.ResetState();
    }
  }, []);

    return (
      <React.Fragment>
        <section className="grid">
           {(!isFetching && recipes && !!recipes.length && recipes.map((recipe, key) => {
            return (
            <article key={key} className="grid__cell">
              <Card recipe={recipe} navigateEvent={goToDetailPage}></Card>
            </article>)
          }))}
        </section>
      </React.Fragment>
    );
}

export default withRouter(RecipesGrid);