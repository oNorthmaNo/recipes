import React, { useEffect } from 'react';
import '../recipes-grid/recipes-grid.scss';
import { withRouter } from 'react-router-dom';

const CategoriesGrid = (props) => {

  useEffect(() => console.log('CategoriesGrid', props.history), []);

  const { categories, isFetching, categorySelected } = props;
    return (
      <React.Fragment>
        <section className="grid">
          {(!isFetching && categories.map((category, key) => {
            return (
            <article key={key} className="grid__cell">
              <div className="grid__cell__content" onClick={() => categorySelected(category.name)}>
                <h2>{category.name}</h2>
              <picture>
                <img className="grid__cell_image" src={require('../../assets/images/recipe-placeholder.jpg')} />
              </picture>
              </div>
            </article>)
          }))}
        </section>
      </React.Fragment>
    );
}

export default withRouter(CategoriesGrid);