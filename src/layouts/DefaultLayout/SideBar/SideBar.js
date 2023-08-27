import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Menu from './Menu';
import Button from '~/components/Button/Button';
import FollowingAccount from '~/components/FollowingAccount';

const cx = classNames.bind(styles);

function SideBar() {
    const currenUser = true;

    return (
        <aside className={cx('wrapper')}>
            <Menu />
            {currenUser ? (
                <FollowingAccount lable="Các tài khoản đang follow" />
            ) : (
                <div className={cx('login')}>
                    <p className={cx('login-title')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                    <Button className={cx('login-btn')} outline large>
                        Đăng nhập
                    </Button>
                </div>
            )}
        </aside>
    );
}

export default SideBar;
