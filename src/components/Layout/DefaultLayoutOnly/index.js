import Header from '~/components/Layout/components/Header';

function DefaultLayoutOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="contatiner">
                <div className="contnet">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayoutOnly;
