import PropTypes from 'prop-types';
import styles from './FollowingAccount.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const AccountItem = forwardRef(({ data }, ref) => {
    return (
        <div className={cx('account-item')} ref={ref}>
            <Image
                className={cx('user-avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/504c8e671737a034ccbd3c4dc42c436d.jpeg?x-expires=1692968400&x-signature=AKsHdc0h%2BzeOJixhuv2%2F34lIOms%3D"
                alt="Ảnh đại diện"
                fallBack="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/348464898_612727004250189_6267958016901660133_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IX2ZmozJyZQAX9u5bAB&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfDRJQNRcMGu7PdYx0NNWeGAVeb2D83cBPVZvAVBCJM9tg&oe=64EB431C"
            />
            <div className={cx('info')}>
                <span className={cx('nickname')}>
                    nguyenkhanhhuynh
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle} />
                </span>
                <p className={cx('username')}>Nguyễn Khánh Huỳnh</p>
            </div>
        </div>
    );
});

AccountItem.propTypes = {
    data: PropTypes.object,
};

export default AccountItem;
