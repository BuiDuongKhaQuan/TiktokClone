import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="contatiner">
                <div className="contnet">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
