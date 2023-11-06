/* eslint-disable prettier/prettier */
const toastReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [...state.toasts, action.payload],
            };
        case 'DELETE_TOAST':
            // eslint-disable-next-line no-case-declarations
            const updatedToasts = state.toasts.filter(
                (toast) => toast.id !== action.payload,
            );
            return {
                ...state,
                toasts: updatedToasts,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export default toastReducer;
