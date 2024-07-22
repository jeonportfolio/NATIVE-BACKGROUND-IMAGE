export const ACTION_CLICKED_FAVOIRITE ='ACTION_CLICKED_FAVOIRITE';

export const onClickFavorite = (clickedItem) => {

    return{
        type:ACTION_CLICKED_FAVOIRITE,
        clicked:clickedItem
    }
}