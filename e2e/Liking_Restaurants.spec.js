const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Your Favorite List is Empty!', '.content__label');

    I.amOnPage('/');

    I.seeElement('.item a');

    const firstRestaurant = locate('.item a').last();
    const firstRestaurantTitle = await I.grabTextFrom(locate('.item__title').last());
    I.click(firstRestaurant);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.seeElement('restaurant-item');
    const favoritedRestaurantTitle = await I.grabTextFrom('.item__title');

    assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Your Favorite List is Empty!', '.content__label');

    I.amOnPage('/');

    I.seeElement('.item a');

    const firstRestaurant = locate('.item a').last();
    I.click(firstRestaurant);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.item a');

    const firstFavoritedRestaurant = locate('.item a').last();
    const firstFavoritedRestaurantTitle = await I.grabTextFrom(locate('.item__title').last());
    I.click(firstFavoritedRestaurant);

    I.seeElement('.detail__title');
    const favoritedRestaurantTitle = await I.grabTextFrom('.detail__title');
    assert.strictEqual(firstFavoritedRestaurantTitle, favoritedRestaurantTitle);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.see('Your Favorite List is Empty!', '.content__label');
});
