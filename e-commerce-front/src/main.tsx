import AppRouter from '@routes/AppRouter';
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')!).render(
    <AppRouter />
)