import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { ExploreIcon, FollowingIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Menu() {
    return (
        <div className={cx('wrapper')}>
            <MenuItem to={config.routes.home} icon={<HomeIcon width="3.2rem" height="3.2rem" />}>
                Dành cho ban
            </MenuItem>
            <MenuItem to={config.routes.following} icon={<FollowingIcon width="3.2rem" height="3.2rem" />}>
                Đang Follow
            </MenuItem>
            <MenuItem to={config.routes.explore} icon={<ExploreIcon width="3.2rem" height="3.2rem" />}>
                Khám phá
            </MenuItem>
            <MenuItem to={config.routes.live} icon={<LiveIcon width="3.2rem" height="3.2rem" />}>
                LIVE
            </MenuItem>
        </div>
    );
}

export default Menu;
