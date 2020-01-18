import React , { Component } from 'react';
import { ListItem } from '../list/item';
import Card from '../card/card';
import './daily-recipe.scss';
import Spinner from '../spinner/spinner';
import { withRouter } from 'react-router-dom'
import Header from '../header/header';
class DailyRecipe extends Component {
    constructor(props) {
        super(props);
    }

    goToDetailPage = (recipe) => {
        this.props.history.push(`/details/${recipe.recipe_id}`);
    }

    getDailyRecipe = () => {
        this.props.actions.GetDailyRecipe();
    }

    render() {
        const { recipes, isFetching } = this.props;
        const isEmpty = recipes.length === 0;
        const firstRecipe = recipes && recipes.length && recipes[0];
        return (
            <div className="daily-recipe__container">
            <Header isDisabled={isEmpty && !isFetching} title={"Suggestie voor vandaag:"} action={() => this.getDailyRecipe()}></Header>
                {isEmpty 
                    ? (isFetching ? <Spinner></Spinner> : (<p className="daily-recipe__norecipes">Er zijn voor vandaag geen suggesties beschikbaar.</p>)) 
                    : (<article className="daily-recipe__article">
                        <div className="daily-recipe__article-active">
                            <Card recipe={firstRecipe} navigateEvent={this.goToDetailPage} />
                        </div>
                        <ul className="daily-recipe-list">
                            {recipes.map((recipe, index) => {
                                if (index !== 0) {
                                    return <ListItem navigateEvent={this.goToDetailPage} recipe={recipe} key={index} />
                                }
                            })}
                        </ul>
                    </article>)
                }
        </div>
        )
    }
}

export default withRouter(DailyRecipe);