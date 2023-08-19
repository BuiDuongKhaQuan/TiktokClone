import Header from './Header';
import SideBar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="contatiner">
                <SideBar />
                <div className="contnet">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
