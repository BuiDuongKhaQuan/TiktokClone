import PropTypes from 'prop-types';
import styles from './FollowingAccount.module.scss';
import classNames from 'classnames/bind';
import AccountItem from './AccountItem';
import Tippy from '@tippyjs/react/headless';
import { Popper } from '~/components/Popper';
import Account from '~/components/Popper/Account';

const cx = classNames.bind(styles);

function FollowingAccount({ lable }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            <Tippy
                interactive
                delay={[200, 300]}
                placement="bottom-start"
                render={(attrs) => (
                    <Popper>
                        <Account />
                    </Popper>
                )}
            >
                <AccountItem />
            </Tippy>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('see')}>Xem thêm</p>
        </div>
    );
}

FollowingAccount.propTypes = {
    lable: PropTypes.string.isRequired,
};

export default FollowingAccount;
