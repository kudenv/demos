import { Outlet } from 'react-router';
import { Header } from '@/components/Header';
import { Footer } from "@/components/Footer";
import { TopHeader } from '@/components/TopHeader';

const AppLayout = () => {
    return (
        <div className='app-layout'>
            <TopHeader />
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout;