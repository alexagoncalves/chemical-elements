import axios from 'axios';
import { GET_ELEMENTS_FROM_API, elementsDataSave } from '../actions/elements';
import { loadingData } from '../actions/loader';

const elementsMiddleware = (store) => (next) => (action) => {
    if (action.type === GET_ELEMENTS_FROM_API) {
        axios.get(
            'https://periodic-table-elements-info.herokuapp.com/elements'
        )
        .then ((response) => {
            const actionToDispatch = elementsDataSave(response.data);
            store.dispatch(actionToDispatch);
            store.dispatch(loadingData(false));
        })
        .catch((error) => {
            console.log(error);
        })
    }
    next(action);
}

export default elementsMiddleware;