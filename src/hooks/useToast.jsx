import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { ToastContext } from '../contexts/ToastContext';

// eslint-disable-next-line import/prefer-default-export
export const useToast = () => useContext(ToastContext);
