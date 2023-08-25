import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/asstes/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {
    CoinsIcon,
    DarkModeIcon,
    FavoritesIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LiveHubIcon,
    LogOutIcon,
    MessageIcon,
    PlusIcon,
    SetttingIcon,
    UserIcon,
} from '~/components/Icons';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'Việt Nam',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Việt Nam',
                },
            ],
        },
    },
    {
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard and shortcut',
    },
    {
        icon: <DarkModeIcon />,
        title: 'Dark mode',
    },
];

const MENU_ITEMS_USER = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/profile',
    },
    {
        icon: <FavoritesIcon />,
        title: 'Favorites',
        to: '/favorites',
    },
    {
        icon: <CoinsIcon />,
        title: 'Get Coins',
        to: '/coins',
    },
    {
        icon: <LiveHubIcon />,
        title: 'LIVE Creator Hub',
        to: '/live',
    },
    {
        icon: <SetttingIcon />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = false;

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <h2 className={cx('warpper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="logo" />
                {/* Search */}
                <Search />
                <div className={cx('action')}>
                    <Button upload leftIcon={<PlusIcon width="20px" height="20px" />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon width="26px" height="26px" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn', 'inbox-icon')}>
                                    <InboxIcon width="32px" height="32px" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button outline>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? MENU_ITEMS_USER : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/504c8e671737a034ccbd3c4dc42c436d.jpeg?x-expires=1692968400&x-signature=AKsHdc0h%2BzeOJixhuv2%2F34lIOms%3D"
                                alt="Ảnh đại diện"
                                fallBack="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/348464898_612727004250189_6267958016901660133_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IX2ZmozJyZQAX9u5bAB&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfDRJQNRcMGu7PdYx0NNWeGAVeb2D83cBPVZvAVBCJM9tg&oe=64EB431C"
                            />
                        ) : (
                            <button className={cx('menu-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </h2>
    );
}

export default Header;
